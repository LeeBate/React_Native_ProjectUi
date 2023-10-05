import React from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileCard(props){

    const navigation = useNavigation();
    const handlePress = () => {
        if (props.check) {
          if (props.check === "Logout") {

            navigation.navigate("Login"); 
          } 
          else if(props.check === "Cart"){
            navigation.navigate("Cart"); 
          }
        }
      };
    return (
        <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name={props.icon} size={90}/>
            <Text style={{fontSize:15}}>{props.name}</Text>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:135,
        height:135,
        borderRadius:30,
        margin:15,
        alignItems:"center",
        justifyContent:"center"
    }
})