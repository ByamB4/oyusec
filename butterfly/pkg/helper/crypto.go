package helper

import (
	"crypto/sha1"
	"encoding/hex"
	"fmt"
	"github.com/ethereum/go-ethereum/crypto"
)

func SignHash(data []byte) []byte {
	msg := fmt.Sprintf("\x19Ethereum Signed Message:\n%d%s", len(data), data)
	return crypto.Keccak256([]byte(msg))
}

func HashSha256(data []byte) string {
	h := sha1.New()
	h.Write(data)
	// return base64.URLEncoding.EncodeToString(h.Sum(nil))
	return hex.EncodeToString(h.Sum(nil))
}
