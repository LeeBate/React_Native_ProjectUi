import React, { useEffect, useState } from "react";
import ProdCard from "../components/ProductCard"; // Import your ProdCard component
import SkeletonLoader from "../components/SkeletonLoader";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Feather";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  RefreshControl,
  FlatList,
  TextInput,
} from "react-native";
import { Dimensions } from "react-native";

export default function HomeScreen({ navigation }) {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState([]);
  const [tempProduct, setTempProduct] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  const cardWidth = Dimensions.get("window").width * 0.8;
  const skeWidth = cardWidth - 32;

  const screenWidth = parseInt(Dimensions.get("window").width);

  const tempArr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  useEffect(() => {
    setIsFetching(true);
    fetchDataFromAPI();
    // console.log("screenWidth=", screenWidth);
  }, []);

  const data = [
    { id: "1", name: "All" },
    { id: "2", name: "Oppo" },
    { id: "3", name: "Vivo" },
    { id: "4", name: "Poco" },
    { id: "5", name: "Xiaomi" },
    { id: "6", name: "OnePlus" },
    { id: "7", name: "Redmi" },
    { id: "8", name: "Sumsung" },
    { id: "9", name: "Motorola" },
  ];
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.item,
        item.name == "All" ? { backgroundColor: "#6257a5", borderColor: '#6257a5' } : {},
      ]}
    >
      <Text
        style={[
          styles.itemText,
          item.name != "All" ? { color: "black" } : { color: "white" },
        ]}
      >
        {item.name}
      </Text>
    </View>
  );

  const _onRefresh = () => {
    // console.log("_onRefresh");
    setIsFetching(true);
    fetchDataFromAPI();
  };

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(
        "https://api.steinhq.com/v1/storages/650d274661eb47055d9e97bc/AppleProduct"
      );
      const data = await response.json();

      const shuffledData = data.sort(() => Math.random() - 0.5);
      setTempProduct(shuffledData);
      setProducts(shuffledData);

      setIsFetching(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsFetching(false);
    }
  };

  return (
    <View style={{ backgroundColor: "#f7f7f7", height: "100%" }}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <View style={[{ flex: 1 }]}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Icon2 name="menu" padding={2} size={50} color="black" />
          
            
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                style={styles.pfp}
                source={require("../assets/pfp.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
      
        

        <View
          style={[
            { flex: 1, alignItems: "center" },
          ]}
        >
          <View style={styles.searchEL}>
            <Icon
              name="search"
              size={25}
              color="#555"
              style={{ marginLeft: 7, borderColor: "#6257a5"}}
            />
            <TextInput
              style={{ flex: 1, width: 100, marginLeft: 10, height: 50 ,color:"#6257a5" ,borderColor:"#6257a5"}}
              placeholder="Search Oppo..."
              value={searchValue}
              onChangeText={(search) => handleSearchInputChange(search)}
            />
          </View>
          
        </View>
        <View style={{flex:1.5, backgroundColor:'red'}}>
            <Image
              source={require("../assets/iphone.jpg")} 
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "stretch",
   
              }}
            />
          </View>
        <View style={[{ flex: 1, alignItems: "center", maxHeight: 50, }]}>
          <FlatList
            paddingVertical={0}
            paddingHorizontal={10}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.name.toString()}
          />
        </View>
      </View>
      <View style={styles.container}>
        {!isFetching ? (
          products.length > 0 &&
            (searchValue == "" || searchValue == undefined) ? (
            <FlatList
              alignSelf="center"
              refreshControl={
                <RefreshControl
                  refreshing={isFetching}
                  onRefresh={_onRefresh}
                  tintColor="#0088CC"
                />
              }
              data={products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { item })}
                >
                  <ProdCard
                    screenWidth={screenWidth}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    sold={item.sold}
                    discount={item.discount}
                  />
                </TouchableOpacity>
              )}
              numColumns={2}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                No Result Found!
              </Text>
            </View>
          )
        ) : (
          <FlatList
            alignSelf="center"
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={_onRefresh}
                tintColor="#0088CC"
              />
            }
            data={tempArr}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.card,
                  {
                    width: screenWidth / 2 - 15,
                    maxHeight: 300,
                    height: 253,
                    margin: 4,
                    padding: 7,
                    borderRadius: 5,
                    alignSelf: "center",
                  },
                ]}
              >
                <SkeletonLoader
                  height={152}
                  width={160}
                  style={{ borderRadius: 8, marginTop: 2 }}
                />
                <SkeletonLoader
                  height={18}
                  width={160}
                  style={{ borderRadius: 8, marginTop: 8 }}
                />
                <SkeletonLoader
                  height={12}
                  width={100}
                  style={{ borderRadius: 8, marginTop: 8 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <SkeletonLoader
                    height={12}
                    width={60}
                    style={{ borderRadius: 8, marginTop: 8 }}
                  />
                  <SkeletonLoader
                    height={12}
                    width={70}
                    style={{ borderRadius: 8, marginTop: 8 }}
                  />
                </View>
              </View>
            )}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    paddingHorizontal: 0,
    marginHorizontal: 5,
    /*   marginTop: Constant.statusBarHeight */
    /*   padding: 10, */
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    borderRadius: 8,
  },
  aqua: {
    backgroundColor: 'aqua',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  pfp: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1

  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderColor: 'black',
    minHeight: 32,
    minWidth: 50,
    width: 'auto',
    height: '60%',
    marginVertical: 7,
    marginRight: 32,
  },
  itemText: {

    fontSize: 16,
  },
  searchEL: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '95%',
    borderWidth: 1,
    borderBlockColor: 'rgba(0, 0, 0, 0.2)',
    padding: 0,
    borderRadius: 50,
    borderColor: 'rgba(0, 0, 0, 1)'
  },
  banner: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    borderRadius: 7,
  }
});
