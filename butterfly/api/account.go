package api

import (
	"butterfly/pkg/helper"
	"butterfly/pkg/model"
	"butterfly/pkg/types"
	"errors"

	"github.com/gin-gonic/gin"
)

const (
	LOGIN       = "login"
	GET_NONCE   = "get_nonce"
	GET_ACCOUNT = "get_account"
)

type AuthRequest struct {
	Address   *string `json:"address"`
	Signature *string `json:"signature"`
}

func (s *Server) GetAccount(c *gin.Context) {

	var result *Response
	defer func() { resolve(c, nil, result, GET_ACCOUNT) }()

	acc, err := getAccount(c)
	if err != nil {
		result = Error(err)
		return
	}

	acc, err = s.database.GetAccountWithFields(nil, acc.Id)
	if err != nil {
		result = NotFound(err)
		return
	}
	// additionalInfo, err := s.database.GetAccountAdditionalInfo(acc.ID)
	// if err != nil {
	// 	result = Error(err)
	// 	return
	// }
	var res types.AccountInfo
	res.Account = *acc
	// res.AdditionalInfo = *additionalInfo
	result = SuccessWithParams(res)
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
		if _, err = verifySignature(*req.Signature, NoncePrefix+*account.Nonce, *req.Address); err != nil {
			result = ErrorWithMessage("Bad signature", err)
			return
		}
	} else {
		result = BadRequestMessage("Bad request", errors.New("invlid login request"))
		return
	}

	token, err := s.gjwt.Generate(account)
	if err != nil {
		result = Error(err)
		return
	}

	result = SuccessWithParams(map[string]interface{}{
		"jwtToken": token,
	})
}

func (s *Server) GetNonce(c *gin.Context) {
	var result *Response
	defer func() { resolve(c, nil, result, GET_NONCE) }()

	address := c.Param("address")
	account, err := s.database.GetAccount(&address, nil)

	defaultAvatar := "https://storage.ard.art/public/Fh/133826ce-4ff4-4fa4-aa6d-fcc561a9a00b"
	defaultCover := "https://storage.ard.art/public/68/0e944bf9-fdf5-4ab3-bfa8-d8b3c870e60b"

	if err != nil {
		account = &model.Account{
			Address:    &address,
			Username:   &address,
			PublicKey:  &address,
			Nonce:      helper.PointerString(helper.RandomString(20)),
			ImageURL:   &defaultAvatar,
			CoverURL:   &defaultCover,
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
