import { View, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import style from '../../styles/category'
import navStyle from '../../styles/nav'
import Loader from '../../components/Loader'
import { productIdAction } from '../../redux/slices/productId'
import { filterAction } from '../../redux/slices/filter'

const Category = () => {
    const { category, sort } = useSelector(state => state.filter)
    const [isLoading, setIsLoading] = useState(false)
    const [showFilter, setShowFIlter] = useState(false)
    const [limit, setLimit] = useState(10)
    const [product, setProduct] = useState([])
    const [sortMdl, setSortMdl] = useState(sort)
    const [search, setSearch] = useState()
    const [categoryMdl, setCategoryMdl] = useState(category)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const saveFilter = async () => {
        dispatch(filterAction.inputCategory(categoryMdl))
        dispatch(filterAction.inputSort(sortMdl))
        setShowFIlter(false)
        try {
            setIsLoading(true)
            let url = `https://backend-coffee-shop.vercel.app/products`
            categoryMdl === null ? url : url += `?category=${categoryMdl}`
            categoryMdl && sortMdl ? url += `&sortBy=${sortMdl}` : sortMdl ? url += `?sort=${sortMdl}` : url += ``
            const result = await axios.get(url)
            setProduct(result.data)
        } catch (error) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
        
    }

    const resetFilter = async() => {
        setCategoryMdl(null)
        setSortMdl(null)
        dispatch(filterAction.resetFilter())
        setShowFIlter(false)
        try {
            setIsLoading(true)
            const url = `https://backend-coffee-shop.vercel.app/products`
            const result = await axios.get(url)
            setProduct(result.data)
            
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        let getData = true
        if (getData) {
            setIsLoading(true)
            let url = `https://backend-coffee-shop.vercel.app/products`
            category === null ? url : url += `?category=${category}`
            category && sort ? url += `&sortBy=${sort}` : sort ? url += `?sort=${sort}` : url += ``
            axios.get(url).then(res => setProduct(res.data)).catch(err => console.log(err)).finally(() => setIsLoading(false))
        }
        return () => { getData = false }
    }, [])

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
            <TouchableOpacity style={style.filterBtn} onPress={() => setShowFIlter(true)}>
                <Text style={style.filterText}>Filter</Text>
            </TouchableOpacity>
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
            <Modal visible={showFilter} animationType='slide' transparent={true}>
                <View style={style.modalView}>
                    <Text style={style.modalSubtitle}>Sort :</Text>
                    <View style={style.filterWrap}>
                        <TouchableOpacity style={sortMdl === null ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl(null)}>
                            <Text>A-Z</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ sortMdl === 'nameDesc' ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl('nameDesc')}>
                            <Text>Z-A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={sortMdl === 'cheapest' ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl('cheapest')}>
                            <Text>Price Asc</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={sortMdl === 'priciest' ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl('priciest')}>
                            <Text>Price Desc</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={style.modalSubtitle}>Category :</Text>
                    <View style={style.filterWrap}>
                    <TouchableOpacity style={categoryMdl === null ? style.filterBtnActive : style.filterBtn} onPress={() =>  setCategoryMdl(null)}>
                            <Text>All menu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={categoryMdl === 'coffee' ? style.filterBtnActive : style.filterBtn} onPress={() =>  setCategoryMdl('coffee')}>
                            <Text>Coffee</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={categoryMdl === 'non coffee' ? style.filterBtnActive : style.filterBtn} onPress={() => setCategoryMdl('non coffee')}>
                            <Text>Non coffee</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={categoryMdl === 'foods' ? style.filterBtnActive : style.filterBtn} onPress={() => setCategoryMdl('foods')}>
                            <Text>Foods</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={style.selectFilterBtn} onPress={saveFilter}>
                        <Text style={style.selectFilterText}>Select Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.cancelBtn} onPress={resetFilter}>
                        <Text style={style.cancelText}>Reset Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.modalCLose} onPress={() => setShowFIlter(false)}>
                        <Text style={style.textClose}>&#10060;</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        </View>
    )
}

export default Category