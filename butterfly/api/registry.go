package api

func (s *Server) RegisterBasicAPI() {
	s.router.GET("ping", GetStatus)
}

func (s *Server) RegisterAccountAPI() {
	accountGroup := s.router.Group("account")
	accountGroup.GET("", s.GetAllAccounts)
	accountGroup.POST("login", s.Login)
	accountGroup.GET("nonce/:address", s.GetNonce)
}

func (s *Server) RegisterBookAPI() {
	bookGroup := s.router.Group("books")
	bookGroup.GET("", s.GetAllBooks)
	bookGroup.POST("", s.AddBook)
	bookGroup.GET("/:id", s.GetBook)
	bookGroup.PUT("/:id", s.UpdateBook)
	bookGroup.DELETE("/:id", s.DeleteBook)
}
