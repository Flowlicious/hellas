import React, { Component } from "react";

export default class Hellas extends Component {
  public state: any;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      world: "world"
    };
  }

  render() {
    return <div>Hello {this.state.world}</div>;
  }
}
