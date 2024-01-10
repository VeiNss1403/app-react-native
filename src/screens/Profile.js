import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/Ionicons";

const Profile = ({ route }) => {
  const user = route.params.user;
  console.log("🚀 ~ Profile ~ route:", user);
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
          <Title style={styles.title}>{user.userName}</Title>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Kolkata, India
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name="settings-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
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
    fontSize: 24,
    fontWeight: "bold",
    flexWrap: "wrap",
    maxWidth: "80%",
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
    paddingHorizontal: 20, // Reduce padding to fit within the screen
    alignItems: "center", // Center items vertically
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 16,
  },
});
