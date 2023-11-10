import React, { useContext, Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyContext } from "./context";
export const Stage2 = () => {
  const myContext = useContext(MyContext);

  return (
    <View>
      <Text>the looser is two</Text>
      <Text>{myContext.state.result}</Text>
    </View>
  );
};
export default Stage2;
