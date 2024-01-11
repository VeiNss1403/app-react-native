import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import RenderHtml from 'react-native-render-html';

const Cart = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const source = { html: data.moTa };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapperAvatar}>
          <Image style={styles.avatar} source={{ uri: data.hinhTaiKhoan }} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username} numberOfLines={1} ellipsizeMode="tail">
            {data.tenTaiKhoan}
          </Text>

        </View>
        <View style={styles.buttonContainer}>
          {data.dangKy == true ? (
            <TouchableOpacity style={styles.buttonRegister} >
              <Text style={styles.buttonText}>Đã đăng ký</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonRegister} onPress={""}>
              <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>
          )}

        </View>
      </View>
      <View>
        <Text style={styles.postText} onPress={() =>
          navigation.navigate("Detail", { item: data })
        }>
          {data.tenHoatDong}
        </Text>

        <View style={styles.itemText}>
          <Icon name="location" size={18} style={{ paddingRight: 5 }} />
          <Text style={styles.text}>: {data.diaChi}</Text>
        </View>
        <View style={styles.itemText}>
          <Icon name="calendar-sharp" size={18} style={{ paddingRight: 5 }} />
          <Text style={styles.text}>
            : {data.thoiGianBatDau}
          </Text>
        </View>
        

          <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}

          /><Text style={styles.postText} numberOfLines={isExpanded ? undefined : 5}>
        </Text>
        {/* <Text style={styles.postText} numberOfLines={isExpanded ? undefined : 5} >
          {data.moTa}
        </Text> */}
        {data.moTa !== "" ? (
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => setIsExpanded(!isExpanded)}
          >
            <Text style={styles.readMoreButtonText}>Xem thêm</Text>
          </TouchableOpacity>
        ) : (
          ""
        )}
        <View style={styles.postImageContainer}>
          <Image
            style={styles.postImage}
            source={{
              uri: data.hinh,
            }}
          />
        </View>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonDetail}
            onPress={() =>
              navigation.navigate("Detail", { item: data, user: user })
            }
          >
            <Text style={styles.buttonText}>Chi tiết</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={""}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};
const tagsStyles = {
  p: {
    fontSize: 16,
    // Các thuộc tính CSS khác nếu cần
  },
  // Thêm các thẻ khác nếu cần
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    margin: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  wrapperAvatar: {
    width: 50,
    height: 50,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 25,
    borderColor: "#000",
    borderWidth: 1,
  },
  userInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    overflow: "hidden",
  },
  postText: {
    fontSize: 18,
    marginBottom: 12,
    overflow: "hidden",
    flex: 3,
  },
  readMoreButton: {
    backgroundColor: "#fff",
    height: 30,
    width: 100,
    borderRadius: 8,
  },
  readMoreButtonText: {
    color: "#333",
  },
  postImageContainer: { flex: 3, paddingBottom: 10 },
  postImage: {
    width: 310,
    height: 200,
    alignSelf: "center",
    resizeMode: "stretch",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  buttonDetail: {
    backgroundColor: "#7BD3EA",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonRegister: {
    backgroundColor: "#A1EEBD",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  itemText: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Cart;
