import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './pages/Home';
import DetailScreen from './pages/Detail';
import ProfileScreen from './pages/Profile';
import LoginScreen from './pages/Login';
import CartScreen from './pages/Cart';

import CustomBackBtn from './components/CustomBackBtn';

const App = () => {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator()



  function TabNavigator() {
    return (
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        }, tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    );
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ header: () => <CustomBackBtn />, headerTitleAlign: 'center', headerTransparent: true, title: "" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Cart" component={CartScreen} options={{title:'Cart(2)', headerTitleAlign:'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App