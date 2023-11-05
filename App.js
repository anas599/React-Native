import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { MyContext } from "./src/component/context";
import Stage1 from "./src/component/stage1";
import Stage2 from "./src/component/stage2";
function App() {
  const myContext = useContext(MyContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Open up1</Text>
        <Text>Open up2</Text>
        <Text>Open up3</Text>
        <Text>Below this</Text>
        {myContext.state.stage === 1 ? <Stage1 /> : <Stage2 />}

        <Text>Above this</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
