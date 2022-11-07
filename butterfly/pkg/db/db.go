package db

import (
	"fmt"

	// "github.com/bxcodec/faker/v3"
	"butterfly/pkg/model"

	log "github.com/sirupsen/logrus"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Instance struct {
	Gorm *gorm.DB
}

func Init(url string) (*Instance, error) {
	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})

	if err != nil {
		fmt.Printf("Error: %v\n", err)
		log.Fatalln(err)
	}

	DeleteTable(&Instance{Gorm: db})
	DeleteAllData(&Instance{Gorm: db})
	db.AutoMigrate(&model.Note{}, &model.ChallengeState{}, &model.ChallengeCategory{}, &model.Challenge{})

	Seed(&Instance{Gorm: db})

	return &Instance{Gorm: db}, nil
}

func DeleteAllData(db *Instance) {
	query := "DELETE FROM "
	for _, table := range []string{"challenge_note", "challenge_author", "challenge_notes", "challenges", "challenge_categories", "challenge_states", "accounts"} {
		db.Gorm.Exec(query + table)
	}
	log.Info("DB deleted")
}

func DeleteTable(db *Instance) {
	query := "DROP TABLE "
	for _, table := range []string{"challenge_note", "challenge_author", "challenge_notes", "challenges", "challenge_categories", "challenge_states", "accounts"} {
		db.Gorm.Exec(query + table)
	}
	log.Info("DB table deleted")
}

type InvalidNilValue struct{}

func (*InvalidNilValue) Error() string {
	return "invalid nil value"
}

type ErrorNotFound struct{}

func (*ErrorNotFound) Error() string {
	return "data not found"
}
