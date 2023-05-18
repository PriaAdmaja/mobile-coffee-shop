import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import style from '../../styles/checkout'
import { useNavigation } from '@react-navigation/native'

import { userInfoAction } from '../../redux/slices/userInfo'
import { deliveryStatusAction } from '../../redux/slices/deliveryStatus'

const Checkout = () => {
    const [editable, setEditable] = useState(false)
    const { address, phone } = useSelector((state) => state.userInfo);
    const { deliveryId} = useSelector(state => state.deliveryStatus)
    console.log(address);

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const goPayment = () => {
        navigation.navigate('payment')
    }
    return (
        <View style={style.mainView}>
            <Text style={style.mainTitle}>Delivery</Text>
            <View style={style.container}>
                <View style={style.subCont}>
                    <View style={style.addressNav}>
                        <Text style={style.subTitle}>Address detail</Text>
                        <Text onPress={() => editable === true ? setEditable(false) : setEditable(true)}>change</Text>
                    </View>
                    <View style={style.contentCont}>
                        <TextInput editable={editable} selectTextOnFocus={editable} multiline={true} numberOfLines={3} value={address} style={style.textAddress} onChangeText={text => dispatch(userInfoAction.submitAddress(text))} />
                        <TextInput editable={editable} selectTextOnFocus={editable} value={phone} onChangeText={text => dispatch(userInfoAction.submitPhone(text))} />
                    </View>
                </View>
                <View style={style.subCont}>
                    <View>
                        <Text style={style.subTitle}>Delivery method</Text>
                    </View>
                    <View style={style.contentCont}>
                        <TouchableOpacity style={style.choiceWrap} onPress={() => dispatch(deliveryStatusAction.submitDeliveryId(1))}>
                            <View
                                style={ deliveryId === 1 ? style.outDotActive : style.outDotInactive}>
                                <View style={ deliveryId === 1 ? style.dotActive : style.dotInactive}>
                                </View>
                            </View>
                            <Text style={style.deliveryText}>
                                Door delivery
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={style.choiceWrap} onPress={() => dispatch(deliveryStatusAction.submitDeliveryId(2))}>
                            <View
                                style={deliveryId === 2 ? style.outDotActive : style.outDotInactive}>
                                <View style={ deliveryId === 2 ? style.dotActive : style.dotInactive}>
                                </View>
                            </View>
                            <Text style={style.deliveryText}>
                                Pict up at store
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={style.choiceWrap} onPress={() => dispatch(deliveryStatusAction.submitDeliveryId(3))}>
                            <View
                                style={deliveryId === 3 ? style.outDotActive : style.outDotInactive}>
                                <View style={deliveryId === 3 ? style.dotActive : style.dotInactive}>
                                </View>
                            </View>
                            <Text style={style.deliveryText}>
                                Dine in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={style.button} onPressOut={goPayment}>
                <Text style={style.textButton}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Checkout