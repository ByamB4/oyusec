package db

import (
	"fmt"
	"log"

	"butterfly/pkg/model"
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

	return &Instance{Gorm: db}, nil
}
