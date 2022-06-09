package api

import "github.com/gin-gonic/gin"

const (
	GET_ACCOUNT = "get_account"
)

func (s *Server) GetAccounts(c *gin.Context) {
	// var (
	// 	result *Response
	// 	req GetAccountList
	// )

	// query := ""
}

func (s *Server) GetAccount(c *gin.Context) {
	var result *Response
	defer func() { resolve(c, nil, result, GET_ACCOUNT) }()
	acc, err := getAccount(c)
	if err != nil {
		result = Error(err)
		return
	}
	acc, err = s.database.GetAccountWithFields(nil, acc.ID)

}
