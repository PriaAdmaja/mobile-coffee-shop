import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    upView: {
        flex: 1
    },
    bottomView: {
        flex: 1
    },
    textView: {
        marginBottom: 47
    },
    inputText: {
        borderBottomWidth: 1,
        borderBottomColor: '#9F9F9F',
        paddingBottom: 6
    },
    upLogin: {
        flexDirection: 'row',
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    upLoginText: {
        fontWeight: '700',
        fontSize: 50,
        flex: 1,
        color: '#000000'
    },
    loginBtn: {
        backgroundColor: '#6A4029',
        borderRadius: 20,
    },
    signupBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        backgroundColor: '#6A4029',
        borderRadius: 20,
    },
    loginTextView: {
        marginBottom: 22,
    },
    forgotPass: {
        paddingTop: 23,
        color: '#895537',
        textDecorationLine: 'underline'
    },
    googleBtn: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 22,
        gap: 15,
        justifyContent: 'center'
    },
    googleIcon: {
        width: 28,
        height: 26,
    },
    googleText: {
        fontWeight: 400,
        color: '#000000',
        fontSize: 17
    },
    barrier: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    lineBarrier: {
        width: '100%',
        height: 1,
        color: '#9F9F9F',

    },
    textBarrier: {
        color: '#9F9F9F',
        fontSize: 14,
    },
    textForgot : {
        color: '#000000',
        textAlign: 'center',
        paddingVertical: 25
    },
    startTitle: {
        fontSize: 50,
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontWeight: '700',
        textAlign: 'center'
    },
})

export default styles