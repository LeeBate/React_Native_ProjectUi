import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import ProfileCard from "../components/ProfileCard";
import HistoryCard from "../components/HistoryCard";

const Profile = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      imageSource: require('../assets/oppo_5g.png'),
      name: 'Product 1',
      price: '$10.99',
      additionalText: 'View',
    },
    {
      id: 2,
      imageSource: require('../assets/oppo_5g.png'),
      name: 'Product 2',
      price: '$15.99',
      additionalText: 'View',
    },
    {
      id: 3,
      imageSource: require('../assets/oppo_5g.png'),
      name: 'Product 2',
      price: '$15.99',
      additionalText: 'View',
    },
    {
      id: 4,
      imageSource: require('../assets/oppo_5g.png'),
      name: 'Product 2',
      price: '$15.99',
      additionalText: 'View',
    },
    {
      id: 5,
      imageSource: require('../assets/oppo_5g.png'),
      name: 'Product 2',
      price: '$15.99',
      additionalText: 'View',
    },
    {
      id: 6,
      imageSource: require('../assets/oppo_5g.png'),
      name: 'Product 2',
      price: '$15.99',
      additionalText: 'View',
    },
    // เพิ่มรายการอื่น ๆ ตามต้องการ
  ];

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.header}>
          <Image
            source={require("../assets/pfp.jpg")}
            style={styles.profile_img}
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Digitech SUT</Text>
            <Text style={styles.email}>Digitech@sut.ac.th</Text>
          </View>
          <Icon name="cog-outline" size={45} color={"white"} style={styles.icon} />
        </View>
        <View style={styles.btn_container}>
          <ProfileCard check="" icon="heart" />
          <ProfileCard check="" icon="bell" />
          <ProfileCard check="Cart" icon="cart" />
          <ProfileCard check="Logout" icon="logout" />
        </View>
        <View style={styles.notify}>
        <Text style={styles.notifyTxt}>History</Text>
        <Text style={styles.viewTxt}>View All</Text>
      </View>
     
      </View>
      <View style={styles.rectangleWhite}>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <HistoryCard item={item} />}
    />
      </View>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
    position: "relative",
  },
  rectangle: {
    position: "absolute",
    top: 0,
    height: "30%",
    width: "100%",
    backgroundColor: "#6257a5",
    zIndex: -1,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  profile_img: {
    height: 80,
    width: 80,
    borderRadius: 150,
    marginTop: 30,
    left: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  userInfo: { 
    flex: 1,
    marginLeft: 40 ,
    marginTop:30
  },
  icon:{
    marginRight:30,
    marginTop:30
  },
    
    
  username: {
    color: "white",
    fontSize: 25,
  },
  email: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
  btn_container: {
    marginTop: 30,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  notify: {
    marginTop:5,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  notifyTxt:{
    marginLeft:30,
    fontSize:20,
    fontWeight:'bold'
  },
  viewTxt:{
    marginRight:30,
    fontSize:15,
    color:'grey'
  },
  rectangleWhite: {
    overflow: 'hidden',
    backgroundColor: 'white', // สีขาวเป็นพื้นหลัง
    width: '85%', // ขยายกล่องสี่เหลี่ยมให้เต็มความกว้าง
    height: 400,
    borderRadius:30,
    alignSelf:"center",
    elevation:5,
    marginTop:315
  },
});