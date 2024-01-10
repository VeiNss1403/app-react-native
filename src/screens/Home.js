import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Animated,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import Cart from "../components/Cart";
const user = {
  userName: "Hutech - Khoa Công Nghệ Thông Tin",
  hinh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fuv3_FEi9_7_Ukr9SaQK1nvJhnzNbpazQg&usqp=CAU",
};
const text =
  "Nhằm hỗ trợ Định hướng nghề nghiệp -  Tư vấn chuyên ngành và Triển khai đăng ký chuyên ngành được đầy đủ và trọn vẹn hơn, giải đáp chi tiết hơn giúp các bạn sinh viên chọn  đúng chuyên ngành phù hợp với nguyện vọng bản thân và nhu cầu của thị trường lao động, cơ hội nghề nghiệp sau này.";
const products = [
  {
    id: 4,
    name: "HỘI THẢO TƯ VẤN VÀ TRIỂN KHAI ĐĂNG KÝ CHUYÊN NGÀNH CNTT KHÓA 2021",
    decs: "High-end smartphone",
    price: 900,
    quantity: 7,
    img: "https://file1.hutech.edu.vn/file/editor/homepage1/HOO_4730.jpg",
  },
  {
    id: 5,
    name: "iPhone 13 Pro",
    decs: "Latest iPhone model from Apple",
    price: 1200,
    quantity: 6,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hutech.edu.vn%2Fhomepage%2Ftin-tuc%2Ftin-hutech%2F14597847-sinh-vien-hutech-co-the-nhan-giay-xac-nhan-sinh-vien-theo-nhieu-hinh-thuc&psig=AOvVaw1XFbAeKyHFLooFCeZo6iOt&ust=1704777014406000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDuw7aDzYMDFQAAAAAdAAAAABAv",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    decs: "Premium ultrabook from Dell",
    price: 1300,
    quantity: 5,
    img: "https://www.example.com/dell-xps-13.jpg",
  },
  {
    id: 7,
    name: "Microsoft Surface ",
    decs: "Sleek and powerful",
    price: 1100,
    quantity: 8,
    img: "https://www.example.com/surface-laptop-4.jpg",
  },
  {
    id: 8,
    name: "OnePlus 9",
    decs: "Flagship phone from OnePlus",
    price: 950,
    quantity: 9,
    img: "https://www.example.com/oneplus-9.jpg",
  },
  {
    id: 9,
    name: "MacBook Air",
    decs: "Thin and lightweight laptop",
    price: 1000,
    quantity: 10,
    img: "https://www.example.com/macbook-air.jpg",
  },
  {
    id: 10,
    name: "Google Pixel 6",
    decs: "Googles latest smartphone",
    price: 800,
    quantity: 7,
    img: "https://www.example.com/google-pixel-6.jpg",
  },
  {
    id: 11,
    name: "HP Spectre x360",
    decs: "Convertible laptop with a sleek design",
    price: 1400,
    quantity: 6,
    img: "https://www.example.com/hp-spectre-x360.jpg",
  },
  {
    id: 12,
    name: "iPad Pro",
    decs: "Professional-grade tablet from Apple",
    price: 1200,
    quantity: 9,
    img: "https://www.example.com/ipad-pro.jpg",
  },
  {
    id: 13,
    name: "Asus ROG Phone 5",
    decs: "Gaming smartphone ",
    price: 1100,
    quantity: 8,
    img: "https://www.example.com/asus-rog-phone-5.jpg",
  },
];
const Home = ({route, navigation }) => {
  // const item = route.params.jwt;
  const jwt = route.params.jwt;
   console.log('hone',jwt)
  return (
    <ScrollView style={styles.container}                                                                  >
      {products.map((item) => (
        <Cart
          key={item.id}
          text={text}
          data={item}
          user={user}
          onPress={() => navigation.navigate("Detail", { item, user })}
        />
      ))}
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
