package model

import "time"

type Challenge struct {
	Id          *string    `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt   *time.Time `gorm:"" json:"createdAt,omitempty"`
	Name        *string    `gorm:"type:varchar(100); unique" json:"name,omitempty"`
	Description *string    `gorm:"type:text" json:"description,omitempty"`
	State       ChallengeState
	// StateID     *string           `gorm:"" json:"stateId,omitempty"`
	// Category    ChallengeCategory `gorm:"constraint:OnDelete:SET NULL;" json:"category,omitempty"`
	// CategoryID  *string           `gorm:"" json:"categoryId,omitempty"`
	Value uint8 `gorm:"type:int" json:"value"`
	// Notes       []Note            `gorm:"constraint:onDelete:SET NULL;" json:"notes,omitempty"`
	Authors []*Account `gorm:"constraint:onDelete:SET NULL;many2many:challenge_author" json:"authors,omitempty"`
}

// type ChallengeTag struct {
// 	Id    *string `gorm:"primary_key" json:"id,omitempty"`
// 	Label *string `gorm:"type:varchar(100); unique" json:"label,omitempty"`
// }

// type Note struct {
// 	// Id          *string `gorm:"primary_key" json:"id,omitempty"`
// 	ChallengeId *string
// 	Label       *string `gorm:"type:varchar(300);" json:"label,omitempty"`
// }

type ChallengeState struct {
	Id          *string `gorm:"primary_key" json:"id,omitempty"`
	Key         *string `gorm:"type:varchar(100); unique" json:"key,omitempty"`
	Value       *string `gorm:"type:varchar(100);" json:"value,omitempty"`
	ChallengeId *string
}

// type ChallengeCategory struct {
// 	Id    *string `gorm:"primary_key" json:"id,omitempty"`
// 	Key   *string `gorm:"type:varchar(100); unique" json:"key,omitempty"`
// 	Value *string `gorm:"type:varchar(100);" json:"value,omitempty"`
// }
