import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import style from '../../styles/cart'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector((state) => state.cart.cartList);
    const navigation = useNavigation()
    return (
        <View style={style.mainView}>
            <View>
                <Image source={require('../../assets/icons/left.png')} />
                <Text>Cart</Text>
                <Image source={require('../../assets/icons/left.png')} />
            </View>
            <View style={style.content}>
                <Text>Swipe on item to delete</Text>
                <ScrollView style={style.scroll}>
                    <View style={style.cardWrapper}>
                        {cart.map((data, i) => {
                            return (
                                <View key={i}>
                                    <View style={style.cartCard}>
                                        <Image source={{ uri: `${data.pict}` }} style={style.imageCard} />
                                        <View style={style.descCard}>
                                            <Text style={style.titleCard}>{data.name}</Text>
                                            <View style={style.detailCard}>
                                                <Text>IDR {data.price}</Text>
                                                <View style={style.qtyBtn}>
                                                    <TouchableOpacity><Text style={style.qtyText}>-</Text></TouchableOpacity>
                                                    <Text style={style.qtyText}>{data.qty}</Text>
                                                    <TouchableOpacity><Text style={style.qtyText}>+</Text></TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
                <TouchableOpacity style={style.button} onPressOut={() => navigation.navigate('checkout')}>
                    <Text style={style.textButton}>
                        Confirm and Checkout
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Cart