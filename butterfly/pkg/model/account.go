package model

import "time"

const (
	WALLET_ONCHAIN  uint8 = 0
	WALLET_OFFCHAIN       = 1
	WALLET_BOTH           = 2
)

type Account struct {
	Id             *uint64    `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt      *time.Time `gorm:"" json:"createdAt,omitempty"`
	Username       *string    `gorm:"type:varchar(100); unique" json:"username,omitempty"`
	PublicKey      *string    `gorm:"type:text" json:"publicKey,omitempty"`
	Nonce          *string    `gorm:"type:varchar(100)" json:"nonce,omitempty"`
	FirstName      *string    `gorm:"type:varchar(100)" json:"firstName,omitempty"`
	LastName       *string    `gorm:"type:varchar(200)" json:"lastName,omitempty"`
	Address        *string    `gorm:"type:varchar(100); unique" json:"address,omitempty"`
	Name           string     `json:"name"`
	Bio            *string    `gorm:"type:text" json:"bio,omitempty"`
	Email          *string    `gorm:"type:varchar(100)" json:"email,omitempty"`
	EmailConfirmed *bool      `gorm:"type:boolean" json:"emailConfirmed,omitempty"`
	IsActive       *bool      `gorm:"type:boolean" json:"isActive,omitempty"`
	IsVerified     *bool      `gorm:"type:boolean" json:"isVerified,omitempty"`
	PhoneNo        *string    `gorm:"type:varchar(50)" json:"phoneNo,omitempty"`
	RegNo          *string    `gorm:"type:varchar(15)" json:"regNo,omitempty"`
	Phone          string     `json:"phone"`
	Role           uint8      `gorm:"" json:"role,omitempty"`
	WalletType     uint8      `gorm:"type:int" json:"walletType"`
}
