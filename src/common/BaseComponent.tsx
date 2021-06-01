import { Component } from "react";
import { Prop, Routes } from "../navigation/MainNavigation";

export default abstract class BaseComponent<T extends Routes> extends Component<
  Prop<T>,
  {}
> {}
