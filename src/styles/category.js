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
        paddingBottom: 16,
        color: '#000000'
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
        bottom: 10,
        color: '#000000'
    },
    productName: {
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 5,
        color: '#000000'
    },
    price: {
        color: '#6A4029',
        fontWeight: '700',
        textAlign: 'center',
        paddingHorizontal: 5,
        // paddingTop: 10
    },
    filterBtn : {
        backgroundColor: '#efefef',
        paddingHorizontal: 20,
        paddingVertical: 7,
        width: 120,
        borderWidth: 1,
        borderColor: '#1a1a1a',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    filterBtnActive: {
        backgroundColor: '#bbbbbb',
        paddingHorizontal: 20,
        paddingVertical: 7,
        width: 120,
        borderWidth: 1,
        borderColor: '#1a1a1a',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    filterText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000000'
    },
    modalView: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 'auto',
        position: 'relative'
    },
    filterWrap: {
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20
    },
    modalSubtitle: {
        fontSize: 18,
        fontWeight: '700',
        paddingBottom: 10,
        color: '#000000'
    },
    selectFilterBtn: {
        backgroundColor: '#FFBA33',
        borderRadius: 20,
        padding: 22
    },
    selectFilterText : {
        color: '#000000',
        fontWeight: '900',
        fontSize: 17,
        textAlign: "center"
    },
    cancelText: {
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 17,
        textAlign: "center"
    },
    cancelBtn : {
        backgroundColor: '#6A4029',
        borderRadius: 20,
        padding: 22,
        marginTop: 20
    },
    modalCLose: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 15,
        backgroundColor: '#6A4029',
        borderRadius: 5
    },
    textClose : {
        color: '#ffffff'
    }
})

export default style