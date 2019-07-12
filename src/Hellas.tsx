import React, { Component } from "react";
import * as microsoftTeams from "@microsoft/teams-js";

export default class Hellas extends Component {
  public state: any;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      world: "world"
    };

    microsoftTeams.getContext(context => {
      this.setState({
        ...this.state,
        currentUser: context.userPrincipalName
      });
    });
  }

  render() {
    return (
      <div>
        Hello {this.state.world} name: {this.state.currentUser}
      </div>
    );
  }
}
