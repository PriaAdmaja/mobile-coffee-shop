import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        margin: 0,
        backgroundColor: '#F2F2F2'
    },
    headerView: {
        backgroundColor: '#6A4029',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 47,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        gap: 5
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
    name: {
        fontWeight: '600',
        fontSize: 17,
        color: '#ffffff',
        paddingTop: 5
    },
    email: {
        fontWeight: '400',
        fontSize: 15,
        color: '#ffffff'
    },
    logout: {
        paddingLeft: 41,
        marginBottom: 30
    },
    logoutText: {
        color: '#6A4029',
        fontWeight: '600',
        fontSize: 17
    }
})

export default style