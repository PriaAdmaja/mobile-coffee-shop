import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        padding: 25
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
    cardWrapper: {
        gap: 15
    },
    cartCard: {
        width: '100%',
        height: 102,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row',
        gap: 20
    },
    imageCard: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    qtyBtn: {
        backgroundColor: '#6A4029',
        flexDirection: 'row',
        paddingVertical: 2,
        paddingHorizontal: 12,
        gap: 14,
        borderRadius: 12
    },
    qtyText: {
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 13
    },
    descCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        
    },
    detailCard: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleCard: {
        fontSize: 17,
        fontWeight: '700',
        color: '#000000'
    },
    scroll: {
        flex: 1
    },
    content: {
        flex: 1
    }
})

export default style