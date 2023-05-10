import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import getStart from './GetStarted.jsx'
import welcomeScreen from './src/screen/WelcomePage.jsx'
import login from './src/screen/auth/login.jsx'
import signup from './src/screen/auth/signup.jsx'
import forgot from './src/screen/auth/forgotpassword.jsx'
import home from './src/screen/home'

const StactNavigator = () => {
    const { token } = useSelector(state => state.userInfo)

    const { Navigator, Screen } = createStackNavigator()
    return (
        <Navigator>
            <Screen
                name='getStart'
                component={getStart}
                options={{
                    headerShown: false,
                }}
            />
            {!token ?
                <>

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
                        name='home'
                        component={home}
                        options={{
                            headerShown: false,
                        }} />
                </>
            }
        </Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <StactNavigator />
        </NavigationContainer>
    )
}

export default Router