import React from "react";
import { View, StyleSheet, Text,TouchableOpacity,Image } from "react-native";

export default function HistoryCard({ item }){
    return (
        <TouchableOpacity>
        <View style={styles.itemContainer}>

          <Image source={item.imageSource} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Price: {item.price}</Text>
          </View>
          <Text style={styles.additionalText}>{item.additionalText}</Text>
        </View>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    image: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 16,
    },
    additionalText: {
      fontSize: 14,
    },
  });