import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profile_img}
          source={require("../assets/pfp.jpg")}
        />
        <Text style={styles.username}>John Doe</Text>

        <TouchableOpacity style={styles.edit_btn}>
          <Text style={styles.edit_btn_txt}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rectangle}>

        <View style={styles.btn_container}>
          <ProfileCard icon={"cart"} name={"Cart"} check={'Cart'} />
          <ProfileCard icon={"heart"} name={"Favorite"} />
          <ProfileCard icon={"cog"} name={"Setting"} />
          <ProfileCard icon={"logout"} name={"Logout"} check={'Logout'} />
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6257a5',
  },
  rectangle: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#F0F0F0",
    zIndex: 1,
    top: "10%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center", // Center children horizontally
    paddingTop: 20, // Add padding at the top
  },
  profile_img: {
    height: 100,
    width: 100,
    borderRadius: 150,
    alignSelf: "center",
  },
  header: {
    marginTop: 60,
    alignItems: "center",
  },
  username: {
    alignSelf: "center",
    marginTop: 20,
    color: "white",
    fontSize: 25,
  },
  edit_btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 30,
    width: 200
  },
  edit_btn_txt: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  btn_container: {
    marginTop: 30,
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"

  },
});