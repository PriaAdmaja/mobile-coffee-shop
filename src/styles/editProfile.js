import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        padding: 25
    },
    mainImageWrapper : {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    imageWrapper: {
        width: 140,
        height: 140,
        position: 'relative'
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 70
    },
    penWrap: {
        backgroundColor: '#6A4029',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    inputWrap: {
        marginBottom: 20
    },
    text: {
        fontWeight: '700',
        fontSize: 13,
    },
    input : {
        borderBottomColor: '#9f9f9f',
        borderBottomWidth: 1,
        padding: 0
    },
    saveBtn: {
        backgroundColor: '#6A4029',
        borderRadius: 20,
        padding: 22
    },
    saveText: {
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 17,
        textAlign: "center"
    }
})

export default style