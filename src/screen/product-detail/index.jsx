import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import style from '../../styles/productDetail'
import Loader from '../../components/Loader'
import { cartAction } from '../../redux/slices/cart'


const ProductDetail = () => {
    const { productId } = useSelector(state => state.productId)
    const [data, setData] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const url = `https://backend-coffee-shop.vercel.app/products/${productId}`
        axios.get(url).then(res => setData(res.data?.data[0])).catch(err => console.log(err))
    }, [productId])

    const addCart = () => {
        const cart = {
            name: data?.name,
            pict: data?.pict_url,
            qty: 1,
            price: data?.price,
            productId
        }
        dispatch(cartAction.submitCart(cart))
    }

    if(!data) return <Loader.Loader isLoading={true} />
    
    return (
        <View style={style.mainView}>
            <View style={style.topNav}>
                <Image source={require('../../assets/icons/left.png')} />
                <Image source={require('../../assets/icons/shopping-cart.png')} />
            </View>
            <View style={style.topView}>
                <Image source={{ uri: `${data?.pict_url}` }} style={style.image}/>
                <Text style={style.title}>{data?.name}</Text>
                <Text style={style.price}>IDR {data?.price}</Text>
            </View>
            <View style={style.bottomView}>
                <View>
                    <Text style={style.headText}>Delivery info</Text>
                    <Text style={style.desc}>Delivered only on monday until friday from 1 pm to 7 pm</Text>
                </View>
                <View style={style.descCont}>
                    <Text style={style.headText}>Description</Text>
                    <Text style={style.desc}>{data?.description}</Text>
                </View>
                <TouchableOpacity style={style.button} onPressOut={addCart}>
                    <Text style={style.textButton}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetail