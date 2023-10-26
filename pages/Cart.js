import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import CartCard from '../components/CartCard'

const Cart = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CartCard
                    imageSource={require("../assets/oppo_5g.png")}
                    product={"OPPO A7 5G"}
                    des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                    price={"$100.00"} />
                <CartCard
                    imageSource={require("../assets/oppo_5g.png")}
                    product={"OPPO A7 5G"}
                    des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                    price={"$100.00"} />
            </ScrollView>
            <View style={styles.box}>
                <View style={styles.subTotal}>
                    <Text style={{ fontSize: 15 }}>SubTotal</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$200.00</Text>
                </View>
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text onPress={() => navigation.navigate('Tabs')} style={styles.textCheckout}>Check Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ppBtn} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text onPress={() => navigation.navigate('Tabs')} style={styles.ppText} >Check Out with</Text>
                        <Image style={{ width: 35, height: 35 }} source={require('../assets/paypal.png')} />
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        borderTopWidth: 1,
        borderColor: "grey",
        padding: 18,


    },
    shadow: {
        elevation: 4
    },
    subTotal: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    checkoutBtn: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: '#6257a5',
        marginTop: 10,
        borderRadius: 50
    },
    textCheckout: {
        color: 'white',
        fontSize: 20
    },
    ppBtn: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50


    },
    ppText: {
        fontSize: 20,
        marginRight: 5
    }
})