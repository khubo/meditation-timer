import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function Header () {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}> Meditation Timer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContent: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },

  container: {
    backgroundColor: '#8338ec',
    padding: 10,
    height: 50
  }
})

export default Header
