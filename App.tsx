
import React, { useState } from 'react'
import { StatusBar, View, SafeAreaView } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import { updateTime } from './types'
import Header from './Components/Header'
import Timer from './Components/Timer'
import Control from './Components/Control'
import useInterval from '@use-it/interval'


enum test { }

const App = () => {

  const [working, setWorking] = useState(false)
  const [totalTime, setTime] = useState(5)

  const updateTimer = (type: updateTime) => {
    type === updateTime.inc
      ? setTime(time => time + 1)
      : setTime(time => time - 1 || time)
  }

  useInterval(() => {
    (totalTime > 0)
      ? setTime(time => time - 1)
      : setWorking(false)

  }, working ? 1000 : null)

  const start = () => {
    setWorking(true)
  }


  const end = () => {
    setTime(5)
    SoundPlayer.playSoundFile('bullfrog')
    setWorking(false)
  }

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View>
        <Header />
        <Timer totalTime={totalTime} updateTimer={updateTimer} />
        <Control start={start} end={end} disable={totalTime === 0} working={working} />
      </View>
    </SafeAreaView>
  )
}

export default App
