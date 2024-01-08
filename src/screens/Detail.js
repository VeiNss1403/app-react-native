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

const Detail = ({ route, navigation }) => {
  const item = route.params.item;
  const user = route.params.user;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image src={item.img} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>$ {item.price}</Text>
        </View>
      </View>
      <View style={styles.paymentButtonContainer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 5,
  },
  backButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
  },
  itemContainer: {
    width: 270,
    borderRadius: 40,
    marginHorizontal: 5,
  },
  actionButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionButtonIcon: {
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: 10,
    borderRadius: 25,
    marginRight: 4,
    marginTop: 4,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.6,
  },
  image: {
    width: 210,
    height: 210,
  },
  detailsContainer: {
    marginLeft: 4,
    marginTop: 4,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 2,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 2,
    marginTop: 2,
  },
  paymentButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 7,
  },
  paymentButton: {
    flex: 1,
    backgroundColor: "orange",
    opacity: 0.8,
    shadowColor: "orange",
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    padding: 10,
    borderRadius: 20,
  },
  paymentButtonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default Detail;
