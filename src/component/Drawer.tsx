import { DrawerContentComponentProps } from '@react-navigation/drawer'
import * as React from 'react'
import { Text, View } from 'react-native'

type DrawerProps = DrawerContentComponentProps

const Drawer = ({ navigation }: DrawerProps): JSX.Element => {
  return (
    <View>
      <Text>Drawer</Text>
    </View>
  )
}

export default Drawer