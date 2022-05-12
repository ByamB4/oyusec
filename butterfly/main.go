package main

import (
	"butterfly/db"
	"butterfly/internal"
	"butterfly/pkg/auth"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

const (
	defaultPort       = "2357"
	defaultConfigPath = "./config.yml"
)

var (
	// server *api.Server
	engine         *gin.Engine
	database       *db.Instance
	port, confPath string
	gjwt           *auth.GJWT
)

func init() {
	// ctx, cancel = context.WithCancel(context.Background())
	port, confPath = internal.ParseArgs(defaultPort, defaultConfigPath)

	internal.InitConfig(confPath)

	var err error
	database, err = db.New(internal.Default.Postgres.URL, internal.Default.Postgres.Log)
	if err != nil {
		log.Fatal("Postgres init: ", err)
	}
	log.Info("Database initialized")

	engine = internal.InitEngine(internal.Default.Gin.Mode)
	log.Info("Engine initialized")

	gjwt, err = auth.New(internal.Default.Auth.PrivateKeyPath, internal.Default.Auth.PublicKeyPath, internal.Default.Auth.Timeout)
	if err != nil {
		log.Fatal("can not initialize jwt ", err)
	}
	log.Info("JWT initialized")

	// server.Init(engine)
	// server.Run(defaultPort)
}

func main() {

}
