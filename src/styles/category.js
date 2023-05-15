import { StyleSheet} from'react-native'

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        padding: 25
    },
    flatList: {
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 16
    },
    productCard: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        width: 140,
        height: 190,
        alignItems: 'center',
        marginTop: 40,
        position: 'relative'
    },
    productImage: {
        width: '70%',
        height: '70%',
        borderRadius: 30,
        position: 'absolute',
        top: -30,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        position: 'absolute',
        bottom: 10
    },
    productName: {
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 5
    },
    price: {
        color: '#6A4029',
        fontWeight: '700',
        textAlign: 'center',
        paddingHorizontal: 5,
        // paddingTop: 10
    },
})

export default style