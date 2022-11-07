package api

func (s *Server) RegisterBasicAPI() {
	s.router.GET("ping", GetStatus)
}

func (s *Server) RegisterAccountAPI() {
	accountGroup := s.router.Group("account")
	accountGroup.GET("", s.Auth(), s.GetAccount)
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

func (s *Server) RegisterChallengeAPI() {
	challengeGroup := s.router.Group("challenge")
	challengeGroup.GET("list", s.GetChallenges)
	// challengeGroup.POST("", s.AddChallenge)
	// challengeGroup.GET("/:id", s.GetChallenge)
	// challengeGroup.PUT("/:id", s.UpdateChallenge)
	// challengeGroup.DELETE("/:id", s.DeleteChallenge)
}
