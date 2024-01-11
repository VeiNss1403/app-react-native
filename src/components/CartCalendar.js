import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
const CartCalendar = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { item: data })}
    >
      <View style={styles.container}>
        <View style={styles.containerRight}>
          <View style={styles.wrapperAvatar}>
            <Image
              style={styles.avatar}
              source={{
                uri: data.hinh,
              }}
            />
          </View>
        </View>
        <View style={{ justifyContent: "space-around" }}>
          <View style={styles.itemText}>
            <Icon name="person" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>{data.tenTaiKhoan}</Text>
          </View>
          <View style={styles.itemText}>
            <Icon name="map-sharp" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>{data.diaChi} </Text>
          </View>
          <View style={styles.itemText}>
            <Icon name="calendar-sharp" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>{data.thoiGianBatDau}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    margin: 10,
    flexDirection: "row",
  },
  containerRight: {
    alignItems: "center",
    padding: 5,
  },
  wrapperAvatar: {
    width: 100,
    height: 100,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
  itemText: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    flexWrap: "wrap",
    maxWidth: "80%",
  },
});

export default CartCalendar;
