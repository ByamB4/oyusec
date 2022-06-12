package helper

type Response struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Result  struct {
		Items []interface{} `json:"items"`
	} `json:"result"`
}
