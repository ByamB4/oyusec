package auth

import (
	"butterfly/pkg/model"
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"encoding/pem"
	"fmt"
	"io/ioutil"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt"
)

type (
	GJWT struct {
		private *ecdsa.PrivateKey
		pub     *ecdsa.PublicKey
		timeout int
	}
	Claims struct {
		jwt.StandardClaims
		IsActive bool    `json:"isActive"`
		Address  *string `json:"address"`
		Id       uint64  `json:"id"`
		Role     uint8   `json:"role"`
	}
)

func Write() {
	g := GJWT{}
	g.private, _ = ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	g.pub = &g.private.PublicKey
	data := elliptic.Marshal(g.pub.Curve, g.pub.X, g.pub.Y)
	pubBytes := pem.EncodeToMemory(&pem.Block{
		Type:  "Basic ES256",
		Bytes: data,
	})

	ioutil.WriteFile("publicKey.pem", pubBytes, 0644)
	data = elliptic.Marshal(g.private.Curve, g.private.X, g.private.Y)

	pubBytes = pem.EncodeToMemory(&pem.Block{
		Type:  "Basic ES256",
		Bytes: data,
	})

	ioutil.WriteFile("privateKey.pem", pubBytes, 0644)
}

func New(private, public string, timeout int) (*GJWT, error) {
	var (
		key    []byte
		result GJWT
	)

	result.timeout = timeout
	key, err := ioutil.ReadFile(private)
	if err != nil {
		return nil, err
	}
	result.private, err = jwt.ParseECPrivateKeyFromPEM([]byte(key))
	if err != nil {
		return nil, err
	}
	fmt.Println("priv key done")
	key, err = ioutil.ReadFile(public)
	if err != nil {
		return nil, err
	}
	result.pub, err = jwt.ParseECPublicKeyFromPEM([]byte(key))
	return &result, err
}

func (g *GJWT) Generate(account *model.Account) (string, error) {
	if account.Id == nil {
		// return "", errors.New("invalid account")
		return "", nil
	}
	claim := Claims{
		StandardClaims: jwt.StandardClaims{
			Subject:   strconv.FormatInt(int64(*account.Id), 10),
			ExpiresAt: time.Now().Add(time.Minute * time.Duration(g.timeout)).Unix(),
		},
		Address: account.Address,
		Id:      *account.Id,
		Role:    account.Role,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodES256, claim)
	return token.SignedString(g.private)
}

func (g *GJWT) Read(inToken string) (*Claims, error) {
	var t Claims
	if _, err := jwt.ParseWithClaims(inToken, &t, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodECDSA); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return g.pub, nil
	}); err != nil {
		return nil, err
	}
	return &t, nil
}
