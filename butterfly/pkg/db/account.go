package db

import (
	"butterfly/pkg/model"
	"errors"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

func (i *Instance) GetAccount(address *string, id *uint64) (*model.Account, error) {
	var acc model.Account
	var result *gorm.DB
	if address != nil {
		result = i.Gorm.First(&acc, "lower(address) = lower(?)", *address)
	} else if id != nil {
		result = i.Gorm.First(&acc, "id = ?", *id)
	} else {
		return nil, errors.New("invalid parameter")
	}
	if result.RowsAffected == 0 {
		return nil, errors.New("user not found")
	}
	acc.Email = nil
	acc.FirstName = nil
	acc.LastName = nil
	acc.PhoneNo = nil
	acc.RegNo = nil
	return &acc, nil
}

func (i *Instance) CreateAccount(acc *model.Account) error {
	if acc == nil {
		return &InvalidNilValue{}
	}
	res := i.Gorm.Clauses(clause.OnConflict{DoNothing: true}).Create(&acc)
	return res.Error
}
