package db

import (
	"butterfly/pkg/model"
	"fmt"

	// "math/rand"
	// "time"

	// "github.com/bxcodec/faker/v3"
	"github.com/google/uuid"
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

	// DeleteTable(&Instance{Gorm: db})
	// DeleteAllData(&Instance{Gorm: db})
	// db.AutoMigrate(&model.ChallengeTag{}, &model.ChallengeNote{}, &model.ChallengeState{}, &model.ChallengeCategory{}, &model.Account{}, &model.Challenge{})
	Seed(&Instance{Gorm: db})

	return &Instance{Gorm: db}, nil
}

func Seed(db *Instance) {
	// Challenge tag list then pick randomly
	tags := []string{"challenge", "challenge-tag", "challenge-tag-1", "challenge-tag-2", "challenge-tag-3", "challenge-tag-4", "challenge-tag-5"}

	for _, i := range tags {
		id := uuid.New().String()
		challengeTag := model.ChallengeTag{
			Id:    &id,
			Label: &i,
		}
		db.Gorm.Create(&challengeTag)

	}
	// for i := 0; i < 10; i++ {
	// 	book := model.Book{
	// 		Id:     faker.UUIDHyphenated(),
	// 		Title:  faker.Sentence(),
	// 		Author: faker.Name(),
	// 		Desc:   faker.Paragraph(),
	// 	}
	// 	db.Gorm.Create(&book)
	// }

	log.Info("DB seeded")
}

func DeleteAllData(db *Instance) {
	query := "DELETE FROM "
	for _, table := range []string{"accounts", "challenges", "challenge_categories", "challenge_notes", "challenge_tags", "challenge_states"} {
		db.Gorm.Exec(query + table)
	}
	log.Info("DB deleted")
}

func DeleteTable(db *Instance) {
	query := "DROP TABLE "
	for _, table := range []string{"accounts", ""} {
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
