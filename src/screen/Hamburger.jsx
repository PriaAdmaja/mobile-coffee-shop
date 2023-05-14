import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

import hamburgerStyle from '../styles/hamburger'

const Hamburger = () => {
    const profile = useSelector(state => state.userInfo)

    return (
        <View style={hamburgerStyle.hambView}>
            <View>
                <Image />
                <Text>M. Pria Admaja</Text>
                <Text>priaadmaja@gmail.com</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image />
                    <Text>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View></View>
        </View>
    )
}

export default Hamburger;