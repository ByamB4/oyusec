import { BaseResponse } from 'types'
import axios, { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios'

const baseURL = process.env.PUBLIC_BACKEND_API_URL

export interface IBody {
  [key: string]: any
}
export interface IHeader {
  [key: string]: any
}

export interface IParams {
  [key: string]: string
}

export interface IOption {
  body?: IBody
  hasAuth?: boolean
  headers?: IHeader
  params?: IParams
  cancelToken?: CancelToken
  isLocal?: boolean
}

const getToken = () => localStorage.getItem('jwt_token')
const getAuth = (hasAuth = false) => (hasAuth && getToken() ? { Authorization: `Bearer ${getToken()}` } : {})
const genHeader = (hasAuth = false, headers = {}) => Object.assign(headers, getAuth(hasAuth))

export class ApiErrResp extends Error {
  public statusCode: number

  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
  }
}

const handleResponse = (options: AxiosRequestConfig, resp: AxiosResponse<BaseResponse<any>, any>, resolve, reject) => {
  const statusCode = resp.data.code
  switch (statusCode) {
    case 400:
      reject(new ApiErrResp(400, resp.data.message))
      break
    case 401:
      localStorage.removeItem('jwt_token')
      reject(new ApiErrResp(401, resp.data.message))
      break
    case 404:
      reject(new ApiErrResp(404, resp.data.message))
      break
    case 500:
      reject(new ApiErrResp(500, resp.data.message))
      break
    default:
      resolve(resp.data)
  }
}
const handleError = (err: any, reject: any) => reject(new Error('Something went wrong'))
const request = async <T>(options: AxiosRequestConfig) => {
  return new Promise<BaseResponse<T>>((resolve, reject) => {
    axios
      .request<BaseResponse<T>>({
        baseURL,
        ...options,
      })
      .then((resp) => {
        handleResponse(options, resp, resolve, reject)
      })
      .catch((err) => handleError(err, reject))
  })
}

const rest = {
  get: async <T>(url: string, options?: IOption): Promise<T> => {
    return request<T>(
      {
        method: 'GET',
        url,
        headers: genHeader(options?.hasAuth, options?.headers) as any,
        params: options?.params,
        cancelToken: options?.cancelToken,
      },
      // options?.isLocal || false,
    ).then((data) => data.result)
  },
  post: async <T>(url: string, options?: IOption): Promise<T> => {
    return request<T>({
      method: 'POST',
      url,
      headers: genHeader(options?.hasAuth, options?.headers) as any,
      data: options?.body,
      cancelToken: options?.cancelToken,
    }).then((data) => data.result)
  },
}

export default rest
