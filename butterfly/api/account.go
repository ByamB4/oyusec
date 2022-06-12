package api

import (
	"butterfly/pkg/helper"
	"butterfly/pkg/model"
	"fmt"

	"github.com/gin-gonic/gin"
)

const (
	LOGIN     = "login"
	GET_NONCE = "get_nonce"
)

type AuthRequest struct {
	Address   *string `json:"address"`
	Signature *string `json:"signature"`
}

func (s *Server) GetAllAccounts(c *gin.Context) {
	var account []model.Account
	if err := s.database.Gorm.Find(&account).Error; err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, account)
}

func (s *Server) Login(c *gin.Context) {
	var (
		req    AuthRequest
		result *Response
		err    error
	)

	defer func() {
		resolve(c, nil, result, LOGIN)
	}()

	if err := c.ShouldBindJSON(&req); err != nil {
		result = BadRequestMessage(UNMARSHAL_ERR, err)
		return
	}

	var account *model.Account
	if req.Address != nil && req.Signature != nil {
		account, err = s.database.GetAccount(req.Address, nil)
		if err != nil {
			result = NotFound(err)
			return
		}
		fmt.Printf("account: %+v\n", account)
	}

	result = SuccessWithParams(map[string]interface{}{
		"jwtToken": "jwt",
	})
}

func (s *Server) GetNonce(c *gin.Context) {
	var result *Response
	defer func() { resolve(c, nil, result, GET_NONCE) }()

	address := c.Param("address")
	account, err := s.database.GetAccount(&address, nil)
	if err != nil {
		account = &model.Account{
			Address:    &address,
			Username:   &address,
			PublicKey:  &address,
			Nonce:      helper.PointerString(helper.RandomString(20)),
			IsActive:   helper.PointerTrue(true),
			Bio:        helper.PointerString(""),
			WalletType: model.WALLET_ONCHAIN,
		}
		if err = s.database.CreateAccount(account); err != nil {
			result = Error(err)
		}
	}
	result = SuccessWithParams(map[string]interface{}{
		"nonce": NoncePrefix + *account.Nonce,
	})
}
