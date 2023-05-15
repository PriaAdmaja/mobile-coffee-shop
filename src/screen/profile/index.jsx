import { View, Text, Image, TouchableOpacity } from "react-native"

const Profile = () => {
    return (
        <View>
            <Text>My Profile</Text>
            <View>
                <View>
                    <Text>Your Information</Text>
                    <Text>edit</Text>
                </View>
                <View>
                    <Image />
                    <View>
                        <Text>M. Pria Admaja</Text>
                        <Text>priaadmaja@gmai.com</Text>
                        <Text>082228316811</Text>
                        <Text>Landungsari Dau Malang</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text>Order History</Text>
                    <Image />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Edit Password</Text>
                    <Image />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>FAQ</Text>
                    <Image />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Help</Text>
                    <Image />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text>Save Change</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile