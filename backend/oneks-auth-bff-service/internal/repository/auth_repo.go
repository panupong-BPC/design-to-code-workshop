package repository

import (
	"context"
	"database/sql"

	"oneks-auth-bff-service/internal/model"
)

type UserRepository interface {
	FindByUserID(ctx context.Context, userID string) (*model.UserEntity, error)
}

type userRepo struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) UserRepository {
	return &userRepo{db: db}
}

func (r *userRepo) FindByUserID(ctx context.Context, userID string) (*model.UserEntity, error) {
	var e model.UserEntity
	err := r.db.QueryRowContext(ctx,
		`SELECT "ID", "USER_ID", "PASSWORD_HASH", "FULL_NAME", "ROLE",
		        "BRANCH_CODE", "BRANCH_NAME", "IS_ACTIVE", "CREATED_AT", "UPDATED_AT"
		 FROM "USERS"
		 WHERE "USER_ID" = $1`, userID).
		Scan(&e.ID, &e.UserID, &e.PasswordHash, &e.FullName, &e.Role,
			&e.BranchCode, &e.BranchName, &e.IsActive, &e.CreatedAt, &e.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return &e, nil
}

// TermsRepository defines the database operations for terms acceptance.
type TermsRepository interface {
	GetTermsAcceptance(ctx context.Context, userID string) (*model.TermsAcceptanceEntity, error)
	CreateTermsAcceptance(ctx context.Context, entity *model.TermsAcceptanceEntity) error
}

type termsRepo struct {
	db *sql.DB
}

func NewTermsRepository(db *sql.DB) TermsRepository {
	return &termsRepo{db: db}
}

func (r *termsRepo) GetTermsAcceptance(ctx context.Context, userID string) (*model.TermsAcceptanceEntity, error) {
	var e model.TermsAcceptanceEntity
	err := r.db.QueryRowContext(ctx,
		`SELECT "ID", "USER_ID", "ACCEPTED_AT", "CREATED_AT"
		 FROM "TERMS_ACCEPTANCE"
		 WHERE "USER_ID" = $1
		 ORDER BY "CREATED_AT" DESC
		 LIMIT 1`, userID).
		Scan(&e.ID, &e.UserID, &e.AcceptedAt, &e.CreatedAt)
	if err != nil {
		return nil, err
	}
	return &e, nil
}

func (r *termsRepo) CreateTermsAcceptance(ctx context.Context, entity *model.TermsAcceptanceEntity) error {
	_, err := r.db.ExecContext(ctx,
		`INSERT INTO "TERMS_ACCEPTANCE" ("USER_ID", "ACCEPTED_AT")
		 VALUES ($1, $2)`,
		entity.UserID, entity.AcceptedAt)
	return err
}
