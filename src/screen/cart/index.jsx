import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import style from '../../styles/cart'
import navStyle from '../../styles/nav'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector((state) => state.cart.cartList);
    const navigation = useNavigation()
    // console.log(cart);
    return (
        <View style={style.mainView}>
            <View style={navStyle.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={navStyle.arrowWrapper}>
                    <Image source={require('../../assets/icons/left.png')} />
                </TouchableOpacity>
                <Text style={navStyle.navText}>Cart</Text>
                <Image source={require('../../assets/icons/left.png')} style={navStyle.hidden} />
            </View>
            <View style={style.content}>
                <View style={style.swipe}>
                    <Image source={require('../../assets/icons/iwwa_swipe.png')} />
                    <Text>Swipe on item to delete</Text>
                </View>
                <FlatList
                    data={cart}
                    ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                    renderItem={({ item }) => {
                        return (
                            <View >
                                <View style={style.cartCard}>
                                    <Image source={{ uri: `${item.pict}` }} style={style.imageCard} />
                                    <View style={style.descCard}>
                                        <Text style={style.titleCard}>{item.name}</Text>
                                        <View style={style.detailCard}>
                                            <Text>IDR {item.price}</Text>
                                            <View style={style.qtyBtn}>
                                                <TouchableOpacity><Text style={style.qtyText}>-</Text></TouchableOpacity>
                                                <Text style={style.qtyText}>{item.qty}</Text>
                                                <TouchableOpacity><Text style={style.qtyText}>+</Text></TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
                {/* <ScrollView style={style.scroll}>
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
                </ScrollView> */}
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