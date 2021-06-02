import { StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

export default StyleSheet.create({
  t12Grey: {
    fontSize: 14,
    color: colors.grey,
  },
  t14: {
    fontSize: 14,
  },
  t14Bold: {
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  t16Bold: {
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  t20Grey: {
    fontSize: 20,
    color: colors.grey,
  },
  t20Bold: {
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  t32Bold: {
    fontSize: 32,
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
