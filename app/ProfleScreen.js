import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// icon
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { MovieItems } from "./Context";
// import { FlatList } from "react-native-gesture-handler";

const ProfleScreen = () => {
  const { profile, setProfile } = useContext(MovieItems);
  console.log(profile);
  const [numColumns, setNumColumns] = React.useState(2);
  const navigation = useNavigation();
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

  const signOutUser = () => {
    signOut(
      auth
        .then(() => {
          navigation.replace("Login");
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
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
        <FlatList
          numColumns={numColumns}
          data={profiles}
          renderItem={({ item }) => {
            return (
              // Add the return keyword here
              <Pressable
                onPress={() => {
                  setProfile(item);
                  navigation.navigate("Loading");
                }}
                key={item.id}
                style={{ marginHorizontal: 10, padding: 20, marginTop: 20 }}
              >
                <View
                  style={{
                    width: 110,
                    height: 110,
                    backgroundColor: "red",
                    borderRadius: 7,
                  }}
                ></View>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 15,
                    fontWeight: "500",
                    marginTop: 10,
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
      <Pressable onPress={() => signOutUser()}>
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontSize: 16,
            fontWeight: 500,
            marginTop: 10,
          }}
        >
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfleScreen;

const styles = StyleSheet.create({});
