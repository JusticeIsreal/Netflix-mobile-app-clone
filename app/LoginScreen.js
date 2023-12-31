import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Input } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = () => {
  // for page routing
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  // fform inpuut values state
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    // setLoading(true);
    const unsubsribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoading(false);
        console.log("no");
      }

      if (user) {
        navigation.navigate("Profile");
        console.log("yes");
      }
    });
    return unsubsribe;
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, input, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        console.log("loged in", user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        {loading ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Loading
            </Text>
            <ActivityIndicator size="large" color={"red"} />
          </View>
        ) : (
          <>
            <View
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
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
              onPress={signIn}
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
                Sign in
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("RegisterScreen")}
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
                New to Netflix? Sign up Now
              </Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
