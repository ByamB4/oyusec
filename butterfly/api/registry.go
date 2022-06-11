package api

func (s *Server) RegisterBasicAPI() {
	s.router.GET("ping", GetStatus)
}

func (s *Server) RegisterBookAPI() {
	bookGroup := s.router.Group("books")
	bookGroup.GET("", s.GetAllBooks)
	bookGroup.POST("", s.AddBook)
	bookGroup.GET("/:id", s.GetBook)
	bookGroup.PUT("/:id", s.UpdateBook)
	bookGroup.DELETE("/:id", s.DeleteBook)
}
