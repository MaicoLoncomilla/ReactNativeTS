import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  useSelector } from 'react-redux'
import {  RootState } from '../state/store'

const Home = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  console.log(user)
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Home