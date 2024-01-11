import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { loginUser } from "../service/auth-service";

const Login = ({ navigation }) => {

  const [error, setError] = React.useState('');
  const [maSo, setMaSo] = React.useState('');
  const [matKhau, setMatKhau] = React.useState('');
  const handleLogin = async () => {
    try {
      if (!maSo || !matKhau) {
        setError("Vui lòng nhập đầy đủ thông tin.");
        return;
      }

      const params = {
        maSo: maSo,
        matKhau: matKhau,
      };
   //   var jwt =''
      await loginUser(params).then((res)=>{
        
        navigation.navigate("BottomTabNavigator",{jwt:res});
      }).catch(()=>{
        setError("Thất bại");
      });

      // if (jwt.accessToken) {
      //   navigation.navigate("BottomTabNavigator",{jwt:jwt});
      // } else {
      //   setError("Thất bại");
      // }
    } catch (error) {
      setError("Đã xảy ra lỗi");
    }
  };
  return (
    <View style={styles.background}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        source={require("../../assets/images/background.png")}
      />

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/light.png")}
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/light.png")}
          style={[styles.image, styles.opacity]}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Đăng Nhập</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mã số sinh viên"
              placeholderTextColor={"white"}
              value={maSo}
              onChangeText={(text) => setMaSo(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor={"white"}
              secureTextEntry
              value={matKhau}
              onChangeText={(text) => setMatKhau(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            {error && <Text>{error}</Text>}
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
              <Text style={styles.buttonText}> Đăng Nhập</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.linkContainer}>
            <Text>Chưa có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <Text style={styles.linkText}>Đăng ký</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  image: {
    height: 225,
    width: 90,
  },
  opacity: {
    opacity: 0.75,
  },
  formContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  form: {
    flex: 2,
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 3,
  },
  inputContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 20,
    width: "100%",
    marginBottom: 3,
  },
  input: {
    color: "white",
    height: 40,
    padding: 5,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 3,
  },
  button: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  linkText: {
    color: "#00bfff",
  },
});

export default Login;
