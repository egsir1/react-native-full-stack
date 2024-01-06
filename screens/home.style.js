import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/constants";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginVertical: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});

export default styles;
