import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

const EditProfile = () => {
    return (
        <View>
            <View>
                <Image />
                <Image />
            </View>
            <View>
                <View>
                    <Text>Name :</Text>
                    <TextInput />
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
                <View>
                    <Text>Email Address :</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Phone Number :</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Date of Birth :</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Delivery Address :</Text>
                    <TextInput />
                </View>
            </View>
            <TouchableOpacity>
                <Text>Save and Update</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile