import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Detail = ({ route,navigation }) => {

    const data = [
        { id: '1', color: '#bbb5a9' },
        { id: '2', color: '#4d5464' },
        { id: '3', color: '#f3f2ed' },
        { id: '4', color: '#515254' },
    ];


    const [liked, setLiked] = useState(false);
    const [selected, setSelected] = useState(data[0].name);
    const [priceFactor, setPriceFactor] = useState(4);

    const generateRandomNumber = () => {
        const min = 50;
        const max = 1000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }

    const ChangeQuality = (name) => {
        setSelected(name)
        if (name == "Master") {
            setPriceFactor(4)
        }
        else if (name == "Lossless") {
            setPriceFactor(3)
        }
        else if (name == "Hi-Fi") {
            setPriceFactor(2)
        }
        else if (name == "CD-Quality") {
            setPriceFactor(1)
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.item, { backgroundColor: item.color }]} onPress={() => ChangeQuality(item.name)}>
        </TouchableOpacity>
    );
    const { item } = route.params;
    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity  >
                        <Icon name="share-social-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey', marginLeft: 5 }}>({generateRandomNumber()})</Text>
                    </View>
                </View>
                <Text style={styles.price}>${item.price}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <View style={[{ alignItems: 'center', }]}>
                        <FlatList
                            paddingVertical={10}
                            data={data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}

                        />
                    </View></View>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                    <Text>{" " + " " + item.desc}</Text>
                </ScrollView>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => setLiked(!liked)}>
                            <Icon name={liked ? "heart" : "heart-outline"} size={35} color={liked ? "red" : "black"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCart} >
                            <Icon style={{ paddingHorizontal: 5 }} name="cart-outline" size={25} color="white" />
                            <Text onPress={() => navigation.navigate('Cart')} style={styles.btnCartText}>
                                Add to cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450,
        margin: 0,
        /*    alignSelf: 'center', */
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    singer: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {

        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'grey',
        /*  backgroundColor: '#000', */
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderColor: 'black',
        width: 50,
        height: 50,
        marginVertical: 7,
        marginRight: 20,
    },
    itemText: {

        fontSize: 16,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        padding: 2,
        bottom: 0,
        paddingLeft: 10,
        alignItems: 'center',
    },
    btnCart: {
        backgroundColor: '#6257a5',
        height: 50,
        width: '87%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    btnCartText: {
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

})