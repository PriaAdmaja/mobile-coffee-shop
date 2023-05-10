import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        padding: 25
    },
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flex: 1
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    title: {
        fontWeight: '900',
        fontSize: 35,
        paddingTop: 10
    },
    price: {
        fontWeight: '700',
        fontSize: 20,
        color: '#6A4029',
        paddingTop: 6
    },
    headText: {
        fontWeight: '700',
        fontSize: 17,
        color: '#000000',
        paddingBottom: 5
    },
    descCont: {
        paddingTop: 15,
        flex: 1
    },
    desc: {
        fontSize: 15,
        textAlign: 'justify'
    },
    button: {
        backgroundColor: '#6A4029',
        borderRadius: 20,
        paddingVertical: 22,
        position: 'relative',
    },
    textButton: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 17,
        textAlign: 'center'
    },
    leftArrow: {
        fontWeight: '900'
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default style