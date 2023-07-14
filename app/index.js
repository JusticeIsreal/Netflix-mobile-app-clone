import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import PlanScreen from "./PlanScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="PlanScreen"
        component={PlanScreen}
        options={{
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
