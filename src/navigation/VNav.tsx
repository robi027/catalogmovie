import { StackNavigationProp } from "@react-navigation/stack";
import { Routes, RootStackParamsList } from "./MainNavigation";

type NavigationProp = StackNavigationProp<RootStackParamsList, Routes>;

export default class VNav {
  static popular(navigation: NavigationProp) {
    navigation.navigate(Routes.POPULAR);
  }
}
