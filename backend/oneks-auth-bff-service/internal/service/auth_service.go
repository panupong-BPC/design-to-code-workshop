package service

import (
	"context"
	"database/sql"
	"log/slog"
	"time"

	"github.com/golang-jwt/jwt/v5"

	"oneks-auth-bff-service/internal/constant"
	"oneks-auth-bff-service/internal/model"
	"oneks-auth-bff-service/internal/repository"
	"oneks-auth-bff-service/pkg/apperror"
)

const logPrefix = constant.LogPrefix
const termsLogPrefix = constant.TermsLogPrefix

type AuthService struct {
	repo      repository.UserRepository
	termsRepo repository.TermsRepository
	jwtSecret []byte
	jwtExpiry time.Duration
}

func NewAuthService(repo repository.UserRepository, termsRepo repository.TermsRepository, jwtSecret string, jwtExpiry time.Duration) *AuthService {
	return &AuthService{
		repo:      repo,
		termsRepo: termsRepo,
		jwtSecret: []byte(jwtSecret),
		jwtExpiry: jwtExpiry,
	}
}

func (s *AuthService) Login(ctx context.Context, req model.LoginRequest) (*model.LoginResponse, error) {
	slog.InfoContext(ctx, logPrefix+" Login started", "userId", req.UserID)

	user, err := s.repo.FindByUserID(ctx, req.UserID)
	if err != nil {
		if err == sql.ErrNoRows {
			slog.WarnContext(ctx, logPrefix+" Login user not found", "userId", req.UserID)
			return nil, apperror.Unauthorized(constant.ErrInvalidCredentials.Message)
		}
		slog.ErrorContext(ctx, logPrefix+" Login repo error", "error", err)
		return nil, apperror.Internal("failed to query user")
	}

	if !user.IsActive {
		slog.WarnContext(ctx, logPrefix+" Login account locked", "userId", req.UserID)
		return nil, apperror.Unauthorized(constant.ErrAccountLocked.Message)
	}

	if user.PasswordHash != req.Password {
		slog.WarnContext(ctx, logPrefix+" Login invalid password", "userId", req.UserID)
		return nil, apperror.Unauthorized(constant.ErrInvalidCredentials.Message)
	}

	expiresAt := time.Now().Add(s.jwtExpiry)

	token, err := s.generateToken(user, expiresAt)
	if err != nil {
		slog.ErrorContext(ctx, logPrefix+" Login token generation failed", "error", err)
		return nil, apperror.Internal("failed to generate token")
	}

	slog.InfoContext(ctx, logPrefix+" Login completed", "userId", req.UserID)

	return &model.LoginResponse{
		Token:     token,
		ExpiresAt: expiresAt.Format(time.RFC3339),
		User: model.UserResponse{
			UserID:     user.UserID,
			FullName:   user.FullName,
			Role:       user.Role,
			BranchCode: user.BranchCode,
			BranchName: user.BranchName,
		},
	}, nil
}

func (s *AuthService) GetTerms(ctx context.Context) (*model.TermsContentResponse, error) {
	slog.InfoContext(ctx, termsLogPrefix+" GetTerms started")
	return &model.TermsContentResponse{
		Title:       "Terms and conditions",
		LastUpdated: "10/10/2025",
		Sections: []model.TermsSection{
			{Heading: "Purchases", Body: "When you make a purchase through our platform, you agree to provide accurate and complete information. All purchases are subject to product availability and our pricing terms, which may change without notice. We reserve the right to refuse or cancel any order at our discretion."},
			{Heading: "Subscriptions", Body: "Subscription services are billed on a recurring basis. You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period, and no refunds will be issued for the remaining period."},
			{Heading: "Content", Body: "All content provided through this platform, including text, graphics, images, and data, is the exclusive property of One Corporate Portal or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent."},
			{Heading: "Links To Other Web Sites", Body: "Our platform may contain links to third-party websites. These links are provided for your convenience only. We have no control over and accept no responsibility for the content or availability of any linked sites. Accessing third-party links is at your own risk."},
			{Heading: "Changes", Body: "We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the platform after any such changes constitutes your acceptance of the new terms. We encourage you to review these terms periodically."},
			{Heading: "Contact Us", Body: "If you have any questions about these Terms and Conditions, please contact our support team at support@onecorporateportal.com or through the Help and Support section within the platform."},
		},
	}, nil
}

func (s *AuthService) AcceptTerms(ctx context.Context, tokenString string, req model.TermsAcceptRequest) error {
	slog.InfoContext(ctx, termsLogPrefix+" AcceptTerms started")

	token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, apperror.Unauthorized("unexpected signing method")
		}
		return s.jwtSecret, nil
	})
	if err != nil || !token.Valid {
		slog.WarnContext(ctx, termsLogPrefix+" AcceptTerms invalid token")
		return apperror.Unauthorized(constant.ErrUnauthorized.Message)
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return apperror.Unauthorized(constant.ErrUnauthorized.Message)
	}

	userID, ok := claims["sub"].(string)
	if !ok || userID == "" {
		return apperror.Unauthorized(constant.ErrUnauthorized.Message)
	}

	acceptedAt, err := time.Parse(time.RFC3339, req.AcceptedAt)
	if err != nil {
		return apperror.BadRequest("invalid acceptedAt format, expected RFC3339")
	}

	entity := &model.TermsAcceptanceEntity{
		UserID:     userID,
		AcceptedAt: acceptedAt,
	}

	if err := s.termsRepo.CreateTermsAcceptance(ctx, entity); err != nil {
		slog.ErrorContext(ctx, termsLogPrefix+" AcceptTerms repo error", "error", err)
		return apperror.Internal(constant.ErrTermsAcceptanceFailed.Message)
	}

	slog.InfoContext(ctx, termsLogPrefix+" AcceptTerms completed", "userId", userID)
	return nil
}

func (s *AuthService) generateToken(user *model.UserEntity, expiresAt time.Time) (string, error) {
	claims := jwt.MapClaims{
		"sub":        user.UserID,
		"fullName":   user.FullName,
		"role":       user.Role,
		"branchCode": user.BranchCode,
		"iat":        time.Now().Unix(),
		"exp":        expiresAt.Unix(),
	}

	t := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return t.SignedString(s.jwtSecret)
}
