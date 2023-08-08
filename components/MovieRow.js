import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";

const MovieRow = ({ name, url }) => {
  const API_KEY = "b93a64480573ce5248c28b200d79d029";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log(error));
    };
    movieData();
  }, []);
  return (
    <View>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          color: "white",
          marginTop: 10,
        }}
      >
        {name}
      </Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {movies?.map((movie, id) => (
          <Pressable key={movie.id} style={{ margin: 10 }}>
            <Image
              style={{
                width: 105,
                height: 152,
                borderRadius: 6,
                resizeMode: "cover",
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieRow;

const styles = StyleSheet.create({});
