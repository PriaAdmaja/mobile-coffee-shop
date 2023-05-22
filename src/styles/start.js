import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    startTitle: {
        fontSize: 58,
        color: 'black',
        fontFamily: 'Poppins-Bold',
        lineHeight: 70
    },
    startDescription: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium'
    },
    background: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        padding: 25,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 2
    },
    buttonTouch: {
        backgroundColor: '#6A4029',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    secondButtonTouch: {
        backgroundColor: '#FFBA33',
        borderRadius: 20,
        marginTop: 17
    },
    textButton: {
        color: '#ffffff',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 22

    },
    textSecondButton: {
        color: '#000000',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 22

    },
})

export default styles