import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Image, Text } from 'react-native'


import getStart from './GetStarted.jsx'
import welcomeScreen from './src/screen/WelcomePage.jsx'
import login from './src/screen/auth/login.jsx'
import signup from './src/screen/auth/signup.jsx'
import forgot from './src/screen/auth/forgotpassword.jsx'
import home from './src/screen/home'
import profile from './src/screen/profile'
import chat from './src/screen/chat'
import productDetail from './src/screen/product-detail'
import cart from './src/screen/cart'
import checkout from './src/screen/checkout'
import payment from './src/screen/checkout/payment.jsx'
import Category from './src/screen/home/category.jsx'
import EmptyCart from './src/screen/cart/empty.jsx'
import History from './src/screen/history/index.jsx'

import CustomDrawer from './src/components/CustomDrawer.js'

import EditProfile from './src/screen/profile/editProfile.jsx'
import SplashScreen from './src/screen/SplashScreen.jsx'

const StactNavigator = () => {
    const { token } = useSelector(state => state.userInfo)
    const { cartList } = useSelector(state => state.cart)
    

    const { Navigator, Screen } = createStackNavigator()
    return (
        <Navigator>
            <Screen
                name='SplashScreen'
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />
            {!token ?
                <>
                    <Screen
                        name='getStart'
                        component={getStart}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Screen
                        name='welcome'
                        component={welcomeScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Screen
                        name='login'
                        component={login}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Screen
                        name='signup'
                        component={signup}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Screen
                        name='forgot'
                        component={forgot}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
                :
                <>
                    <Screen
                        name='tab'
                        component={TabNavigator}
                        options={{
                            headerShown: false,
                        }} />
                    <Screen
                        name='product-detail'
                        component={productDetail}
                        options={{
                            headerShown: false,
                        }} />
                    <Screen
                        name='cart'
                        component={cartList?.length ? cart : EmptyCart}
                        options={{
                            headerShown: false,
                        }} />
                    <Screen
                        name='checkout'
                        component={checkout}
                        options={{
                            headerShown: false,
                        }} />
                    <Screen
                        name='payment'
                        component={payment}
                        options={{
                            headerShown: false,
                        }} />
                    <Screen
                        name='category'
                        component={Category}
                        options={{
                            headerShown: false,
                        }} />
                    <Screen
                        name='Edit Profile'
                        component={EditProfile}
                        options={{
                            headerShown: false,
                        }} />
                         <Screen
                        name='History'
                        component={History}
                        options={{
                            headerShown: false,
                        }} />
                </>
            }
        </Navigator>
    )
}

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            initialRouteName='tab'
            screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 50 } }}
        >
            <Tab.Screen name='drawer' component={DrawerNavigator} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('./src/assets/icons/home.png')}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? '#6A4029' : '#ADADAF' }}
                            />

                        </View>
                    )
                }
            }} />
            <Tab.Screen name='profile' component={profile} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('./src/assets/icons/user.png')}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? '#6A4029' : '#ADADAF' }}
                            />

                        </View>
                    )
                }
            }} />
            <Tab.Screen name='chat' component={chat} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('./src/assets/icons/chat.png')}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? '#6A4029' : '#ADADAF' }}
                            />

                        </View>
                    )
                }
            }} />
        </Tab.Navigator>

    )
}

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    const { avatar, displayName, email } = useSelector(state => state.userInfo)
    // console.log(token);
    return (
        <Drawer.Navigator
            initialRouteName='drawer'
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: { color: '#6A4029', },
                drawerItemStyle: { borderBottomWidth: 0.3, borderBottomColor: '#6A4029'}
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='Home' component={home}
                options={{
                    drawerIcon: () => {
                        return (
                            <Image source={require('./src/assets/icons/home.png')} style={{ width: 22, height: 22, }} />
                        )
                    }
                }}
            />
            <Drawer.Screen name='Edit Profile' component={EditProfile}
                options={{
                    drawerIcon: () => {
                        return (
                            <Image source={require('./src/assets/icons/Edit profile.png')} style={{ width: 22, height: 22, }} />
                        )
                    }
                }}
            />
        </Drawer.Navigator>
    )
}


const Router = () => {
    return (
        <NavigationContainer >
            <StactNavigator />
        </NavigationContainer>
    )
}

export default Router