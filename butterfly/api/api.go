package api

import (
	"butterfly/pkg/db"
	"github.com/gin-gonic/gin"
)

type Server struct {
	router   gin.IRouter
	database *db.Instance
	salt     string
}

func NewServer(router gin.IRouter, database *db.Instance, salt string) (*Server, error) {
	router = router.Group("/api/v1")

	return &Server{
		router:   router,
		database: database,
		salt:     salt,
	}, nil
}
