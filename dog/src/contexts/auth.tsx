/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  Dispatch,
  FC,
  MutableRefObject,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import MetaMaskOnboarding from '@metamask/onboarding'
import { authTokenKey } from 'services/auth'
import { AuthService } from 'services'
import { ethers } from 'ethers'
// import { useMessaging } from 'hooks/useFirebase'
import { ApiErrResp } from 'services/api'
import { IUser } from 'services/types'

export type ChainType = '0x89' | '0x13881'
export const TARGET_NETWORK_ID_HEX_STRING: ChainType = process.env.NEXT_PUBLIC_CHAIN_ID as ChainType
export const POLYGON_CHAIN_ID = '0x89'
export const POLYGON_MUMBAI_ID = '0x13881'

export interface ProviderRpcErr extends Error {
  message: string
  code: number
  data?: unknown
}

export interface ProviderMessage {
  type: string
  data: unknown
}

export interface Metamask {
  isMetaMaskInstalled?: boolean
  chainId?: string
  address?: string
  metaAlert: boolean
  setMetaAlert: Dispatch<SetStateAction<boolean>>
  onBoarding: MutableRefObject<MetaMaskOnboarding | null>
}

export interface AuthState {
  user?: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  ready: boolean
  metamask: Metamask
  updateUser: (val: IUser) => void
  logOut: () => void
  connectWallet: () => Promise<void>
}

const AuthContext = createContext<AuthState>({} as AuthState)

export const AuthProvider: FC = ({ children }): ReactElement => {
  const [ready, setReady] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>(null)
  const [isMetaMaskInstalled, setMetaMaskInstalled] = useState<boolean>(false)
  const [metaAlert, setMetaAlert] = useState<boolean>(false)
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<string | null>(null)

  const onBoarding = useRef<MetaMaskOnboarding | null>(null)
  // const { reqNotfToken } = useMessaging()

  const checkAccountByAddress = async () => {
    try {
      const token = AuthService.getToken()
      if (token) {
        const authUser = await AuthService.getAccount()
        setUser(authUser)
      }
    } catch (err) {
      if (err instanceof ApiErrResp) {
        console.log(err.message)
      } else {
        console.log('Something went wrong')
      }
    } finally {
      setReady(true)
    }
  }

  useEffect(() => {
    const init = async () => {
      if (!onBoarding.current) {
        onBoarding.current = new MetaMaskOnboarding()
      }
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum.autoRefreshOnNetworkChange = false
        setMetaMaskInstalled(true)
        setChainId(await window.ethereum.request({ method: 'eth_chainId' }))
        if (window.ethereum.selectedAddress !== null) {
          setAddress(window.ethereum.selectedAddress)
          checkAccountByAddress()
        } else {
          setReady(true)
        }
        window.ethereum.on('chainChanged', (val: string) => setChainId(val))
        window.ethereum.on('accountsChanges', (newAccounts) => {
          setAddress(newAccounts[0])
          logOut()
        })
        window.ethereum.on('message', (msg: ProviderMessage) => {
          console.log(msg)
        })
        window.ethereum.on('disconnect', (_: ProviderRpcErr) => {
          logOut()
          setAddress(null)
        })
      } else {
        setMetaMaskInstalled(false)
        setReady(true)
      }
    }
    init()
  }, [])

  useEffect(() => {
    if (isMetaMaskInstalled) {
      if (chainId !== TARGET_NETWORK_ID_HEX_STRING) {
        setMetaAlert(true)
      }
    }
  }, [isMetaMaskInstalled, chainId])

  const connectWallet = async () => {
    const account = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    const myAddress = account[0]
    setAddress(myAddress)
    await loginWithMetaMask(myAddress)
  }

  const loginWithMetaMask = async (address: string) => {
    const result = await AuthService.getNonce(address)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(result.nonce)
    const { jwtToken } = await AuthService.login({
      address,
      signature,
    })
    AuthService.setToken(jwtToken)
    const authUser = await AuthService.getAccount()
    setUser(authUser)
  }

  const registerDevices = () => {
    // reqNotfToken().then((token) => {
    //   AuthService.registerDevices({
    //     type: 'FIREBASE_MESSAGE',
    //     value: token as string,
    //   })
    //     .then(() => console.log('registered devices'))
    //     .catch(() => console.log('failed to register devices'))
    // })
  }

  const updateUser = (arg: IUser) => setUser(arg)

  const logOut = () => {
    localStorage.removeItem(authTokenKey)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        metamask: {
          isMetaMaskInstalled,
          chainId,
          address,
          metaAlert,
          setMetaAlert,
          onBoarding,
        },
        connectWallet,
        ready,
        user,
        setUser,
        updateUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth: () => AuthState = () => useContext<AuthState>(AuthContext)
