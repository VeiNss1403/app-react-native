import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const Detail = ({ route }) => {
  const item = route.params.item;
  const user = route.params.user;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <Image src={item.hinh} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.itemName}>{item.tenHoatDong}</Text>
          <View style={styles.separator} />
          <View style={styles.itemText}>
            <Icon name="person" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>Người tổ chức: {item.tenTaiKhoan}</Text>
          </View>
          <View style={styles.itemText}>
            <Icon name="map-sharp" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>Địa chỉ: {item.diaChi}</Text>
          </View>
          <View style={styles.itemText}>
            <Icon name="calendar-sharp" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>
              Thời gian bắt đầu: {item.thoiGianBatDau}
            </Text>
          </View>
          <View style={styles.itemText}>
            <Icon name="calendar-sharp" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>
              Thời gian kết thúc: {item.thoiGianKetThuc}
            </Text>
          </View>
          <View style={styles.itemText}>
            <Icon
              name="calculator-sharp"
              size={18}
              style={{ paddingRight: 5 }}
            />
            <Text style={styles.text}>Số lượng : {item.soLuongSinhVien}</Text>
          </View>
          <View style={styles.itemText}>
            <Icon
              name="calculator-sharp"
              size={18}
              style={{ paddingRight: 5 }}
            />
            <Text style={styles.text}>
              Số lượng đã đăng ký: {item.soLuongDangKy}
            </Text>
          </View>
          <View style={styles.itemText}>
            <Icon name="document" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>Yêu Cầu: {item.yeuCau}</Text>
          </View>
          <View style={styles.itemText}>
            <Icon name="contract-sharp" size={18} style={{ paddingRight: 5 }} />
            <Text style={styles.text}>Trạng thái: {item.trangThai}</Text>
          </View>
        </View>
        <View style={styles.btnDangKyContainer}>
          <TouchableOpacity>
            <Text style={styles.btnDangKy}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  imageContainer: {},
  image: {
    width: 350,
    height: 250,
    alignSelf: "center",
    resizeMode: "stretch",
    borderRadius: 10,
  },
  detailsContainer: {
    marginHorizontal: 10,
    justifyContent: "space-around",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textShadowColor: "white",
    textShadowRadius: 2,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 2,
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  btnDangKyContainer: {
    backgroundColor: "#A1EEBD",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  btnDangKy: {
    fontSize: 18,
    color: "#fff",
  },
  itemText: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default Detail;
