import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { auth } from "../firebase";
import React, { useState } from "react";

// PLAN DATA
import { Plans } from "../data/plans";

// import strip fro react native
import { useStripe } from "@stripe/stripe-react-native";
// ICONS
import { MaterialCommunityIcons, Entypo, Feather } from "@expo/vector-icons";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const PlanScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const email = route.params.email;
  const password = route.params.password;
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState([]);
  const data = Plans;
  const stripe = useStripe();
  const subscribe = async () => {
    try {
      const response = await axios.post("http://localhost:8000/payment", {
        amount: price,
      });

      if (response.status != 200) return Alert.alert(response.data.message);
      const clientSecret = response.data.clientSecret;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });

      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            console.log(userCredentials);
            const user = userCredentials.user;
            navigation.navigate("Profile");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Choose the plan that is right for you
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Feather name="check" size={24} color="#E50914" />
              <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
                Recommendations just for you
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Feather name="check" size={24} color="#E50914" />
              <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
                Watch all you want Ad free
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Feather name="check" size={24} color="#E50914" />
              <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
                Cancel your plan anytime
              </Text>
            </View>
            <View style={{ marginTop: 20 }} />
            {data.map((item, index) => (
              <Pressable
                onPress={() => {
                  setSelected(item.name);
                  setPrice(item.price);
                }}
                key={item.id}
                style={
                  selected.includes(item.name)
                    ? {
                        height: 170,
                        borderRadius: 7,
                        borderColor: "#E50914",
                        borderWidth: 2,
                        padding: 15,
                        margin: 10,
                      }
                    : {
                        height: 170,
                        borderRadius: 7,
                        borderColor: "#E50914",
                        borderWidth: 0.5,
                        padding: 15,
                        margin: 10,
                      }
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E50914",
                      padding: 10,
                      width: 120,
                      borderRadius: 7,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Price: ${item.price}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <View>
                    <Text style={{ color: "gray", fontSize: 15 }}>
                      video quality: {item.videoQuality}
                    </Text>
                    <Text
                      style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}
                    >
                      resolution: {item.resolution}
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    style={{ marginRight: 6 }}
                    name="netflix"
                    size={28}
                    color="black"
                  />
                </View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16 }}>
                    Devices you can watch on :{" "}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {item.devices.map((device) => (
                      <Entypo
                        key={device.id}
                        style={{ marginRight: 6 }}
                        name={device.name}
                        size={25}
                        color="#E50914"
                      />
                    ))}
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
        {selected.length > 0 && (
          <Pressable
            onPress={() => subscribe()}
            style={{
              backgroundColor: "#E50914",
              padding: 10,
              height: 85,
              marginTop: -25,
              flexDirection: "row",
              //   alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
                Selected plan : {selected}
              </Text>
            </View>
            {/* <TouchableOpacity> */}
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              PAY $ {price}
            </Text>
            {/* </TouchableOpacity> */}
          </Pressable>
        )}
      </SafeAreaView>
    </>
  );
};

export default PlanScreen;
