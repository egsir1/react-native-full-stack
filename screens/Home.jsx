import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text>Seoul Korea</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
