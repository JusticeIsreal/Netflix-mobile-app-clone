import { View, Text, SafeAreaView } from "react-native";
import React from "react";

// ICONS
import { Feather } from "@expo/vector-icons";
const PlanScreen = () => {
  return (
    <SafeAreaView>
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
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Watch all you want Ad free
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Watch all you want Ad free
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Watch all you want Ad free
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlanScreen;
