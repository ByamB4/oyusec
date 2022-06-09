package api

func (s *Server) RegisterBasicAPI() {
	s.router.GET("ping", GetStatus)
}

func (s *Server) RegisterAccountAPI() {
	accountGroup := s.router.Group("account")
	accountGroup.GET("", s.Auth(), s.GetAccount)
	accountGroup.POST("get", s.GetAccounts)
}
