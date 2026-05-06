package model

// LoginRequest represents the login request body.
type LoginRequest struct {
	UserID   string `json:"userId" validate:"required"`
	Password string `json:"password" validate:"required"`
}

// TermsAcceptRequest represents the request body for accepting terms and conditions.
type TermsAcceptRequest struct {
	AcceptedAt string `json:"acceptedAt" validate:"required"`
}
