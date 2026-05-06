-- Create TERMS_ACCEPTANCE table for recording user agreement to terms and conditions
CREATE TABLE IF NOT EXISTS "TERMS_ACCEPTANCE" (
    "ID"          BIGSERIAL     PRIMARY KEY,
    "USER_ID"     VARCHAR(50)   NOT NULL,
    "ACCEPTED_AT" TIMESTAMP     NOT NULL,
    "CREATED_AT"  TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- Index for fast lookups by USER_ID
CREATE INDEX IF NOT EXISTS idx_terms_acceptance_user_id ON "TERMS_ACCEPTANCE" ("USER_ID");
