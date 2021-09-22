import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer'
import * as React from 'react'
import { Text, View } from 'react-native'

type DrawerProps = DrawerContentComponentProps

const Drawer = ({ navigation }: DrawerProps): JSX.Element => {
  return (
    <View>
      <DrawerItem
        onPress={() => navigation.navigate('Home')}
        label={() => <Text>Drawer</Text>}
      />
    </View>
  )
}

export default Drawer
