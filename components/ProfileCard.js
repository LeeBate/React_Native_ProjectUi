import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileCard(props) {
  const navigation = useNavigation();
  const handlePress = () => {
    if (props.check) {
      if (props.check === "Logout") {
        navigation.navigate("Login");
      } else if (props.check === "Cart") {
        navigation.navigate("Cart");
      }
    }
  };
  return (
    <View style={styles.a}>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <MaterialCommunityIcons
          style={{ color: "#006831" }}
          name={props.icon}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  a: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  }
});
