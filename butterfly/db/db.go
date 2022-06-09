package db

import (
	"butterfly/pkg/model"

	gocache "github.com/patrickmn/go-cache"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type Instance struct {
	Gorm        *gorm.DB
	MemoryCache *gocache.Cache
}

func New(url string, log bool) (*Instance, error) {
	var logMode logger.LogLevel
	if log {
		logMode = logger.Info
	}

	cfg := &gorm.Config{Logger: logger.Default.LogMode(logMode), SkipDefaultTransaction: true}

	db, err := gorm.Open(postgres.Open(url), cfg)
	if err != nil {
		return nil, err
	}

	mc := gocache.New(gocache.NoExpiration, gocache.NoExpiration)
	i := &Instance{Gorm: db, MemoryCache: mc}

	return i, nil
}

func SetupFromBegin(db *gorm.DB) error {
	return db.AutoMigrate(
		model.Account{},
	)
}
