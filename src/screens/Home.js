import React, { useEffect, useState } from 'react';import {
  View,
  Text,
  Image,
  ImageBackground,
  Animated,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl ,
  useWindowDimensions 
} from "react-native";
import Colors from "../constants/Colors";
import Cart from "../components/Cart";
import RenderHtml from 'react-native-render-html';
import { getAllHoatDong } from "../service/hoat-dong-service";

const userd = {
  userName: "Hutech - Khoa Công Nghệ Thông Tin",
  hinh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fuv3_FEi9_7_Ukr9SaQK1nvJhnzNbpazQg&usqp=CAU",
};

//    2080600830
const Home = ({ route }) => {
  const jwt = route.params.jwt.jwt.accessToken;
  //console.log('home', jwt);

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const res = await getAllHoatDong(jwt);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData().finally(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {data.map((item) => (
        <Cart
          key={item.maHoatDong}
          data={item}
          jwt={jwt}
       
        />
      ))}
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({});
