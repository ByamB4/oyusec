package api

import (
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

type Response struct {
	Code    int         `json:"code" mapstructure:"code"`
	Status  string      `json:"status" mapstructure:"status"`
	Message string      `json:"message" mapstructure:"message"`
	Result  interface{} `json:"result" mapstructure:"result"`
	Err     error       `json:"-"`
}

func resolve(c *gin.Context, req interface{}, result *Response, t string) {
	if result.Err != nil {
		log.WithFields(log.Fields{
			"type":  "rest_api:" + t,
			"req":   req,
			"error": result.Err,
		}).Error("Error")
		result.Err = nil
		c.JSON(200, result)
		return
	}
}
