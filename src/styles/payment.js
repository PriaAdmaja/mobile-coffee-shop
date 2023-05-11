import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        padding: 25
    },
    contentCont: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    addressNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subCont: {
        gap: 14,
        marginBottom: 30
    },
    subTitle: {
        fontWeight: '700',
        fontSize: 17,
        color: '#000000'
    },
    cartCont: {
        gap: 14,
        width: '100%'
    },
    cart: {
        flexDirection: 'row',
        gap: 19,
        width: '100%',
        alignItems: 'center'
    },
    cartContent: {
        flex: 3,
    },
    image: {
        width: 54,
        height: 64,
        borderRadius: 20,
        flex: 1
    },
    cartDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bankCard: {
        width: 248,
        height: 150
    },
    totalWraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30
    },
    total: {
        fontWeight: '700',
        fontSize: 20,
        color: '#000000'
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

})

export default style