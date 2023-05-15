import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutModal: {
        borderRadius: 30,
        backgroundColor: '#ffffff',
        padding: 40
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center'
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        marginTop: 33
    },
    cancel: {
        borderWidth: 1,
        borderColor: '#9f9f9f',
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: '#f5f5f8'
    },
    logout: {
        backgroundColor: '#6A4029',
        borderRadius: 10,
        paddingVertical: 10,
    }

})

export default style