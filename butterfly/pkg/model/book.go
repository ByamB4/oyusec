package model

type Book struct {
	Id     string `json:"id" gorm:"primaryKey; unique; not null"`
	Title  string `json:"title"`
	Author string `json:"author"`
	Desc   string `json:"desc"`
}
