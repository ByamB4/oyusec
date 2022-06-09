package model

import "time"

type Account struct {
	ID                *uint64    `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt         *time.Time `gorm:"" json:"createdAt,omitempty"`
	Username          *string    `gorm:"type:varchar(100); unique" json:"username,omitempty"`
	Email             *string    `gorm:"type:varchar(100)" json:"email,omitempty"`
	FirstName         *string    `gorm:"type:varchar(100)" json:"firstName,omitempty"`
	LastName          *string    `gorm:"type:varchar(200)" json:"lastName,omitempty"`
	Address           *string    `gorm:"type:varchar(100); unique" json:"address,omitempty"`
	DefaultAddress    *string    `gorm:"type:varchar(100)" json:"defaultAddress,omitempty"`
	PublicKey         *string    `gorm:"type:text" json:"publicKey,omitempty"`
	IsActive          *bool      `gorm:"type:boolean" json:"isActive,omitempty"`
	IsVerified        *bool      `gorm:"type:boolean" json:"isVerified,omitempty"`
	Nonce             *string    `gorm:"type:varchar(100)" json:"nonce,omitempty"`
	ImageID           *string    `gorm:"type:varchar(200)" json:"imageId,omitempty"`
	ImageURL          *string    `gorm:"type:varchar(200)" json:"imageURL,omitempty"`
	CoverID           *string    `gorm:"type:varchar(200)" json:"coverId,omitempty"`
	CoverURL          *string    `gorm:"type:varchar(200)" json:"coverURL,omitempty"`
	Bio               *string    `gorm:"type:text" json:"bio,omitempty"`
	Website           *string    `gorm:"type:varchar(200)" json:"website,omitempty"`
	TwitterUsername   *string    `gorm:"type:varchar(200)" json:"twitterUsername,omitempty"`
	DiscordUsername   *string    `gorm:"type:varchar(200)" json:"discordUsername,omitempty"`
	InstagramUsername *string    `gorm:"type:varchar(200)" json:"instagramUsername,omitempty"`
	EmailConfirmed    *bool      `gorm:"type:boolean" json:"emailConfirmed,omitempty"`
	PhoneConfirmed    *bool      `gorm:"type:boolean" json:"phoneConfirmed,omitempty"`
	TermsConfirmed    *bool      `gorm:"type:boolean" json:"termsConfirmed,omitempty"`
	Password          *string    `gorm:"type:varchar(200)" json:"password,omitempty"`
	PhoneNo           *string    `gorm:"type:varchar(50)" json:"phoneNo,omitempty"`
	ArdCustTkn        *string    `gorm:"type:varchar(200)" json:"ardCustTkn,omitempty"`
	ArdTknExpire      *time.Time `gorm:"" json:"tanExpire,omitempty"`
	VerifiedLevel     *int       `gorm:"type:int" json:"verifiedLevel,omitempty"`
	RegNo             *string    `gorm:"type:varchar(15)" json:"regNo,omitempty"`
	Role              uint8      `gorm:"" json:"role,omitempty"`
	UpdatedPassword   bool       `gorm:"type:boolean" json:"updatedPassword"`
	KYCStatus         *string    `gorm:"type:varchar(15); default: 'unVerified'" json:"kycStatus,omitempty"`
	WalletType        uint8      `gorm:"type:int" json:"walletType"`
}