package model

type Book struct {
	Id     int    `json:"id" gorm:"primaryKey; unique; not null"`
	Title  string `json:"title"`
	Author string `json:"author"`
	Desc   string `json:"desc"`
}
