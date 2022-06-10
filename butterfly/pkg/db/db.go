package db

import (
	"fmt"
	"log"

	"github.com/byamb4/oyusec/butterfly/pkg/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Init() *gorm.DB {
	dbURL := "postgres://butterfly_user:butterfly_password@localhost:5432/butterfly_db?sslmode=disable"
	db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})

	if err != nil {
		fmt.Printf("Error: %v\n", err)
		log.Fatalln(err)
	}

	fmt.Println("DB connection established")

	db.AutoMigrate(&models.Book{})

	return db
}
