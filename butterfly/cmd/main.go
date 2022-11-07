package main

import (
	"butterfly/api"
	"butterfly/internal"
	"butterfly/pkg/auth"
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
	gjwt           *auth.GJWT
	port, confPath string
)

func init() {
	port, confPath = internal.ParseArgs(defaultPort, defaultConfigPath)

	internal.InitConfig(confPath)

	var err error
	database, err := db.Init(internal.Default.Postgres.URL)
	if err != nil {
		log.Fatal("Error initializing database: ", err)
	}

	log.Info("Database connection established")
	gjwt, err = auth.New(internal.Default.Auth.PrivateKeyPath, internal.Default.Auth.PublicKeyPath, internal.Default.Auth.Timeout)
	if err != nil {
		log.Fatal("can not initialize jwt ", err)
	}
	log.Info("JWT initialized")

	engine = internal.InitEngine(internal.Default.Gin.Mode)
	log.Info("Gin engine initialized")

	server, err = api.NewServer(engine, database, gjwt, "salt")

	if err != nil {
		log.Fatal("Error initializing server: ", err)
	}

	log.Info("API server initialized")
}

func main() {
	server.RegisterBasicAPI()
	server.RegisterBookAPI()
	server.RegisterAccountAPI()
	server.RegisterChallengeAPI()

	internal.SetupGracefulShutdown(ctx, port, engine)

	cancel()
}
