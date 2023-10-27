import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function CartCard(props) {
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={props.imageSource}
          style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{props.product}</Text>
        <Text style={styles.productDes}>{props.des}</Text>
        <Text style={styles.productPrice}>{props.price}</Text>
      </View>
      <View style={styles.amount}>
        <TouchableOpacity onPress={decreaseAmount} style={styles.amountButton}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountText}>{amount}</Text>
        <TouchableOpacity onPress={increaseAmount} style={styles.amountButton}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Center vertically
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: "contain"
  },
  textContainer: {
    flex: 2,
    alignItems: "left",
    padding: 5,
    // Take up remaining space
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left"
  },
  productDes: {
    fontSize: 10,
    color: "grey",
    marginTop: 5
  },
  productPrice: {
    fontSize: 15,
    textAlign: "left",
    marginTop: 5

  },
  amount: {
    flex: 1, // Takes up 1/3 of the available space
    alignItems: 'center',
    flexDirection: 'row', // Arrange buttons horizontally
    justifyContent: 'flex-end',
    marginTop: 15
  },
  image_container: {
    flex: 1, // Takes up 1/3 of the available space


  },
  amountText: {
    fontSize: 16,
    marginHorizontal: 5,

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  amountButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
});