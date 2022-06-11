package main

import (
	"butterfly/api"
	"butterfly/internal"
	"butterfly/pkg/db"
	"context"

	"github.com/gin-gonic/gin"

	log "github.com/sirupsen/logrus"
)

const (
	defaultPort       = "8080"
	defaultConfigPath = "./config.yml"
)

var (
	ctx            context.Context
	cancel         context.CancelFunc
	database       *db.Instance
	server         *api.Server
	engine         *gin.Engine
	port, confPath string
)

func init() {
	port, confPath = internal.ParseArgs(defaultPort, defaultConfigPath)

	var err error
	database, err := db.Init()
	if err != nil {
		log.Fatal("Error initializing database: ", err)
	}

	log.Info("Database connection established")

	engine = internal.InitEngine(internal.Default.Gin.Mode)
	log.Info("Gin engine initialized")

	server, err = api.NewServer(engine, database, "salt")

	if err != nil {
		log.Fatal("Error initializing server: ", err)
	}

	log.Info("API server initialized")

	// h := handlers.New(database.Gorm)

}
func main() {

	server.RegisterBasicAPI()
	server.RegisterBookAPI()

	internal.SetupGracefulShutdown(ctx, port, engine)

	cancel()
}
