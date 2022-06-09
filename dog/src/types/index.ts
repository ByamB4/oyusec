export interface BaseResponse<T> {
  message: string
  code: number
  result: T
}
