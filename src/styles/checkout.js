import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        padding: 25
    },
    mainTitle: {
        color: '#000000',
        fontWeight: '900',
        fontSize: 34,
        paddingBottom: 35
    },
    subTitle: {
        fontWeight: '700',
        fontSize: 17,
        color: '#000000'
    },
    container: {
        gap: 35,
        flex: 1
    },
    subCont: {
        gap: 14
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
    textAddress: {
        borderBottomColor: '#000000',
        borderBottomWidth: 0.5,
        overflow: 'scroll',
        width: '100%'
    }

})

export default style 