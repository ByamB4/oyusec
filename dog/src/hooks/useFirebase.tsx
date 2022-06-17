/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { getMessaging, Messaging, getToken, onMessage, MessagePayload, isSupported } from 'firebase/messaging'
import { firebase } from 'theme'

const initMessaging = async () => {
  const supported = await isSupported()
  const messaging: Messaging = supported ? getMessaging(firebase) : null

  return messaging
}

export const useMessaging = () => {
  const [messaging, setMessaging] = useState<Messaging>(null)
  const [notf, setNotf] = useState<MessagePayload[]>([])

  useEffect(() => {
    initMessaging().then((msg) => {
      setMessaging(msg)
    })
  }, [])

  useEffect(() => {
    if (!messaging) {
      return () => console.log('[-] Not supported browser (firebase)')
    }
    const unSubscribe = onMessage(messaging, (payload) => {
      setNotf([...notf, payload])
    })

    return () => unSubscribe()
  }, [messaging])

  const reqNotfToken = async () => {
    if (!messaging) return

    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    }).catch((e) => console.log(`[-] ${e}`))

    // eslint-disable-next-line consistent-return
    return token
  }

  return {
    messaging,
    notf,
    reqNotfToken,
  }
}
