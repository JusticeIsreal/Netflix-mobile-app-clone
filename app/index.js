import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import PlanScreen from "./PlanScreen";
import { StripeProvider } from "@stripe/stripe-react-native";
import ProfleScreen from "./ProfleScreen";
import { ProfileContext } from "./Context";
import LoadingScreen from "./LoadingScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <ProfileContext>
        <StripeProvider publishableKey="pk_test_51N61FhLRBfcQsgMsoPdL0Iu9CHIeNrNJuF343HAcAcDm7D8DUe6Oj4Z3mdFifKxMkdrA5Ec4ELICtFwEQqRrjDaW00LMw3GZm9">
          <Stack.Navigator>
            <Stack.Screen
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
            />
            <Stack.Screen
              name="PlanScreen"
              component={PlanScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfleScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Loading"
              component={LoadingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </StripeProvider>
      </ProfileContext>
    </>
  );
}

export default App;
