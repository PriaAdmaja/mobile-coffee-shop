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

import EditProfile from './src/screen/profile/editProfile.jsx'
import SplashScreen from './src/screen/SplashScreen.jsx'

const StactNavigator = () => {
    const { token } = useSelector(state => state.userInfo)

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
                        component={cart}
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
            screenOptions={{ headerShown: false }}
            drawerContent={() => {
                <View style={{ height: '30%' }}>
                    <Image />
                </View>
            }}
        >
            <Drawer.Screen name='home' component={home} />
            <Drawer.Screen name='edit profile' component={EditProfile} />
        </Drawer.Navigator>
    )
}

// const RootStactScreen = () => {
//     const RootStact = createStackNavigator()
//     return (

//     )
// }

const Router = () => {
    return (
        <NavigationContainer >
            <StactNavigator />
        </NavigationContainer>
    )
}

export default Router