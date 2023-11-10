import React, { useContext, Component } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { ListItem, Text } from "react-native-elements";
import { Input, Icon, Button } from "@rneui/themed";
import { MyContext } from "./context";
export const Stage1 = () => {
  const myContext = useContext(MyContext);

  return (
    <>
      <Formik
        initialValues={{ player: "" }}
        validationSchema={yup
          .object({ player: yup.string().required() })
          .shape({
            player: yup
              .string()
              .min(3, "more than 3")
              .max(10, "less than 10")
              .required("fill in the name idiot"),
          })
          .required("Required")}
        onSubmit={(values, { resetForm }) => {
          myContext.addPlayer(values.player);
          resetForm();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <>
              <Input
                placeholder="Write a player name"
                leftIcon={{ type: "font-awesome", name: "user" }}
                inputContainerStyle={{ marginHorizontal: 20, marginTop: 20 }}
                onChangeText={handleChange("player")}
                onBlur={handleBlur("player")}
                value={values.player}
                renderErrorMessage={errors.player && touched.player}
                errorMessage={errors.player}
                errorStyle={{ color: "red" }}
              />
              <Button
                title="Submit"
                type="solid"
                onPress={handleSubmit}
                buttonStyle={styles.button}
              />
            </>
            <Text>Who is the LOOSER!</Text>
          </>
        )}
      </Formik>
      <View style={{ padding: 20, width: "100%" }}>
        {myContext.state.player && myContext.state.player?.length > 0 ? (
          <>
            {myContext.state.player.map((player, i) => (
              <ListItem
                key={i}
                bottomDivider
                onLongPress={() => myContext.removePlayer(player)}
              >
                <ListItem.Chevron />
                <ListItem.Title>{player}</ListItem.Title>
              </ListItem>
            ))}
            <Button
              title="Choose the looser"
              type="solid"
              onPress={() => myContext.nextHandler()}
              buttonStyle={styles.button}
            />
          </>
        ) : (
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "whitesmoke",
            }}
          >
            No players to display
          </Text>
        )}
      </View>{" "}
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "red",
    borderStartEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
export default Stage1;
