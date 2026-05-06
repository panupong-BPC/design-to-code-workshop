package router

import (
	"net/http"

	"oneks-auth-bff-service/internal/handler"
	"oneks-auth-bff-service/internal/middleware"
)

func New(h *handler.AuthHandler) http.Handler {
	mux := http.NewServeMux()

	// Auth routes
	mux.HandleFunc("POST /rest/api/v1/auth/login", h.Login)
	mux.HandleFunc("GET /rest/api/v1/auth/terms", h.GetTerms)
	mux.HandleFunc("POST /rest/api/v1/auth/terms/accept", h.AcceptTerms)

	// Health check
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status":"UP"}`))
	})

	// Apply middleware stack
	var chain http.Handler = mux
	chain = middleware.Logging(chain)
	chain = middleware.CORS(chain)

	return chain
}
