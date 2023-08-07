import { createContext, useState } from "react";
import { View, StyleSheet } from "react-native";

const MovieItems = createContext();
const ProfileContext = ({ children }) => {
  const [profile, setProfile] = useState([]);
  return (
    <MovieItems.Provider value={{ profile, setProfile }}>
      {children}
    </MovieItems.Provider>
  );
};

// const styles = StyleSheet.create({});

export { MovieItems, ProfileContext };
