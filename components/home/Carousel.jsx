import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../assets/constants";

const Carousel = () => {
  const slides = [
    "https://www.wallpaperup.com/uploads/wallpapers/2013/03/29/66596/65df7c05c2cbfe9041cff5b14ef6b404.jpg",
    "https://www.maisonsparallele.fr/wp-content/uploads/2017/05/genial-dcoration-intrieure-photos-pour-vous-donner-des-ides-de-also-idee-decoration-interieure.jpg ",
    "https://i.pinimg.com/originals/7c/ca/32/7cca320be730fbdbfd6501c5d7d52d78.png",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        autoplay
        circleLoop
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
