package db

import (
	"butterfly/pkg/model"
	"fmt"

	"github.com/bxcodec/faker/v3"
	log "github.com/sirupsen/logrus"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Instance struct {
	Gorm *gorm.DB
}

func Init() (*Instance, error) {
	dbURL := "postgres://butterfly_user:butterfly_password@localhost:5432/butterfly_db?sslmode=disable"
	db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})

	if err != nil {
		fmt.Printf("Error: %v\n", err)
		log.Fatalln(err)
	}

	fmt.Println("DB connection established")

	// DeleteTable(&Instance{Gorm: db})
	DeleteAllData(&Instance{Gorm: db})
	db.AutoMigrate(&model.Book{}, &model.Account{})
	Seed(&Instance{Gorm: db})

	return &Instance{Gorm: db}, nil
}

func Seed(db *Instance) {
	for i := 0; i < 10; i++ {
		book := model.Book{
			Id:     faker.UUIDHyphenated(),
			Title:  faker.Sentence(),
			Author: faker.Name(),
			Desc:   faker.Paragraph(),
		}
		db.Gorm.Create(&book)
	}
	for i := 0; i < 10; i++ {
		account := model.Account{
			Id:       faker.UUIDHyphenated(),
			Name:     faker.Name(),
			Email:    faker.Email(),
			Username: faker.Username(),
		}
		db.Gorm.Create(&account)
	}

	log.Info("DB seeded")
}

func DeleteAllData(db *Instance) {
	query := "DELETE FROM "
	for _, table := range []string{"accounts", "books"} {
		db.Gorm.Exec(query + table)
	}
	log.Info("DB deleted")
}

func DeleteTable(db *Instance) {
	query := "DROP TABLE "
	for _, table := range []string{"accounts", "books"} {
		db.Gorm.Exec(query + table)
	}
	log.Info("DB table deleted")
}
