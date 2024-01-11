import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { getUserInfo, putUser } from '../service/auth-service';


const EditProfileScreen = ({ route }) => {
  const [gioiTinh, setGioiTinh] = useState();
  const [sdt, setSdt ] = useState();
  const [diaChi, setDiaChi] = useState();
  const [ngaySinh, setNgaySinh] = useState();
  const [email, setEmail] = useState();
  const [maSo, setMaSo] = useState();
  const [hinh, setHinh] = useState();

  const [user, setUser] = useState({});
  const [hoTen, setHoten] = useState();
  const jwt = route.params.jwt.accessToken;
  const navigation = useNavigation();
  const fetchUser = async () => {
    try {
      const res = await getUserInfo(jwt);
      setUser(res);
      setHoten(res.hoTen)
      setDiaChi(res.diaChi)
      setSdt(res.sdt)
      setEmail(res.email)
      setGioiTinh(res.gioiTinh)
      setNgaySinh(res.ngaySinh)
      setMaSo(res.maSo)
      setHinh(res.hinh)
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit=()=>{
    const dataSubmit={
      "maSo": maSo,
      "hoTen": hoTen,
      "gioiTinh": gioiTinh,
      "ngaySinh": ngaySinh,
      "email": email,
      "sdt": sdt,
      "diaChi": diaChi,
      "hinh": hinh
    }
    
    submitData(dataSubmit)
  }
  const submitData = async (data) => {
    try {
      console.log(maSo,jwt, data)
      await putUser(maSo,jwt, data);
      const min=1
      const max= 100
      var randomNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(randomNumber)
      navigation.navigate("Thông tin cá nhân",{jwt:jwt,load:randomNumber})
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <View style={styles.profileImageContainer}>
            <ImageBackground
              source={{
                uri: user.hinh,
              }}
              style={styles.profileImage}
              imageStyle={styles.profileImageBorderRadius}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.text}>Mã số:</Text>
        <TextInput
          placeholder="Họ tên"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={maSo}
          editable={false}

        />
        <Text style={styles.text}>Họ tên:</Text>

        <TextInput
          placeholder="Họ tên"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={hoTen}
          onChangeText={(text) => setHoten(text)}
       //   editable={false}

        />
        {/* <RadioButton> 
          
        </RadioButton> */}
        <Text style={styles.text}>Giới tính:</Text>

        <TextInput
          placeholder="Giới tính"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={gioiTinh}
          onChangeText={(text) => setGioiTinh(text)}
        />
        <Text style={styles.text}>Số điện thoại:</Text>
        <TextInput
          placeholder="Số điện thoại"
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          
          style={styles.textInput}
          value={sdt}
          onChangeText={(text) => setSdt(text)}
        />
        <Text style={styles.text}>Email:</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
         <Text style={styles.text}>Ngày sinh:</Text>
        <TextInput
          placeholder="Ngày sinh"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={ngaySinh}
          onChangeText={(text) => setNgaySinh(text)}
        />
        <Text style={styles.text}>Địa chỉ:</Text>

        <TextInput
          placeholder="Địa chỉ"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={diaChi}
          onChangeText={(text) => setDiaChi(text)}
        />
        <Text style={styles.text}>Link hình:</Text>

        <TextInput
          placeholder="Link hình"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={hinh}
          onChangeText={(text) => setHinh(text)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => {handleSubmit() }}>
        <Text style={styles.submitButtonText}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    height: 100,
    width: 100,
  },
  profileImageBorderRadius: {
    borderRadius: 15,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#f2f2f2",
    paddingBottom: 10,
  },
  textInput: {
    paddingLeft: 10,
    color: "#05375a",
    marginBottom: 10,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "bold",
  },
});
