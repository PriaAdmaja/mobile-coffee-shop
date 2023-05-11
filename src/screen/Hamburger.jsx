import { View, Image, Text } from 'react-native'
import { useSelector } from 'react-redux'

import hamburgerStyle from '../styles/hamburger'

const Hamburger = () => {
    const profile = useSelector(state => state.userInfo)

    return (
        <View style={hamburgerStyle.hambView}>
            <View>
                <Image />
            </View>
            <View></View>
            <View></View>
        </View>
    )
}

export default Hamburger;