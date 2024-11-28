import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: object;
  className?: string;
}

const Button = ({ title, onPress, style, className }: ButtonProps) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress} className={className}>
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
