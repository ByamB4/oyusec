package model

type Account struct {
	Id        string `json:"id" gorm:"primaryKey; unique; not null"`
	CreatedAt string `json:"created_at"`
	Username  string `json:"username"`
	Name      string `json:"name"`
	Email     string `json:"email"`
	Phone     string `json:"phone"`
}
