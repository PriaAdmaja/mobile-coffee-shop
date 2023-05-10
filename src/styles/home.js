import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    homeView : {
        flex: 1,
        padding: 25
    },
    upView: {
        flex: 1
    },
    bottomView: {
        flex: 1
    },
    topNavbar: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 5
    },
    homeTitle: {
        fontWeight: '900',
        fontSize: 35
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    buttonGroupCover: {
        
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        backgroundColor: '#EFEEEE',
        borderRadius: 30,
        paddingHorizontal: 30,
        marginTop: 8
    },
    buttonNavActive : {
        color: '#6A4029',
        padding: 4,
        borderBottomColor: '#6A4029',
        borderBottomWidth: 1
    },
    buttonNav: {
        color: '#9A9A9D',
        padding: 4,
    },
    searchIcon: {
        width: 18,
        height:18
    },
    coverSeeMore: {
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingBottom: 15
    },
    seeMore : {
        color: '#6A4029',
        fontWeight: '400',
    },
    cardCover: {
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
    },
    scrollView: {
        height: '90%'
    },
    productCard: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        width: 156,
        height: 212,
        alignItems: 'center',
        marginTop: 40,
        position: 'relative'
    },
    productImage: {
        width: '70%',
        height: '70%',
        borderRadius: 30,
        position: 'absolute',
        top: -40,
        // marginBottom: -40,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        position: 'absolute',
        bottom: 20
    },
    productName: {
        fontWeight: '900',
        fontSize: 22,
        textAlign: 'center',
        paddingHorizontal: 5
    },
    price: {
        color: '#6A4029',
        fontWeight: '700',
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingTop: 10
    },
   

})

export default style