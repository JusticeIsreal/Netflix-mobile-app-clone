import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import TrendingComponent from "../components/TrendingComponent";
import { ScrollView } from "react-native-gesture-handler";
import MovieRows from "../components/MovieRows";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <Header />
        <TrendingComponent />
        <MovieRows />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
