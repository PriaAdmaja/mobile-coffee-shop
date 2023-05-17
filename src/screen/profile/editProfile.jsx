import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'

import style from '../../styles/editProfile'
import navStyle from '../../styles/nav'
import Loader from '../../components/Loader'

const EditProfile = () => {
    const [profile, setProfile] = useState()
    const [dateModal, setDateModal] = useState(false)
    const { userId } = useSelector(state => state.userInfo)
    const navigation = useNavigation()

    useEffect(() => {
        const url = `https://backend-coffee-shop.vercel.app/users/${userId}`;
        axios.get(url).then(res => setProfile(res.data.data[0])).catch(err => console.log(err))
    }, [])

    console.log(profile);

    const changeData = (key, value) => {
        const newProfile = {...profile, [key] : value}
        setProfile(newProfile)
    }

    const updateProfile = async() => {
        try {
            const url = 'https://backend-coffee-shop.vercel.app/'
            
        } catch (error) {
            
        }
    }

    if (profile === undefined) return <Loader.Loader isLoading={true} />
    return (
        <View style={style.mainView}>
            <View style={navStyle.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={navStyle.arrowWrapper}>
                    <Image source={require('../../assets/icons/left.png')} />
                </TouchableOpacity>
                <Text style={navStyle.navText}>Edit Profile</Text>
                <Image source={require('../../assets/icons/left.png')} style={navStyle.hidden} />
            </View>
                <View style={style.mainImageWrapper}>
                    <View style={style.imageWrapper}>
                        <Image style={style.avatar} source={profile.pict_url ? { uri: `${profile.pict_url}` } : require('../../assets/images/default-avatar.jpg')} />
                        <TouchableOpacity style={style.penWrap}>
                            <Image source={require('../../assets/icons/pen.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={style.inputWrap}>
                        <Text style={style.text}>Name :</Text>
                        <TextInput style={style.input} value={profile.display_name} onChangeText={(text) => changeData('display_name', text)}/>
                    </View>
                    <View>
                        <View>
                            <View></View>
                            <Text>Female</Text>
                        </View>
                        <View>
                            <View></View>
                            <Text>Male</Text>
                        </View>
                    </View>
                    <View style={style.inputWrap}>
                        <Text style={style.text}>Email Address :</Text>
                        <TextInput style={style.input} value={profile.email} onChangeText={(text) => changeData('email', text)}/>
                    </View>
                    <View style={style.inputWrap}>
                        <Text style={style.text}>Phone Number :</Text>
                        <TextInput style={style.input} value={profile.phone_number} onChangeText={(text) => changeData('phone_number', text)}/>
                    </View>
                    <View style={style.inputWrap}>
                        <Text style={style.text}>Date of Birth :</Text>
                        <TextInput style={style.input} value={String(profile.birth_date).split('').slice(0, 10).join('')} onPressIn={() => setDateModal(true)} />
                    </View>
                    <View style={style.inputWrap}>
                        <Text style={style.text}>Delivery Address :</Text>
                        <TextInput style={style.input} value={profile.address} onChangeText={(text) => changeData('address', text)}/>
                    </View>
                </View>
                <DatePicker
                    modal
                    mode='date'
                    open={dateModal}
                    date={new Date(profile.birth_date)}
                    onConfirm={(date) => {
                        setDateModal(false)
                        changeData('birth_date', date.toJSON().split('').slice(0, 10).join(''))
                        // console.log(date.toJSON().split('').slice(0, 10).join(''));
                    }}
                    onCancel={() => {
                        setDateModal(false)
                    }}
                />
            <TouchableOpacity style={style.saveBtn}>
                <Text style={style.saveText}>Save and Update</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile