import { StyleSheet } from "react-native";
import fonts from "./fonts";

export default StyleSheet.create({
  t14: {
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
