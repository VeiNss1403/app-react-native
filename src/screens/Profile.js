import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from "react-native";
import { Alert, StyleSheet, Pressable } from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/Ionicons";
import { getUserInfo } from '../service/auth-service';
import { useNavigation } from '@react-navigation/core';

const Profile = ({ route }) => {
  const [user, setUser] = useState({});
  const jwt = route.params.jwt;
  const navigation = useNavigation();
  var randomNumber =route.params.load
    // Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(randomNumber)
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
 
  const fetchUser = async () => {
    try {
      const res = await getUserInfo(jwt);
      setUser(res);
    //  console.log('oke')
      randomNumber=2
      return res
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser();
    randomNumber=2
  }, [randomNumber]);


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image
            style={{ marginRight: 10 }}
            source={{
              uri: user.hinh,
            }}
            size={80}
          />
          <View style={{ flexDirection: "column" }}>
            <Title style={styles.title}>{user.hoTen}</Title>
            <Title style={styles.caption}>{user.maSo}</Title>
          </View>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          {user.diaChi !== null ? (<Text style={{ color: "#777777", marginLeft: 20 }}>
            {user.diaChi}
          </Text>) : (<Text style={{ color: "#777777", marginLeft: 20 }}>
            --
          </Text>)}
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          {user.sdt !== null ? (<Text style={{ color: "#777777", marginLeft: 20 }}>
            {user.sdt}
          </Text>) : (<Text style={{ color: "#777777", marginLeft: 20 }}>
            --
          </Text>)}
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          {user.email !== null ? (<Text style={{ color: "#777777", marginLeft: 20 }}>
            {user.email}
          </Text>) : (<Text style={{ color: "#777777", marginLeft: 20 }}>
            --
          </Text>)}
        </View>
        <View style={styles.row}>
          <Icon2 name="male-female" color="#777777" size={20} />
          {user.gioiTinh !== null ? (<Text style={{ color: "#777777", marginLeft: 20 }}>
            {user.gioiTinh}
          </Text>) : (<Text style={{ color: "#777777", marginLeft: 20 }}>
            --
          </Text>)}
        </View>
        <View style={styles.row}>
          <Icon2 name="calendar-sharp" color="#777777" size={20} />
          {user.ngaySinh !== null ? (<Text style={{ color: "#777777", marginLeft: 20 }}>
            {user.ngaySinh}
          </Text>) : (<Text style={{ color: "#777777", marginLeft: 20 }}>
            --
          </Text>)}
        </View>
      </View>

      <View style={styles.menuWrapper}>
        {/* <TouchableRipple onPress={() => { toggleModal() }}>
          <View style={styles.menuItem}>
            <Icon2 name="settings" color="green" size={25} />
            <Text style={styles.menuItemText}>Chỉnh sửa</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon2 name="checkbox-sharp" color="green" size={25} />
            <Text style={styles.menuItemText}>Sự kiện đã tham gia</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {navigation.navigate("Login")}}>
          <View style={styles.menuItem}>
            <Icon2 name="log-out" color="red" size={25} />
            <Text style={styles.menuItemText}>Đăng xuất</Text>
          </View>
        </TouchableRipple>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}

          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!isModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!isModalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  userInfoSection: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 16,
  },
  caption: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "500",
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});