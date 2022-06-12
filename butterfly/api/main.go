package api

import (
	log "github.com/sirupsen/logrus"

	"github.com/gin-gonic/gin"
)

const (
	ERROR                = "error"
	SUCCESS              = "success"
	BAD_REQUEST          = "bad request"
	NOT_FOUND            = "мэдээлэл олдсонгүй"
	SERVER_ERROR         = "server error"
	UNAUTHORIZED         = "unauthorized"
	PHONE_NO_UNVERIF     = "утасны дугаар баталгаажуулаагүй байна"
	UNMARSHAL_ERR        = "алдаатай хүсэлт"
	ONCHAIN_APPROVE      = "blockchain зөвшөөрөл авахад алдаа гарлаа"
	INSUFFICIENT_BALANCE = "үлдэгдэл хүрэлцэхгүй байна"
)

func SuccessWithParams(res interface{}) *Response {
	return &Response{
		Code:    200,
		Status:  SUCCESS,
		Message: SUCCESS,
		Result:  res,
	}
}

type Response struct {
	Code    int         `json:"code" mapstructure:"code"`
	Status  string      `json:"status" mapstructure:"status"`
	Message string      `json:"message" mapstructure:"message"`
	Result  interface{} `json:"result" mapstructure:"result"`
	Err     error       `json:"-"`
}

func BadRequestMessage(message string, err error) *Response {
	return &Response{
		Code:    400,
		Status:  ERROR,
		Message: message,
		Err:     err,
	}
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

	c.JSON(200, result)
}

func NotFound(err error) *Response {
	return &Response{
		Code:    404,
		Status:  ERROR,
		Message: NOT_FOUND,
		Err:     err,
	}
}

func Error(err error) *Response {
	return &Response{
		Code:    500,
		Status:  ERROR,
		Message: SERVER_ERROR,
		Err:     err,
	}
}
