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

	db.AutoMigrate(&model.Book{})
	DeleteAllData(&Instance{Gorm: db})
	Seed(&Instance{Gorm: db})

	return &Instance{Gorm: db}, nil
}

func Seed(db *Instance) {
	for i := 0; i < 10; i++ {
		book := model.Book{
			Title:  faker.Sentence(),
			Author: faker.Name(),
			Desc:   faker.Paragraph(),
		}
		db.Gorm.Create(&book)
	}

	log.Info("DB seeded")
}

func DeleteAllData(db *Instance) {
	db.Gorm.Exec("DELETE FROM books")
	log.Info("DB deleted")
}
