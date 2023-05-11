import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { RadioGroup } from 'react-native-radio-buttons-group'

import style from '../../styles/checkout'
import { useNavigation } from '@react-navigation/native'
import { deliveryAction } from '../../redux/slices/delivery'
import { userInfoAction } from '../../redux/slices/userInfo'
import { deliveryStatusAction } from '../../redux/slices/deliveryStatus'

const Checkout = () => {
    const {delivery} = useSelector(state => state.delivery)
    const [profile, setProfile] = useState()
    const [editable, setEditable] = useState(false)
    const [selectedId, setSelectedId] = useState(delivery || null)
    const { userId } = useSelector((state) => state.userInfo);

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        const url = `https://backend-coffee-shop.vercel.app/users/${userId}`
        axios.get(url).then(res => setProfile(res.data.data[0])).catch(err => console.log(err))
    }, [userId])

    const changeAddress = (text) => {
        setProfile(prev => ({
            ...prev,
            address: text
        }))
    }

    const changePhone = (text) => {
        setProfile(prev => ({
            ...prev,
            phone_number: text
        }))
    }

    const radioButton = useMemo(() => ([
        {
            id: 1,
            label: 'Door delivery',
            value: 1,
            size: 17,
            color: '#6A4029'
        },
        {
            id: 2,
            label: 'Pict up at store',
            value: 2,
            size: 17,
            color: '#6A4029'
        },
        {
            id: 3,
            label: 'Dine in',
            value: 3,
            size: 17,
            color: '#6A4029'
        },
    ]),[])

    const goPayment = () => {
        dispatch(deliveryStatusAction.submitDeliveryId(selectedId))
        dispatch(userInfoAction.submitAddress(profile?.address))
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
                        <TextInput editable={editable} selectTextOnFocus={editable} multiline={true} numberOfLines={3} value={profile?.address} style={style.textAddress} onChangeText={text => changeAddress(text)} />
                        <TextInput editable={editable} selectTextOnFocus={editable} value={profile?.phone_number} onChangeText={text => changePhone(text)} />
                    </View>
                </View>
                <View style={style.subCont}>
                    <View>
                        <Text style={style.subTitle}>Delivery method</Text>
                    </View>
                    <View style={style.contentCont}>
                        <RadioGroup
                            radioButtons={radioButton}
                            onPress={setSelectedId}
                            selectedId={selectedId}
                        />
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