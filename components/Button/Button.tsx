import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style: object;
}

const Button = ({ title, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: 300,
  },
  text: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Button;
