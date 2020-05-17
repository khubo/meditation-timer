import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

interface prop {
  start: any,
  end: any,
  disable: boolean,
  working: boolean
}

export default function Control({ start, end, disable, working }: prop) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title='Start' onPress={start} disabled={disable || working} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='End' onPress={end} disabled={!working} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  buttonContainer: {
    borderColor: 'white',
    borderWidth: 1,
    flexGrow: 1,
    width: '100%'
  }
})
