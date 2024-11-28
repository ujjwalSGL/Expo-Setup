import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Input from "./Input";

const Inputs = () => {
  return (
    <View>
      <View style={styles.container}>
        <Input style={styles.Input1} placeholder="Enter your Name  . . . . " />
        <Input
          style={styles.Input2}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          keyboardType="email-address"
          placeholder="Enter your Email . . . . "
        />
        <Input
          style={styles.Input3}
          keyboardType="numeric"
          placeholder="Enter Pincode  . . . . "
        />
        <Input
          style={styles.Input4}
          placeholderTextColor="white"
          placeholder="Enter your Name  . . . . "
        />
        <Input
          style={styles.Input5}
          keyboardType="phone-pad"
          placeholder="Enter Mobile Number . . . . "
        />
        <Input
          style={styles.Input6}
          defaultValue={"Default Text"}
          keyboardType="url"
          placeholder="Enter URL  . . . . "
        />
        <Input
          style={styles.Input7}
          keyboardType="default"
          placeholder="Enter Text  . . . . "
        />
        <Input
          style={styles.Input8}
          secureTextEntry={true}
          placeholder="Enter Password . . . . "
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  Input1: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    paddingInline: 12,
    width: "100%",
    borderWidth: 2,
    borderColor: "#c2f0ee",
    fontSize: 12,
  },
  Input2: {
    backgroundColor: "#525B44",
    marginTop: 20,
    padding: 8,
    paddingInline: 12,
    borderRadius: 12,
    width: "100%",
    borderWidth: 4,
    borderColor: "#5A6C57",
    fontSize: 15,
  },
  Input3: {
    backgroundColor: "#F6FCDF",
    marginTop: 20,
    padding: 6,
    paddingInline: 12,
    borderRadius: 14,
    width: "100%",
    borderWidth: 2,
    borderColor: "#F6FCDF",
    fontSize: 15,
  },
  Input4: {
    backgroundColor: "gray",
    marginTop: 20,
    padding: 6,
    paddingInline: 12,
    borderRadius: 5,
    width: "100%",
    borderWidth: 2,
    borderColor: "#A9A9A9",
  },
  Input5: {
    backgroundColor: "#E5E1DA",
    marginTop: 20,
    padding: 5,
    borderRadius: 5,
    paddingInline: 12,
    width: "100%",
    borderWidth: 2,
    borderColor: "#89A8B2",
  },
  Input6: {
    backgroundColor: "#FFF0D1",
    marginTop: 20,
    padding: 6,
    paddingInline: 12,
    borderRadius: 10,
    width: "100%",
    borderWidth: 3,
    borderColor: "#795757",
  },
  Input7: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 7,
    borderRadius: 4,
    paddingInline: 12,
    width: "100%",
    borderWidth: 3,
    borderColor: "gray",
  },
  Input8: {
    backgroundColor: "#FFDDAE",
    marginTop: 20,
    padding: 8,
    borderRadius: 8,
    paddingInline: 12,
    width: "100%",
    borderWidth: 2,
    borderColor: "#FBFBFB",
  },
});

export default Inputs;
