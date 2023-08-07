import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import TrendingComponent from "../components/TrendingComponent";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <TrendingComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
