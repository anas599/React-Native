import React, { Component } from "react";
import Toast from "react-native-toast-message";

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
  nextHandler = () => {
    const { player } = this.state;
    if (player.length < 2) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error",
        text2: "You need at least 2 players",
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } else {
      this.setState({ stage: 2 });
    }
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          addPlayer: this.addPlayer,
          removePlayer: this.removePlayer,
          nextHandler: this.nextHandler,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export { MyContext, MyProvider };
