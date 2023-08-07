import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// icon
import { Ionicons } from "@expo/vector-icons";

const ProfleScreen = () => {
    const profiles = [
      {
        id: "0",
        name: "Justice",
      },
      {
        id: "1",
        name: "Peter",
      },
      {
        id: "2",
        name: "Sarah",
      },
      {
        id: "3",
        name: "Jennifer",
      },
    ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginLeft: 6,
          }}
        >
          Profiles and more
        </Text>
      </Pressable>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
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
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
          Who's Watching ?
              </Text>
              
      </View>
    </SafeAreaView>
  );
};

export default ProfleScreen;

const styles = StyleSheet.create({});
