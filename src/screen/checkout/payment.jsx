import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useMemo } from 'react'
import { RadioGroup } from 'react-native-radio-buttons-group'
import axios from 'axios'

import style from '../../styles/payment'
import Login from '../auth/login'
import { Toast } from "react-native-toast-message/lib/src/Toast"
import Loader from '../../components/Loader'
import { deliveryAction } from '../../redux/slices/delivery'

const Payment = () => {
    const [selectedId, setSelectedId] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const cart = useSelector((state) => state.cart.cartList);

    const {deliveryId} = useSelector(state => state.deliveryStatus)
    const { address, token } = useSelector(state => state.userInfo)
    const dispatch = useDispatch()

    const radioButton = useMemo(() => ([
        {
            id: 1,
            label: 'Card',
            value: 1,
            size: 17,
            color: '#6A4029'
        },
        {
            id: 2,
            label: 'Bank account',
            value: 2,
            size: 17,
            color: '#6A4029'
        },
        {
            id: 3,
            label: 'Cash on delivery',
            value: 3,
            size: 17,
            color: '#6A4029'
        },
    ]), [])

    let subTotal = cart.map(data => Math.floor(data.price * data.qty)).reduce((a, b) => (a + b), 0);
    let tax = Math.floor(10 / 100 * subTotal);
    let shipping = Number(deliveryId) === 2 ? 10000 : 0;
    let total = Math.floor(subTotal + tax + shipping)

    const selectedData = (show) => {
        const { productId, sizeId, quantity, price } = show;
        return { productId, sizeId, quantity, price }
    }
    const proceedPayment = async() => {
        try {
            setIsLoading(true)
            const body = {
                promoId: null,
                paymentId: selectedId,
                deliveryId,
                notes: 'null',
                grandTotal: total,
                address: address,
                products: cart.map(selectedData)
            }
            const url = `https://backend-coffee-shop.vercel.app/transaction`
            const result = await axios.post(url, body, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            Toast.show({
                type: 'success',
                text1: result.data.msg
            });
            dispatch(cartAction.clearCart());
            dispatch(deliveryAction.removeDelivery)

        } catch (error) {
            Toast.show({
                type: 'error',
                text1: error.response.data.msg
            })
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <View style={style.mainView}>
            <ScrollView >
                <View style={style.subCont}>
                    <View style={style.addressNav}>
                        <Text style={style.subTitle}>Products</Text>
                    </View>
                    <View style={style.contentCont}>
                        <View style={style.cartCont}>
                            {cart.map((data, i) => {
                                return (
                                    <View key={i} >
                                        <View style={style.cart}>
                                            <Image source={{ uri: `${data.pict}` }} style={style.image} />
                                            <View style={style.cartContent}>
                                                <Text>{data.name}</Text>
                                                <View style={style.cartDetail}>
                                                    <Text>x {data.qty}</Text>
                                                    <Text>IDR {data.price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View style={style.subCont}>
                    <View style={style.addressNav}>
                        <Text style={style.subTitle}>Payment Method</Text>
                    </View>
                    <View style={style.contentCont}>
                        <RadioGroup
                            radioButtons={radioButton}
                            onPress={setSelectedId}
                            selectedId={selectedId}
                        />
                    </View>
                </View>
                <View style={style.subCont}>
                    <View style={style.addressNav}>
                        <Text style={style.subTitle}>My Card</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/bricard.png')} style={style.bankCard} />
                    </View>
                </View>
                <View style={style.totalWraper}>
                    <Text style={style.total}>Total</Text>
                    <Text style={style.total}>IDR {total}</Text>
                </View>
                <TouchableOpacity style={style.button} onPressOut={proceedPayment}>
                    {isLoading ?  <Loader.ButtonLoader isLoading={isLoading} /> 
                    : <Text style={style.textButton}>Proceed to Payment</Text>}
                   
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

export default Payment