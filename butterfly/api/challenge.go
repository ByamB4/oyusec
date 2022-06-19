package api

import (
	"butterfly/pkg/model"

	"github.com/gin-gonic/gin"
)

func (s *Server) GetChallenges(c *gin.Context) {
	var challenges []model.Challenge
	if err := s.database.Gorm.Find(&challenges).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, challenges)
}
