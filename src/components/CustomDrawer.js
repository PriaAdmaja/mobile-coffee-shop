import { View, Text, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import style from '../styles/drawer'
import { userInfoAction } from '../redux/slices/userInfo'

const CustomDrawer = (props) => {
    const { avatar, email, displayName, token, userId } = useSelector(state => state.userInfo)
    const dispatch = useDispatch()

    const logout = async () => {
        try {
            const url = `https://backend-coffee-shop.vercel.app/auth/logout`
            const result = await axios.post(url, { userId }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
           
            
        } catch (error) {
            console.log(error.response)
        } finally {
            dispatch(userInfoAction.clearData())
        }
    }

    return (
        <View style={style.mainView}>
            <DrawerContentScrollView {...props} >
                <View style={style.headerView}>
                    <Image source={avatar ? { uri: `${avatar}` } : require('../assets/images/default-avatar.jpg')} style={style.image} />
                    <Text style={style.name}>{displayName}</Text>
                    <Text style={style.email}>{email}</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={style.logout}>
                <TouchableOpacity onPress={logout}>
                    <Text style={style.logoutText}>Sign-out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer