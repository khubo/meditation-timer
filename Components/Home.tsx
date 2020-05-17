import React, { useState } from 'react'
import { View, Button } from 'react-native'
import useInterval from '@use-it/interval'
import SoundPlayer from 'react-native-sound-player'
import Timer from './Timer'
import Control from './Control'
import { updateTime } from '../types'

// nothing, yet!
interface props {
  navigation: any
}

function Home({ navigation }: props) {

  const [working, setWorking] = useState(false)
  const [totalTime, setTime] = useState(6)

  const updateTimer = (type: updateTime) => {
    console.log("time is ")
    type === updateTime.inc
      ? setTime(time => time + 1)
      : setTime(time => time - 1)
  }

  useInterval(() => {
    (totalTime > 1)
      ? setTime(time => time - 1)
      : end()

  }, working ? 1000 : null)

  const start = () => {
    setWorking(true)
  }


  const end = () => {
    setWorking(false)
    setTime(5)
    SoundPlayer.playSoundFile('bullfrog')
  }

  return (
    <View>
      <Timer totalTime={totalTime} updateTimer={updateTimer} />
      <Control start={start} end={end} disable={totalTime === 0} working={working} />
    </View>
  )
}

export default Home