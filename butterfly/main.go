package main

import (
	"butterfly/api"
	"butterfly/db"
	"butterfly/internal"
	"butterfly/pkg/auth"
	"context"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

const (
	defaultPort       = "2357"
	defaultConfigPath = "./config.yml"
)

var (
	ctx            context.Context
	cancel         context.CancelFunc
	engine         *gin.Engine
	database       *db.Instance
	port, confPath string
	gjwt           *auth.GJWT
	server         *api.Server
)

func init() {
	port, confPath = internal.ParseArgs(defaultPort, defaultConfigPath)

	ctx, cancel = context.WithCancel(context.Background())
	internal.InitConfig(confPath)

	var err error
	database, err = db.New(internal.Default.Postgres.URL, internal.Default.Postgres.Log)
	if err != nil {
		log.Fatal("Datatabase not initialized: ", err)
	}
	log.Info("Database initialized")

	engine = internal.InitEngine(internal.Default.Gin.Mode)
	log.Info("Engine initialized")

	gjwt, err = auth.New(internal.Default.Auth.PrivateKeyPath, internal.Default.Auth.PublicKeyPath, internal.Default.Auth.Timeout)
	if err != nil {
		log.Fatal("Can not initialize jwt ", err)
	}
	log.Info("JWT initialized")

	server, err = api.NewServer(engine, database, gjwt, "salt")
	if err != nil {
		log.Fatal("Can not initlize server", err)
	}
	log.Info("API server initialized")
}

func main() {
	err := db.SetupFromBegin(database.Gorm)
	if err != nil {
		log.Fatal(err)
	}

	server.RegisterBasicAPI()
	internal.SetupGracefulShutdown(ctx, port, engine)
	cancel()
}
