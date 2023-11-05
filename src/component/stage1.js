import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { ListItem, Text } from "react-native-elements";
import { Input, Icon, Button } from "@rneui/themed";
export const Stage1 = () => {
  return (
    <>
      <Formik
        initialValues={{ player: "" }}
        validationSchema={yup
          .object({ player: yup.string().required() })
          .shape({
            player: yup.string().min(3, "more than 3").max(10, "less than 10"),
          })
          .required("Required")}
        onSubmit={(values, { resetForm }) => {
          alert("خره عليــــك " + values.player);
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
              />
              <Button
                title="Submit"
                type="solid"
                // onPress={() => alert("خره عليك")}
                onPress={handleSubmit}
                buttonStyle={{ marginHorizontal: 20, marginTop: 20 }}
                errors={errors}
              />
            </>
            <Text>Who is the LOOSER!</Text>
          </>
        )}
      </Formik>
    </>
  );
};
export default Stage1;
