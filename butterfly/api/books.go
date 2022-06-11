package api

import (
	"butterfly/pkg/model"
	"github.com/gin-gonic/gin"
)

func (s *Server) GetAllBooks(c *gin.Context) {
	var book []model.Book

	if err := s.database.Gorm.Find(&book).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, book)
}

func (s *Server) AddBook(c *gin.Context) {
	var book model.Book

	if err := c.BindJSON(&book); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	if err := s.database.Gorm.Create(&book).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, book)
}

func (s *Server) GetBook(c *gin.Context) {
	id := c.Param("id")
	var book model.Book

	if err := s.database.Gorm.First(&book, id).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, book)
}

func (s *Server) UpdateBook(c *gin.Context) {
	id := c.Param("id")
	var book model.Book

	if err := s.database.Gorm.First(&book, id).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	if err := c.BindJSON(&book); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	if err := s.database.Gorm.Save(&book).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, book)
}

// Delete book
func (s *Server) DeleteBook(c *gin.Context) {
	id := c.Param("id")
	var book model.Book

	if err := s.database.Gorm.First(&book, id).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	if err := s.database.Gorm.Delete(&book).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, book)
}
