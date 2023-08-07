import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 1000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
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
  );
};

export default LoadingScreen;
