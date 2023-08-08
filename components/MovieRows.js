import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import movieUrl from "../data/movieUrl";
import MovieRow from "./MovieRow";

const MovieRows = () => {
  const data = movieUrl;
  return (
    <View>
      {data.map((movie) => (
        <MovieRow key={movie.id} {...movie} />
      ))}
    </View>
  );
};

export default MovieRows;

const styles = StyleSheet.create({});
