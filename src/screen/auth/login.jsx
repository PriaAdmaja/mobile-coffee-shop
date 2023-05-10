import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"

import startStyle from '../../styles/start'
import authStyle from '../../styles/auth'
import googleIcon from '../../assets/icons/google.png'
import { useState } from "react"
import Loader from "../../components/Loader"
import axios from "axios"
import { userInfoAction } from "../../redux/slices/userInfo"
import { Toast } from "react-native-toast-message/lib/src/Toast"

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    const loginAccount = async () => {
        try {
            setIsLoading(true)
            const body = {
                email,
                password
            }
            const url = `https://backend-coffee-shop.vercel.app/auth/login`;
            const result = await axios.post(url, body)
            dispatch(userInfoAction.submitToken(result.data.token))
            dispatch(userInfoAction.submitAvatar(result.data.profilePict))
            dispatch(userInfoAction.submitUserId(result.data.id))
            // console.log(result.data.msg);
            Toast.show({
                type: 'success',
                text1: result.data.msg
            });
            navigation.navigate('home')
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: error.response.data.msg
            })
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <View style={startStyle.background}>
            <View style={authStyle.upLogin}>
                <Image source={require('../../assets/images/login.png')} style={startStyle.image} />
                <Text style={authStyle.upLoginText}>Log in</Text>
            </View>
            <View style={authStyle.bottomView}>
                <View style={authStyle.loginTextView}>
                    <TextInput placeholder="Enter your email address" style={authStyle.inputText} onChangeText={text => setEmail(text)}/>
                    <TextInput  placeholder="Enter your password" style={authStyle.inputText} onChangeText={text => setPassword(text)}/>
                    <Text style={authStyle.forgotPass} onPress={() => navigation.navigate('forgot')}>Forgot Password?</Text>
                </View>

                <TouchableOpacity style={startStyle.buttonTouch} onPressOut={loginAccount}>
                    <Text style={startStyle.textButton}>Login</Text>
                    <Loader.ButtonLoader isLoading={isLoading} />
                </TouchableOpacity>
                <View style={authStyle.barrier}>
                    <View style={authStyle.lineBarrier}></View>
                    <Text style={authStyle.textBarrier}>or login in with</Text>
                    <View style={authStyle.lineBarrier}></View>
                </View>
                <TouchableOpacity style={authStyle.googleBtn}>
                    <Image source={googleIcon} style={authStyle.googleIcon} />
                    <Text style={authStyle.googleText}>Login with Google</Text>
                </TouchableOpacity>
            </View>
            <Toast
                position='top'
                bottomOffset={20}
            />
        </View>
    )
}

export default Login