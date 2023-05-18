import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import style from '../../styles/category'
import navStyle from '../../styles/nav'
import Loader from '../../components/Loader'
import { productIdAction } from '../../redux/slices/productId'

const Category = () => {
    const { category } = useSelector(state => state.category)
    const [isLoading, setIsLoading] = useState(false)
    const [limit, setLimit] = useState(10)
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        let getData = true
        if (getData) {
            setIsLoading(true)
            if (!category) {
                const url = `https://backend-coffee-shop.vercel.app/products?limit=${limit}`
                axios.get(url).then(res => setProduct(res.data)).catch(err => console.log(err)).finally(() => setIsLoading(false))
                return
            }
            const url = `https://backend-coffee-shop.vercel.app/products?category=${category}&limit=${limit}`
            axios.get(url).then(res => setProduct(res.data)).catch(err => console.log(err)).finally(() => setIsLoading(false))
        }
        return () => { getData = false }
    }, [category])
    const title = category === 'coffee' ? 'Coffee' : category === 'non coffee' ? 'Non Coffee' : category === 'foods' ? 'Foods' : 'All Menu'

    const viewDetail = (id) => {
        dispatch(productIdAction.inputProductId(id))
        navigation.navigate('product-detail')
    }
    return (
        <View style={style.mainView}>
            <View style={navStyle.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={navStyle.arrowWrapper}>
                    <Image source={require('../../assets/icons/left.png')} />
                </TouchableOpacity>
                <Image source={require('../../assets/icons/left.png')} style={navStyle.hidden} />
            </View>
            <Text style={style.title}>{title}</Text>
            {isLoading ? <Loader.Loader isLoading={true} />
                : <FlatList
                    data={product?.data}
                    numColumns={2}
                    columnWrapperStyle={style.flatList}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={style.productCard} key={item.id} onPress={() => viewDetail(item.id)}>
                                <View style={style.productImage}>
                                    <Image source={{ uri: `${item.pict_url}` }} style={style.image} />
                                </View>
                                <View style={style.text}>
                                    <Text style={style.productName}>{item.name}</Text>
                                    <Text style={style.price}>IDR {Number(item.price).toLocaleString()}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            }
        </View>
    )
}

export default Category