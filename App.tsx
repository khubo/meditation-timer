
import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Header from './Components/Header'
import Home from './Components/Home'
import LogSreen from './Components/LogScreen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (

    <NavigationContainer>
      <StatusBar hidden />
      <Header />
      <Drawer.Navigator initialRouteName='home'>
        <Drawer.Screen name='home' component={Home} />
        <Drawer.Screen name='log' component={LogSreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
