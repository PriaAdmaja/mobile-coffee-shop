import { View, Text, TouchableOpacity, Image, TextInput, Modal, ScrollView } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useState } from 'react'

import style from '../../styles/addProduct'
import navStyle from '../../styles/nav'

const AddProduct = () => {
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState();
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [categoryId, setCategoryId] = useState()

    const openCamera = async () => {
        const options = {
            mediaType: 'photo',
            quality: 1
        }
        await launchCamera(options, res => {
            if (res.didCancel) {
                return console.log('Cancel get picture');
            }
            if (res.errorCode) {
                return console.log('Error get picture');
            }
            setImage(res.assets[0])
        })
        setShowModal(false)
    }

    const imagePicker = async () => {
        const options = {
            mediaType: 'photo',
            quality: 1
        }
        await launchImageLibrary(options, res => {
            if (res.didCancel) {
                return console.log('Cancel get picture');
            }
            if (res.errorCode) {
                return console.log('Error get picture');
            }
            setImage(res.assets[0])
        })
        setShowModal(false)
    }
    return (
        <View style={style.mainView}>
            <View style={navStyle.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={navStyle.arrowWrapper}>
                    <Image source={require('../../assets/icons/left.png')} />
                </TouchableOpacity>
                <Text style={navStyle.navText}>New Product</Text>
                <Image source={require('../../assets/icons/left.png')} style={navStyle.hidden} />
            </View>
            <ScrollView style={style.content}>
                <View style={style.imageContentWrap}>
                    <Image source={image ? { uri: image.uri } : require('../../assets/images/default-image.jpg')} style={style.image} />
                    <TouchableOpacity style={style.addPictBtn} onPress={() => setShowModal(true)}>
                        <Text style={style.addPictText}>Add pictures</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Type product name' style={style.inputInside} onChangeText={text => setName(text)} />
                    <TextInput placeholder='Type product price' keyboardType="numeric" style={style.inputInside} onChangeText={text => setPrice(text)} />
                </View>
                <Text style={style.subTitle}>Description</Text>
                <TextInput placeholder='Describe your product' style={style.inputOutside} onChangeText={text => setDescription(text)} />
                <Text style={style.subTitle}>Category</Text>
                <View style={style.categoryWrap}>
                    <TouchableOpacity style={style.choiceWrap} onPress={() => setCategoryId(1)}>
                        <View
                            style={categoryId === 1 ? style.outDotActive : style.outDotInactive}>
                            <View style={categoryId === 1 ? style.dotActive : style.dotInactive}>
                            </View>
                        </View>
                        <Text style={style.categoryText}>
                            Coffee
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.choiceWrap} onPress={() => setCategoryId(2)}>
                        <View
                            style={categoryId === 2 ? style.outDotActive : style.outDotInactive}>
                            <View style={categoryId === 2 ? style.dotActive : style.dotInactive}>
                            </View>
                        </View>
                        <Text style={style.categoryText}>
                            Non coffee
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.choiceWrap} onPress={() => setCategoryId(3)}>
                        <View
                            style={categoryId === 3 ? style.outDotActive : style.outDotInactive}>
                            <View style={categoryId === 3 ? style.dotActive : style.dotInactive}>
                            </View>
                        </View>
                        <Text style={style.categoryText}>
                            Foods
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Save Product</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal animationType='fade' visible={showModal} transparent={true}>
                <View style={style.centeredView}>
                    <View style={style.modal}>
                        <TouchableOpacity style={style.imageBtn} onPress={openCamera}>
                            <Text style={style.imageText}>Take a Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.imageBtn} onPress={imagePicker}>
                            <Text style={style.imageText}>Open Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.saveBtn} onPress={() => setShowModal(false)}>
                            <Text style={style.saveText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AddProduct