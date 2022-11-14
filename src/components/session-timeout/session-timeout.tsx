import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
} from 'react'
import moment from 'moment'
import { useAuth } from '../../context/auth-provider'

const SessionTimeout = () => {
  const [events, setEvents] = useState(['click', 'load', 'scroll'])
  const [second, setSecond] = useState(0)

  const {
    authState: { isAuthenticated },
    signout,
  } = useAuth()

  let timeStamp: any
  let warningInactiveInterval: any = useRef()
  let startTimerInterval: any = useRef()

  // reset interval timer
  let resetTimer = useCallback(() => {
    clearTimeout(startTimerInterval.current)
    clearInterval(warningInactiveInterval.current)

    if (isAuthenticated) {
      timeStamp = moment()
      sessionStorage.setItem('lastTimeStamp', timeStamp)
    } else {
      clearInterval(warningInactiveInterval.current)
      sessionStorage.removeItem('lastTimeStamp')
    }
  }, [isAuthenticated])

  // Life cycle hook
  useEffect(() => {
    events.forEach((event) => {
      window.addEventListener(event, resetTimer)
    })

    return () => {
      clearTimeout(startTimerInterval.current)
    }
  }, [resetTimer])

  return <Fragment />
}

export default SessionTimeout
