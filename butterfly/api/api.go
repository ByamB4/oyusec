package api

import (
	"butterfly/db"
	"butterfly/pkg/auth"

	"github.com/gin-gonic/gin"
)

type Server struct {
	router   gin.IRouter
	database *db.Instance
	gjwt     *auth.GJWT
	salt     string
}

func NewServer(router gin.IRouter, database *db.Instance, gjwt *auth.GJWT, salt string) (*Server, error) {

	router = router.Group("/api/v1")

	return &Server{
		router:   router,
		database: database,
		gjwt:     gjwt,
		salt:     salt,
	}, nil
}

func (s *Server) SetupRegisterApi() {
	s.RegisterAccountAPI()
}