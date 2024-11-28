import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },
  progressBar: {
    height: 20,
    borderRadius: 8,
  },
});

interface ProgressProps {
  value: number;
  max: number;
  style: object;
}

const Progress = ({ value, max, style }: ProgressProps) => {
  const percentage = (value / max) * 100;

  return (
    <View style={styles.container}>
      <View
        style={[styles.progressBar, { width: `${percentage}%` }, style]}
      ></View>
    </View>
  );
};

export default Progress;
