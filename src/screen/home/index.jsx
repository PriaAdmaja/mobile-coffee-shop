import { View, Text, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Loader from '../../components/Loader'
import style from '../../styles/home'
import { useDispatch } from 'react-redux'
import { productIdAction } from '../../redux/slices/productId'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        console.log(category);
        let getData = true
        if (getData) {
            setIsLoading(true)

            let url = `https://backend-coffee-shop.vercel.app/products?limit=5`
            if (category) {
                url = `https://backend-coffee-shop.vercel.app/products?category=${category}&limit=5`
            }
            axios.get(url).then(res => setProduct(res.data)).catch(err => console.log(err)).finally(() => setIsLoading(false))
        }
        return () => { getData = false }
    }, [category])

    const viewDetail = (id) => {
        dispatch(productIdAction.inputProductId(id))
        navigation.navigate('product-detail')
    }

    if (!product) return <Loader.Loader isLoading={isLoading} />

    return (
        <View style={style.homeView}>
            <View style={style.topNavbar}>
                <Image source={require('../../assets/icons/menu.png')} />
                <TouchableOpacity onPressOut={() => navigation.navigate('cart')}>
                    <Image source={require('../../assets/icons/shopping-cart.png')} />
                </TouchableOpacity>
            </View>
            <View style={style.upView}>
                <Text style={style.homeTitle}>A good coffee is a good day</Text>
                <View style={style.searchBar}>
                    <Image style={style.searchIcon} source={require('../../assets/icons/search.png')} />
                    <TextInput placeholder='Search' />
                </View>
                <ScrollView horizontal={true}>
                    <View style={style.buttonGroup}>
                        <Text style={style.buttonNav} >Favorite</Text>
                        <Text style={style.buttonNav} >Promo</Text>
                        <Text style={category === 'coffee' ? style.buttonNavActive : style.buttonNav} onPress={() => setCategory('coffee')}>Coffee</Text>
                        <Text style={category === 'non coffee' ? style.buttonNavActive : style.buttonNav} onPress={() => setCategory('non coffee')}>Non coffee</Text>
                        <Text style={category === 'foods' ? style.buttonNavActive : style.buttonNav} onPress={() => setCategory('foods')}>Foods</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={style.bottomView}>
                <View style={style.coverSeeMore}>
                    <Text >See more</Text>
                </View>
                {isLoading ? <Loader.Loader isLoading={isLoading} /> :
                    <ScrollView horizontal={true} style={style.scrollView}>
                        <View style={style.cardCover}>
                            {product.data?.map((data) => {
                                return (
                                    <TouchableOpacity style={style.productCard} key={data.id} onLongPress={() => viewDetail(data.id)}>
                                        <View style={style.productImage}>
                                            <Image source={{ uri: `${data.pict_url}` }} style={style.image} />
                                        </View>
                                        <View style={style.text}>
                                            <Text style={style.productName}>{data.name}</Text>
                                            <Text style={style.price}>IDR {data.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </ScrollView>
                }
            </View>
        </View>
    )
}

export default Home