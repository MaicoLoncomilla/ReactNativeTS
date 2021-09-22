import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import { Store } from './src/state/store'

const App = (): JSX.Element => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar />
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
