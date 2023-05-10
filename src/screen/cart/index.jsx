import { View, Text, Image } from 'react-native'

const Cart = () => {
    return (
        <View>
            <View>
                <Image source={require('../../assets/icons/left.png')} />
                <Text>Cart</Text>
                <Image source={require('../../assets/icons/left.png')} />
            </View>
        </View>
    )
}

export default Cart