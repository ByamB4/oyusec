package api

import (
	"butterfly/pkg/auth"
	"butterfly/pkg/model"
	"errors"

	"github.com/gin-gonic/gin"
)

// func (s *Server) checkToken(c *gin.Context) (*auth.Claims, *model.modelAccount, error) {
// 	ah := c.Request.Header.Get("Authorization")
// 	list := strings.Split(ah, "Bearer")
// 	if len(list) != 2 {
// 		return nil, nil, errors.New("invalid token")
// 	}
// 	ah = list[1]
// 	claim, err := s.gjwt.Read(ah)
// 	if err != nil {
// 		return nil, nil, err
// 	}
// 	var account *model.Account
// 	if

// }

func (s *Server) Auth() gin.HandlerFunc {
	return func(c *gin.Context) {
		// claim, account, err := s.checkToken(c)
		// if err != nil {
		// 	resolve(c, nil, ErrorWithUnauthorized(err), "auth")
		// 	c.Abort()
		// 	return
		// }

		// c.Set("claim", claim)
		// c.Set("account", account)
		c.Next()
	}
}

func getAccount(c *gin.Context) (*model.Account, error) {
	cl, ok := c.Get("claim")
	if !ok {
		return nil, errors.New("could not find claim")
	}
	_, ok = cl.(*auth.Claims)
	if !ok {
		return nil, errors.New("invalid claim")
	}
	add, ok := c.Get("account")
	if !ok {
		return nil, errors.New("could not find account")
	}
	acc, ok := add.(*model.Account)
	if !ok {
		return nil, errors.New("invalid claim")
	}
	return acc, nil
}
