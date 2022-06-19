package model

import "time"

type Challenge struct {
	Id          *uint64           `gorm:"primary_key" json:"id,omitempty"`
	CreatedAt   *time.Time        `gorm:"" json:"createdAt,omitempty"`
	Name        *string           `gorm:"type:varchar(100); unique" json:"name,omitempty"`
	Description *string           `gorm:"type:text" json:"description,omitempty"`
	Tags        []ChallengeTag    `gorm:"many2many:challenge_tag_challenge" json:"tags,omitempty"`
	Notes       []ChallengeNote   `gorm:"many2many:challenge_note_challenge" json:"notes,omitempty"`
	State       ChallengeState    `gorm:"" json:"state,omitempty"`
	StateID     *uint64           `gorm:"" json:"stateId,omitempty"`
	Category    ChallengeCategory `gorm:"" json:"category,omitempty"`
	CategoryID  *uint64           `gorm:"" json:"categoryId,omitempty"`
	Value       uint8             `gorm:"type:int" json:"value"`
	Authors     []*Account        `gorm:"many2many:challenge_author_challenge" json:"authors,omitempty"`
}

type ChallengeTag struct {
	Id    *string `gorm:"primary_key" json:"id,omitempty"`
	Label *string `gorm:"type:varchar(100); unique" json:"label,omitempty"`
}

type ChallengeNote struct {
	Id    *uint64 `gorm:"primary_key" json:"id,omitempty"`
	Label *string `gorm:"type:varchar(300);" json:"label,omitempty"`
}

type ChallengeState struct {
	Id    *uint64 `gorm:"primary_key" json:"id,omitempty"`
	Key   *string `gorm:"type:varchar(100); unique" json:"key,omitempty"`
	Value *string `gorm:"type:varchar(100);" json:"value,omitempty"`
}

type ChallengeCategory struct {
	Id    *uint64 `gorm:"primary_key" json:"id,omitempty"`
	Key   *string `gorm:"type:varchar(100); unique" json:"key,omitempty"`
	Value *string `gorm:"type:varchar(100);" json:"value,omitempty"`
}
