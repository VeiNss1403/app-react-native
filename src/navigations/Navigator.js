import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Chat from "../screens/Chat";
import Login from "../screens/Login";
import Calendar from "../screens/Calendar";
import Icon from "@expo/vector-icons/Ionicons";
import Profile from "../screens/Profile";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import EditProfile from "../screens/EditProfile";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ route }) => {
  const item = route.params;
  console.log(item)
  const [isModalVisible, setModalVisible] = useState(false);

  const min = 1
  const max = 100
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const getNum = () => {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('get', randomNumber)
    //return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const navigation = useNavigation();
  let user = {
    userName: "Hutech - Khoa Công Nghệ Thông Tin",
    hinh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fuv3_FEi9_7_Ukr9SaQK1nvJhnzNbpazQg&usqp=CAU",
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000119",
        //  tabBarInactiveTintColor: "#dfdfdf",
        tabBarStyle: {
          height: 65,
          justifyContent: "center",
          backgroundColor: "#fff",
          elevation: 2,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Danh sách sự kiện"
        component={Home}
        initialParams={{ jwt: item }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={32} />
          ),
        }}
      />
      
      <Tab.Screen
        
        name="Sự kiện đã đăng ký"
        component={Calendar}
        initialParams={{ jwt: item.jwt, load:  Math.floor(Math.random() * (max - min + 1)) + min }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-calendar" color={color} size={32} />
          ),
          //  tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarOptions: "",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-chatbubbles" color={color} size={32} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Thông tin cá nhân"
        component={Profile}
        initialParams={{ jwt: item.jwt.accessToken }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                style={{ alignItems: "center" }}
                backgroundColor={"#fff"}
                color="#000"
                onPress={() => navigation.navigate("EditProfile", { jwt: item.jwt, user: {} })}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="Login"
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: "Chi tiết sự kiện",
          headerShown: true,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: "",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
