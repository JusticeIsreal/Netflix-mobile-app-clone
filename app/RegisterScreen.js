import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  // for page routing
  const navigation = useNavigation();

  // fform inpuut values state
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
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
        <View style={{ width: 320, marginTop: 45 }}>
          <Input
            type="email"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Enter Email"
            placeholderTextColor={"white"}
            value={input}
            onChangeText={(text) => setInput(text)}
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
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor={"white"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{
              width: 330,
              padding: 15,
              backgroundColor: "gray",
              borderRadius: 5,
              color: "white",
            }}
          />
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("PlanScreen", {
              email: input,
              password: password,
            })
          }
          style={
            password.length > 4
              ? {
                  width: 300,
                  backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 14,
                }
              : {
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "white",
                  borderWidth: "2",
                  padding: 14,
                }
          }
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "700",
              color: "white",
            }}
          >
            Register
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            width: 300,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 19,
              fontWeight: "600",
              marginTop: 15,
            }}
          >
            Have an account? Login Now
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
