package db

import (
	"butterfly/pkg/model"
	"math/rand"

	"github.com/google/uuid"
	log "github.com/sirupsen/logrus"
)

func Seed(db *Instance) {
	ChallengeCategories(db)
	ChallengeStates(db)
	ChallengeNotes(db)
	Challenges(db)
	ChallengesNotes(db)

	log.Info("DB seeded")
}

func ChallengeCategories(db *Instance) {
	categories := []struct {
		Key   string
		Value string
	}{
		{Key: "hardware", Value: "Hardware"},
		{Key: "crypto", Value: "Cryptography"},
		{Key: "pwn", Value: "Binary exploitation"},
		{Key: "mobile", Value: "Mobile"},
		{Key: "reversing", Value: "Reverse engineering"},
		{Key: "forensics", Value: "Forensics"},
		{Key: "misc", Value: "Misc"},
		{Key: "web", Value: "Web"},
	}

	for _, i := range categories {
		id := uuid.New().String()
		challengeTag := model.ChallengeCategory{
			Id:    &id,
			Key:   &i.Key,
			Value: &i.Value,
		}
		db.Gorm.Create(&challengeTag)
	}
}

func ChallengeStates(db *Instance) {
	states := []struct {
		Key   string
		Value string
	}{
		{Key: "visible", Value: "Visible"},
		{Key: "hidden", Value: "Hidden"},
	}

	for _, i := range states {
		id := uuid.New().String()
		challengeState := model.ChallengeState{
			Id:    &id,
			Key:   &i.Key,
			Value: &i.Value,
		}
		db.Gorm.Create(&challengeState)
	}
}

func ChallengeNotes(db *Instance) {
	notes := []struct {
		Label string
	}{
		{Label: "Did you know that angstrom has a git repo for all the challenges? I noticed that clam committed a very work in progress challenge so I thought it was worth sharing."},
		{Label: "From the name of the challenge, I guessed the challenge was based on GitHub. So I did a quick Google search and found the following article. https://pentester.land/tutorials/2018/10/25/source-code-disclosure-via-exposed-git-folder.html"},
		{Label: "The 'thisistheflag.txt' file said that the flag was removed in a previous commit. I had to revert to its previous commit."},
		{Label: "git revert e975d678f209da09fff763cd297a6ed8dd77bb35"},
		{Label: "Theming the CTF event makes each challenge a fun story that includes a goal"},
	}
	for _, i := range notes {
		id := uuid.New().String()
		challengeNote := model.ChallengeNote{
			Id:    &id,
			Label: &i.Label,
		}
		db.Gorm.Create(&challengeNote)
	}
}

func Challenges(db *Instance) {
	var states []model.ChallengeState
	var categories []model.ChallengeCategory
	db.Gorm.Find(&states)
	db.Gorm.Find(&categories)

	challenges := []struct {
		Name        string
		Description string
		Value       int
	}{
		{Name: "Battletoads", Description: "Check out this game. We believe there's a secret message hidden within its resources.", Value: rand.Intn(1000 - 800 + 1)},
		{Name: "Crackme", Description: "Could you find the password this binary expects? Just another crackme, it shouldn't be too difficult...", Value: rand.Intn(1000 - 800 + 1)},
		{Name: "Login Page 2", Description: "https://loginv2.volgactf-task.ru/", Value: rand.Intn(1000 - 800 + 1)},
		{Name: "BasedUEFI", Description: "Somebody exploited firmware of our computer and now it requests password on boot. Can you please find that password for us?", Value: rand.Intn(1000 - 800 + 1)},
		{Name: "EasierThanItLooks", Description: "This crackme is much easier than it may seem at a first glance.", Value: rand.Intn(1000 - 800 + 1)},
		{Name: "Future", Description: "Found a strange file on our server. We tried to launch it, but it doesn't seem to work... yet. We suspect this is a virus that will be executed in the future. Can you figure out what it is?", Value: rand.Intn(1000 - 800 + 1)},
	}

	for _, i := range challenges {
		id := uuid.New().String()
		challenge := model.Challenge{
			Id:          &id,
			Name:        &i.Name,
			Description: &i.Description,
			Value:       uint8(i.Value),
			StateID:     states[rand.Intn(len(states))].Id,
			CategoryID:  categories[rand.Intn(len(categories))].Id,
		}
		db.Gorm.Create(&challenge)
	}
}

func ChallengesNotes(db *Instance) {
	var notes []model.ChallengeNote
	var challenges []model.Challenge
	db.Gorm.Find(&notes)
	db.Gorm.Find(&challenges)

	for _, i := range challenges {
		db.Gorm.Model(&i).Association("ChallengeNote").Append(notes[rand.Intn(len(notes))])
	}
}
