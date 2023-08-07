import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { MovieItems } from "../app/Context";

const TrendingComponent = () => {
  const navigation = useNavigation();
  const { profile, setProfile } = useContext(MovieItems);
  const API_KEY = "b93a64480573ce5248c28b200d79d029";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log(error));
    };
    movieData();
  }, []);
  console.log(movies);
  return (
    <View>
      <Text style={{ color: "white" }}>Trending Component</Text>
      <ScrollView>
        {movies?.slice(0, 10).map((movie, id) => {
          <Pressable key={id}>
            <Text style={{ color: "white" }}>h</Text>
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
          </Pressable>;
        })}
      </ScrollView>
    </View>
  );
};

export default TrendingComponent;

const styles = StyleSheet.create({});
