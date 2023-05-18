import { View, Text, Modal, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import style from '../../styles/logout'

const Logout = () => {
    
    return (
        <View style={style.mainView}>
            <Modal
                visible={false}
                animationType='fade'
                transparent={true}
                style={style.logoutModal}
            >
                <Text style={style.text}>Are you sure to logout?</Text>
                <View style={style.buttonWrapper}>
                    <TouchableOpacity style={style.cancel}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.logout}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        </View>
    )
}

export default Logout