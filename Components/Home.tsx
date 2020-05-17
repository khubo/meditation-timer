import React, { useState, useRef, useEffect } from 'react'
import { View, Button } from 'react-native'
import useInterval from '@use-it/interval'
import SoundPlayer from 'react-native-sound-player'
import Timer from './Timer'
import Control from './Control'
import { updateTime } from '../types'

// nothing, yet!
interface props {

}

function Home() {

  const totalTime: any = useRef() // persist across re-renders!!
  const [working, setWorking] = useState(false)
  const [remainingTime, setTime] = useState(6)

  useEffect(() => {
    totalTime.current = remainingTime
  }, [])

  const updateTimer = (type: updateTime) => {
    type === updateTime.inc
      ? setTime(time => {
        totalTime.current = time + 1
        return totalTime.current
      })
      : setTime(time => {
        totalTime.current = time - 1
        return totalTime.current
      })
  }

  useInterval(() => {
    (remainingTime > 1)
      ? setTime(time => time - 1)
      : end()
  }, working ? 1000 : null)

  const start = () => setWorking(true)



  const end = () => {
    setWorking(false)
    setTime(totalTime.current)
    SoundPlayer.playSoundFile('bullfrog')
  }

  return (
    <View>
      <Timer totalTime={remainingTime} updateTimer={updateTimer} />
      <Control start={start} end={end} disable={remainingTime === 0} working={working} />
    </View>
  )
}

export default Home