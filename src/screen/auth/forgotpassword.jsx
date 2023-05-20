import { Image, Text, TouchableOpacity, View, TextInput } from "react-native"
import { useState } from 'react'
import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Loader from "../../components/Loader";
import { API_URL } from '@env';

import startStyle from '../../styles/start';
import authStyle from '../../styles/auth'
import style from "../../styles/home";

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState()
    const [send, setSend] = useState(false)

    const sendEmail = async() => {
        try {
            setIsLoading(true)
            const url = `${API_URL}/auth/forgotpassword/${email}`;
            const result = await axios.patch(url)
            Toast.show({
                type: 'success',
                text1: result.data.msg
            });
            setSend(true)
        } catch (error) {
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
            <Text style={authStyle.startTitle}>Don't Worry!</Text>
            <Text style={startStyle.startDescription}>Enter your email adress to get reset password link</Text>
            <Image source={require('../../assets/images/forgot-password.png')} style={startStyle.image} />
            <TextInput placeholder="Enter your email address" style={send ? {display: 'none'} : authStyle.inputText} onChangeText={text => setEmail(text)}/>
            <Text style={send ? authStyle.textForgot : {opacity: 0}}>Haven’t received any link?</Text> 
            <TouchableOpacity style={startStyle.buttonTouch} onPress={sendEmail}>
                <Text style={startStyle.textButton}>{send ? 'Resend Link' : 'Send Link'}</Text>
                <Loader.ButtonLoader isLoading={isLoading} />
            </TouchableOpacity>
            <Toast
                position='top'
                bottomOffset={20}
            />
        </View>
    )
}

export default ForgotPassword