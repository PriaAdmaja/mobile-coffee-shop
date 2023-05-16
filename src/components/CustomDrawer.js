import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer