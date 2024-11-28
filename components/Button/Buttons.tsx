import { View, Alert, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Primary"
        onPress={() => Alert.alert("Primary Button Pressed")}
        style={styles.primary}
      />
      <Button
        title="Secondary"
        onPress={() => Alert.alert("Secondary Button Pressed")}
        style={styles.secondary}
      />
      <Button
        title="Success"
        onPress={() => Alert.alert("Success Button Pressed")}
        style={styles.success}
      />
      <Button
        title="Danger"
        onPress={() => Alert.alert("Danger Button Pressed")}
        style={styles.danger}
      />
      <Button
        title="Warning"
        onPress={() => Alert.alert("Warning Button Pressed")}
        style={styles.warning}
      />
      <Button
        title="Info"
        onPress={() => Alert.alert("Info Button Pressed")}
        style={styles.info}
      />
      <Button
        title="Light"
        onPress={() => Alert.alert("Light Button Pressed")}
        style={styles.light}
      />
      <Button
        title="Dark"
        onPress={() => Alert.alert("Dark Button Pressed")}
        style={styles.dark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  primary: {
    backgroundColor: "#007bff",
    color: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  secondary: {
    backgroundColor: "#6c757d",
    color: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  success: {
    backgroundColor: "#28a745",
    color: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  danger: {
    backgroundColor: "#dc3545",
    color: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  warning: {
    backgroundColor: "#ffc107",
    color: "#212529",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  info: {
    backgroundColor: "#17a2b8",
    color: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  light: {
    backgroundColor: "#f8f9fa",
    color: "#212529",
    margin: 5,
    padding: 10,
    borderRadius: 8,
    borderColor: "#ddd",
  },
  dark: {
    backgroundColor: "#343a40",
    color: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
});

export default Buttons;
