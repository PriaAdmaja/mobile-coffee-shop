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
    imageBtn :{
        backgroundColor: '#FFBA33',
        borderRadius: 20,
        padding: 22
    },
    imageText: {
        color: '#000000',
        fontWeight: '900',
        fontSize: 17,
        textAlign: "center"
    },
    saveText: {
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 17,
        textAlign: "center"
    },
    dotInactive: {
        width: 10,
        height: 10,
        backgroundColor: '#9F9F9F',
        borderRadius: 5,
    },
    dotActive: {
        width: 10,
        height: 10,
        backgroundColor: '#6A4029',
        borderRadius: 5,
    },
    outDotInactive: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#9F9F9F',
        borderWidth: 1
    },
    outDotActive: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#6A4029',
        borderWidth: 1
    },
    genderNameWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 17
    },
    gender : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 30,
        marginBottom: 20
    },
    genderTextInactive : {
        fontSize: 13,
        fontWeight: '400',
        color: '#9f9f9f'
    },
    genderTextActive : {
        fontSize: 13,
        fontWeight: '700',
        color: '#000000'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    modal: {
        width: '80%',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        gap: 10
    }
})

export default style