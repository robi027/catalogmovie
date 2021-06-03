import { StackNavigationProp } from "@react-navigation/stack";
import { Routes, RootStackParamsList } from "./MainNavigation";

type NavigationProp = StackNavigationProp<RootStackParamsList, Routes>;

export default class VNav {
  static detail(navigation: NavigationProp) {
    navigation.navigate(Routes.DETAIL);
  }

  static main(navigation: NavigationProp) {
    navigation.replace(Routes.BOTTOM_NAVIGATION);
  }
}
