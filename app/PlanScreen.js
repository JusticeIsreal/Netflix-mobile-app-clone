import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
import React from "react";

// PLAN DATA
import { Plans } from "../data/plans";
// ICONS
import { MaterialCommunityIcons, Entypo, Feather } from "@expo/vector-icons";
const PlanScreen = () => {
  const data = Plans;
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Choose the plan that is right for you
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Recommendations just for you
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Watch all you want Ad free
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Cancel your plan anytime
          </Text>
        </View>
        <View style={{ marginTop: 20 }} />
        {data.map((item, index) => (
          <Pressable
            key={item.id}
            style={{
              height: 160,
              borderRadius: 7,
              borderColor: "#E50914",
              borderWidth: 0.5,
              padding: 15,
              margin: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
                <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}>
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
              <Text style={{ fontSize: 16 }}>Devices you can watch on : </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {item.devices.map((device) => (
                  <Entypo
                    style={{ marginRight: 6 }}
                    name={device.name}
                    size={27}
                    color="#E50914"
                  />
                ))}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default PlanScreen;
