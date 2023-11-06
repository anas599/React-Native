import React, { Component } from "react";
const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    stage: 1,
    player: [],
    result: "",
  };
  addPlayer = (player) => {
    this.setState((prevState) => {
      return {
        player: [...prevState.player, player],
      };
    });
  };
  removePlayer = (player) => {
    let newPlayer = this.state.player;
    newPlayer.splice(newPlayer.indexOf(player), 1);
    this.setState({ player: newPlayer });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          addPlayer: this.addPlayer,
          removePlayer: this.removePlayer,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export { MyContext, MyProvider };
