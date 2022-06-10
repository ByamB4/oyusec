package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/byamb4/oyusec/butterfly/pkg/models"
)

func (h handler) AddBook(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	var book models.Book
	json.Unmarshal(body, &book)

	if result := h.DB.Create(&book); result != nil {
		fmt.Println(result.Error)
	}

	// book.Id = rand.Intn(100)
	// mocks.Books = append(mocks.Books, book)
	w.WriteHeader(http.StatusCreated)
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode("Created")
}
