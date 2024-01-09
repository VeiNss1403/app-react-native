import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Setting from "../screens/Setting";
import Chat from "../screens/Chat";
import Login from "../screens/Login";
import Calendar from "../screens/Calendar";
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000119",
        tabBarInactiveTintColor: "#dfdfdf",
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
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Thời gian sự kiện"
        component={Calendar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-calendar" color={color} size={32} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarOptions: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-chatbubbles" color={color} size={32} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarOptions: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={color} size={32} />
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
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
