import { View, Text, Image, TextInput, Button, ScrollView } from 'react-native'

import style from '../../styles/home'

const Home = () => {
    return (
        <View style={style.homeView}>
            <View style={style.topNavbar}>
                <Image source={require('../../assets/icons/menu.png')}/>
                <Image source={require('../../assets/icons/shopping-cart.png')}/>
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
                        <Text style={style.buttonNav} >Coffee</Text>
                        <Text style={style.buttonNav} >Non coffee</Text>
                        <Text style={style.buttonNav} >Foods</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={style.bottomView}>
                <View style={style.coverSeeMore}>
                    <Text >See more</Text>
                </View>
                <ScrollView  horizontal={true} style={style.scrollView}>
                    <View style={style.cardCover}>
                        <View style={style.productCard}>
                            <Image source={require('../../assets/images/hazelnut-latte.png')} style={style.productImage} />
                            <Text style={style.productName}>Hazelnut Latte</Text>
                            <Text style={style.price}>IDR 25.000</Text>
                        </View>
                        <View style={style.productCard}>
                            <Image source={require('../../assets/images/hazelnut-latte.png')} style={style.productImage} />
                            <Text style={style.productName}>Hazelnut Latte</Text>
                            <Text style={style.price}>IDR 25.000</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Home