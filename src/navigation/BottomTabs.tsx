import * as React from 'react'
import Home from '../screen/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const BottomTabs = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={Home}  />
    </Tab.Navigator>
  )
}

export default BottomTabs