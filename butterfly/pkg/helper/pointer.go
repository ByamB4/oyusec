package helper

func PointerTrue(v bool) *bool {
	return &v
}

func PointerString(v string) *string {
	return &v
}
