import { IUser } from './types'
import rest from './api'

export const authTokenKey = 'jwt_token'

export interface LoginParameter {
  address: string
  signature: string
}

export interface NonceResponse {
  nonce: string
}

export interface AuthResponse {
  jwtToken: string
}

export interface RegisterDevicesBody {
  type: string
  value: string
}

const Service = {
  login: (body: LoginParameter) =>
    rest.post<AuthResponse>('account/login', {
      body,
    }),
  getToken: () => localStorage.getItem(authTokenKey),
  getAccount: () =>
    rest.get<IUser>(`account`, {
      hasAuth: true,
    }),
  getNonce: (address: string) => rest.get<NonceResponse>(`account/nonce/${address}`),
  setToken: (token: string) => localStorage.setItem(authTokenKey, token),
  registerDevices: (body: RegisterDevicesBody) => rest.post<unknown>('devices', { body, hasAuth: true }),
}

export default Service
