package model

import "time"

type Account struct {
	Id        string     `json:"id" gorm:"primaryKey; unique; not null"`
	CreatedAt *time.Time `gorm:"" json:"createdAt,omitempty"`
	Username  string     `json:"username"`
	Name      string     `json:"name"`
	Email     string     `json:"email"`
	Phone     string     `json:"phone"`
}
