import { Toast } from 'components'
import { useAuth } from 'contexts/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SecurePage = ({ children, className = '' }) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user == null) {
      router.push('/')
      Toast({
        message: 'Please login to continue',
        type: 'error',
      })
    }
  }, [user])

  return user && <div className={className}>{children}</div>
}

export default SecurePage
