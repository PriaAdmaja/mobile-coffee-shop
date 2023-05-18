import { View, Text, TouchableOpacity, Image } from 'react-native'

import style from '../../styles/history'
import navStyle from '../../styles/nav'

const History = () => {
    return (
        <View style={style.mainView}>
            <View style={navStyle.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={navStyle.arrowWrapper}>
                    <Image source={require('../../assets/icons/left.png')} />
                </TouchableOpacity>
                <Image source={require('../../assets/icons/left.png')} style={navStyle.hidden} />
            </View>
            <Text style={style.mainTitle}>Order History</Text>
            <View style={style.swipe}>
                <Image source={require('../../assets/icons/iwwa_swipe.png')} />
                <Text>Swipe on item to delete</Text>
            </View>
        </View>
    )
}

export default History