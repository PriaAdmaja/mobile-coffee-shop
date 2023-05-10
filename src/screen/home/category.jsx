import {View, Text} from 'react-native'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Category = () => {
    const {category} = useSelector(state => state.category)
    const [isLoading, setIsLoading] = useState(false)
    const [limit, setLimit] = useState(10)
    const [product, setProduct] = useState([])
    useEffect(() => {
        let getData = true
        if(getData) {
            setIsLoading(true)
            const url = `https://backend-coffee-shop.vercel.app/products?category=${category}&limit=${limit}`
            axios.get(url).then(res =>setProduct(res.data) ).catch(err => console.log(err)).finally(() => setIsLoading(false))
        }
        return () => {getData = false}
    }, [category])
    
    return (
        <View>
            <Text></Text>
            <View>

            </View>
        </View>
    )
}

export default Category