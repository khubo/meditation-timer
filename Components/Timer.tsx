import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { updateTime } from '../types'


interface prop {
  totalTime: Number,
  updateTimer: any
}

function Timer({ totalTime, updateTimer }: prop) {


  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title='-' onPress={() => updateTimer(updateTime.dec)} color='#ff006e' />
      </View>
      <View>
        <Text style={styles.textContent}> {totalTime} </Text>
        <Text style={{ textAlign: 'center' }}> minutes </Text>
      </View>
      <View style={styles.button}>
        <Button title='+' onPress={() => updateTimer(updateTime.inc)} color='#ff006e' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: '40%',
    justifyContent: 'center',
    flexBasis: '87%',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  textContent: {
    textAlign: 'center',
    fontSize: 50
  },
  button: {
    // top: 200,
    margin: 15,
    width: 40
  }
})

export default Timer
