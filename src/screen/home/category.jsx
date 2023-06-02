import { View, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { API_URL } from '@env'

import style from '../../styles/category'
import navStyle from '../../styles/nav'
import Loader from '../../components/Loader'
import { productIdAction } from '../../redux/slices/productId'
import { filterAction } from '../../redux/slices/filter'

const Category = () => {
    const { category, sort } = useSelector(state => state.filter)
    const [isLoading, setIsLoading] = useState(false)
    const [showFilter, setShowFIlter] = useState(false)
    const [page, setPage] = useState(1)
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
            let url = `${API_URL}/products`
            // if (categoryMdl !== null) {
            //     url += `?category=${categoryMdl}`
            // }
            // categoryMdl !== null && sortMdl !== null ? url += `&sortBy=${sortMdl}&page=1` : sortMdl !== null ?  url += `?sort=${sortMdl}&page=1` : categoryMdl !== null ?  url += `&page=1` : url += `?page=1`
            const query = []
            if(categoryMdl) {
                query.push(`category=${categoryMdl}`)
            }
            if(sortMdl) {
                query.push(`sortBy=${sortMdl}`)
            }
            if(page) {
                query.push(`page=${page}`)
            }
            if(query.length > 0) {
                url += `?${query.join('&')}`
            }
            console.log(url);
            const result = await axios.get(url)
            setProduct(result.data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }

    }

    const resetFilter = async () => {
        setCategoryMdl(null)
        setSortMdl(null)
        setPage(1)
        dispatch(filterAction.resetFilter())
        setShowFIlter(false)
        try {
            setIsLoading(true)
            let url = `${API_URL}/products?page=1`
            const result = await axios.get(url)
            setProduct(result.data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    // const nextPage = async () => {
    //     setPage(prev => prev + 1)
    //     let currentPage = page + 1
    //     try {
    //         let url = `${API_URL}/products`
    //         const query = []
    //         if(categoryMdl) {
    //             query.push(`category=${categoryMdl}`)
    //         }
    //         if(sortMdl) {
    //             query.push(`sortBy=${sortMdl}`)
    //         }
    //         if(page) {
    //             query.push(`page=${page}`)
    //         }
    //         if(query.length > 0) {
    //             url += `?${query.join('&')}`
    //         }
    //         const result = await axios.get(url)
    //         const prevData = [...product]
    //         const newData = prevData.concat(result.data.data)
    //         setProduct(newData)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        let getData = true
        if (getData) {
            setIsLoading(true)
            let url = `${API_URL}/products`
            if (category !== null) {
                url += `?category=${category}`
            }
            category !== null && sort !== null ? url += `&sortBy=${sort}&page=1` : sort !== null ?  url += `?sort=${sort}&page=1` : category !== null ?  url += `&page=1` : url += `?page=1`
            axios.get(url).then(res => setProduct(res.data.data)).catch(err => console.log(err.response.data.msg)).finally(() => setIsLoading(false))
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
                    data={product}
                    numColumns={2}
                    columnWrapperStyle={style.flatList}
                    // onEndReachedThreshold={2}
                    // onEndReached={nextPage}
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
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', flex: 1}}>
                    <View style={style.modalView}>
                        <Text style={style.modalSubtitle}>Sort :</Text>
                        <View style={style.filterWrap}>
                            <TouchableOpacity style={sortMdl === null ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl(null)}>
                                <Text style={{color: '#000000'}}>A-Z</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={sortMdl === 'nameDesc' ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl('nameDesc')}>
                                <Text style={{color: '#000000'}}>Z-A</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={sortMdl === 'cheapest' ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl('cheapest')}>
                                <Text style={{color: '#000000'}}>Price Asc</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={sortMdl === 'priciest' ? style.filterBtnActive : style.filterBtn} onPress={() => setSortMdl('priciest')}>
                                <Text style={{color: '#000000'}}>Price Desc</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={style.modalSubtitle}>Category :</Text>
                        <View style={style.filterWrap}>
                            <TouchableOpacity style={categoryMdl === null ? style.filterBtnActive : style.filterBtn} onPress={() => setCategoryMdl(null)}>
                                <Text style={{color: '#000000'}}>All menu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={categoryMdl === 'coffee' ? style.filterBtnActive : style.filterBtn} onPress={() => setCategoryMdl('coffee')}>
                                <Text style={{color: '#000000'}}>Coffee</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={categoryMdl === 'non coffee' ? style.filterBtnActive : style.filterBtn} onPress={() => setCategoryMdl('non coffee')}>
                                <Text style={{color: '#000000'}}>Non coffee</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={categoryMdl === 'foods' ? style.filterBtnActive : style.filterBtn} onPress={() => setCategoryMdl('foods')}>
                                <Text style={{color: '#000000'}}>Foods</Text>
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
                </View>
            </Modal>
        </View>
    )
}

export default Category