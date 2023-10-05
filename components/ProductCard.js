//product card component
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Button,
} from "react-native";

export default function ProdCard(props, { navigation }) {
  let isDiscounted =
    props.discount > 0 && props.discount != undefined ? true : false;

  console.log(props.sold);

  function calDiscountedPrice(oldPrice, discountPercentage) {
    oldPrice = oldPrice.replace(/,/g, "");
    oldPrice = parseInt(oldPrice);
    discountPercentage = parseInt(discountPercentage);

    if (!isDiscounted) {
      discountPercentage = 0;
    }

    if (oldPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
      throw new Error(
        "Invalid input. Price and discount percentage must be non-negative, and the discount percentage must be between 0 and 100."
      );
    }

    const discountAmount = (oldPrice * discountPercentage) / 100;
    let discountedPrice = oldPrice - discountAmount;

    discountedPrice = parseInt(discountedPrice);

    return discountedPrice.toLocaleString();
  }

  function formatMoney(money) {
    money = parseInt(money);
    if (money >= 1000000) {
      return (money / 1000000).toFixed(1) + "m";
    } else if (money >= 1000) {
      return (money / 1000).toFixed(1) + "k";
    } else if (money >= 100000) {
      return (money / 1000).toFixed(1) + "k";
    } else {
      return money.toString();
    }
  }

  const shortenString = (str) => {
    console.log(str);
    if (str.length <= 50) {
      return str;
    } else {
      return str.slice(0, 50) + "...";
    }
  };

  return (
    <View style={[styles.container, { width: props.screenWidth / 2 - 15 }]}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={{ position: "absolute", bottom: 15 }}>
        <Text numberOfLines={1} style={styles.title}>
          {shortenString(props.title)}{" "}
        </Text>

        
        <View
          style={{
            marginTop: 5,
            width: 150,
            flex: 1,
            justifyContent: isDiscounted ? "flex-end" : "flex-end",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
          style={{
            width: 150,
            flex: 1,
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.price}>
            ฿{props.price}
          </Text>
          
        </View>
          <Text style={{ color: "black", fontSize: 11 }}>
            {" "}
            {formatMoney(props.sold)} ขายแล้ว
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    padding: 7,
    borderRadius: 5,
    position: "relative",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    borderRadius: 8,
  },
  price: {
    fontSize: 16,
    color: "red",
  },
  discount: {
    fontSize: 12,
    color: "red",
    backgroundColor: "#ffdede",
  },
  image: {
    position: "absolute",
    top: 18,
    width: 150,
    height: 145,
    resizeMode: "contain",
    maxHeight: 145,
    /* backgroundColor: '#55578c', */
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  cart_btn: {
    /*   backgroundColor: '#fff',  */ // Button background color
    paddingVertical: 4,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginTop: 5,
    position: "absolute",
    borderRadius: 10, // Adjust the border radius as needed
  },
  buttonText: {
    color: "#000",
  },
  mall_label: {
    position: "absolute",
    width: 42,
    height: 18,
    resizeMode: "contain",
    top: 5,
    left: -7,
    zIndex: 1,
  },
});
