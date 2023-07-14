import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Input } from "react-native-elements";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Image
            style={{
              height: 50,
              width: 120,
              marginTop: 20,
            }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
        </View>
        <View style={{ width: 300, marginTop: 45 }}>
          <Input
            type="email"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Enter Email"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              backgroundColor: "gray",
              borderRadius: 5,
              color: "white",
            }}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              backgroundColor: "gray",
              borderRadius: 5,
              color: "white",
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
