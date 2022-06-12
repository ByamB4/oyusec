package api

import (
	"butterfly/pkg/auth"
	"butterfly/pkg/helper"
	"butterfly/pkg/model"
	"encoding/hex"
	"errors"
	"strings"

	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

const (
	NoncePrefix = "Login signature: "
)

func (s *Server) Auth() gin.HandlerFunc {
	return func(c *gin.Context) {
		claim, account, err := s.checkToken(c)
		if err != nil {
			resolve(c, nil, ErrorWithUnauthorized(err), "auth")
			c.Abort()
			return
		}
		c.Set("claim", claim)
		c.Set("account", account)
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

func verifySignature(signature string, nonce string, address string) (string, error) {
	decodedSig, err := hexutil.Decode(signature)
	if err != nil {
		return "", err
	}

	if len(decodedSig) < 65 || (decodedSig[64] != 27 && decodedSig[64] != 28) {
		return "", errors.New("invalied")
	}

	decodedSig[64] -= 27

	recoveredPublicKey, err := crypto.SigToPub(helper.SignHash([]byte(nonce)), decodedSig)
	if err != nil {
		return "", err
	}

	pubKeyHex := hex.EncodeToString(crypto.FromECDSAPub(recoveredPublicKey))

	recoveredAddress := crypto.PubkeyToAddress(*recoveredPublicKey)

	verified := strings.ToLower(address) == strings.ToLower(recoveredAddress.String())
	if !verified {
		return "", errors.New("invalied")
	}

	return pubKeyHex, nil
}

func (s *Server) RefreshAccount(address *string, id *uint64) (*model.Account, error) {
	account, err := s.database.GetAccount(address, id)
	if err != nil {
		return nil, err
	}
	// if s.redisClient != nil {
	// 	err = s.redisClient.SetAccount(account)
	// }
	return account, err
}

func (s *Server) checkToken(c *gin.Context) (*auth.Claims, *model.Account, error) {
	ah := c.Request.Header.Get("Authorization")
	list := strings.Split(ah, "Bearer ")
	if len(list) != 2 {
		return nil, nil, errors.New("invalied token")
	}
	ah = list[1]
	claim, err := s.gjwt.Read(ah)
	if err != nil {
		return nil, nil, err
	}
	var account *model.Account
	// if s.redisClient != nil {
	// 	account, err = s.redisClient.GetAccount(&claim.ID, claim.Address)
	// } else {
	// 	err = errors.New("no reids")
	// }
	account, err = s.RefreshAccount(claim.Address, &claim.Id)
	if err != nil {
		logrus.Error("err", err)
	}
	return claim, account, nil
}
