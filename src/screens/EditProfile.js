import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <View style={styles.profileImageContainer}>
            <ImageBackground
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fuv3_FEi9_7_Ukr9SaQK1nvJhnzNbpazQg&usqp=CAU",
              }}
              style={styles.profileImage}
              imageStyle={styles.profileImageBorderRadius}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          value={""}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Phone"
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Country"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          placeholder="City"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
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
});
