import { Component } from "react";

export default abstract class BaseComponent<P = {}, S = {}> extends Component<
  P,
  S
> {
  print(message: any) {
    console.log(message);
  }
}
