package api

import (
	"butterfly/pkg/model"

	"github.com/gin-gonic/gin"
)

func (s *Server) GetAllAccounts(c *gin.Context) {
	var account []model.Account
	if err := s.database.Gorm.Find(&account).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, account)
}
