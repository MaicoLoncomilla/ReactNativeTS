import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../component/Drawer'
import BottomTabs from './BottomTabs'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const Navigation = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerContent}
    >
      <Stack.Screen name="TabHome" component={BottomTabs} />
    </Drawer.Navigator>
  )
}

export default Navigation