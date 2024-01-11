import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CartCalendar from "../components/CartCalendar";
import { getHoatDongDangKy } from '../service/hoat-dong-service';
const Calendar = ({ route }) => {

  const [data, setData] = useState([]);
  const jwt = route.params.jwt.accessToken;
 // var randomNumber = route.params.load
 const min = 1
 const max = 9
 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("🚀 ~ Profile ~ route:", randomNumber);
  const fetchData = async () => {
    try {
      console.log("🚀 ~ Profile ~ route:jjjjjjjjjjjj");
      const res = await getHoatDongDangKy(jwt);

      randomNumber = 1
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    
  }, [randomNumber]);

  return (
    <ScrollView>
      {data.map((item) => (
        <CartCalendar key={item.maHoatDong} data={item} />
      ))}

    </ScrollView>
  );
};
export default Calendar;
const styles = StyleSheet.create({});
