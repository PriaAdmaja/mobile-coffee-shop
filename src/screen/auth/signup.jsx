import { Image, Text, TouchableOpacity, View, TextInput } from "react-native"

import startStyle from '../../styles/start'
import authStyle from '../../styles/auth'
import { useState } from "react"
import axios from "axios"
import Loader from "../../components/Loader"
import { Toast } from "react-native-toast-message/lib/src/Toast"

const SignUp = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const register = async () => {
        try {
            setIsLoading(true)
            const body = {
                email,
                password,
                phoneNumber
            }
            const url = `https://backend-coffee-shop.vercel.app/auth/register`;
            const result = await axios.post(url, body)
            Toast.show({
                type: 'success',
                text1: result.data.msg
            });
        } catch (error) {
            // console.log(error);
            Toast.show({
                type: 'error',
                text1: error.response.data.msg
            });
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <View style={startStyle.background}>
            <View style={authStyle.upView}>
                <Image source={require('../../assets/images/sign-up.png')} style={startStyle.image} />
            </View>
            <View style={authStyle.bottomView}>
                <View style={authStyle.textView}>
                    <TextInput placeholder="Enter your email address" style={authStyle.inputText} onChangeText={(text) => setEmail(text)} />
                    <TextInput placeholder="Enter your password" secureTextEntry={true} style={authStyle.inputText} onChangeText={(text) => setPassword(text)} />
                    <TextInput placeholder="Enter your phone number" keyboardType="numeric" style={authStyle.inputText} onChangeText={(text) => setPhoneNumber(text)} />
                </View>
                <View style={email && password && phoneNumber ? {display: 'none'} : authStyle.fakeButton}>
                    <Text style={authStyle.fakeTextButton}>Create Account</Text>
                </View>
                <TouchableOpacity style={email && password && phoneNumber ? authStyle.signupBtn : {display: 'none'}} onPressOut={register}>
                    <Text style={startStyle.textButton}>Create Account</Text>
                    <Loader.ButtonLoader isLoading={isLoading} />
                </TouchableOpacity>
            </View>
            <Toast
                position='top'
                bottomOffset={20}
            />
        </View>
    )
}

export default SignUp