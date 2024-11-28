import { StyleSheet, View } from "react-native";
import React from "react";
import Progress from "./Progress";

export default function ProgressComponents() {
  return (
    <View style={{ gap: 20 }}>
      <Progress value={80} max={100} style={styles.color1} />
      <Progress value={50} max={100} style={styles.color2} />
      <Progress value={60} max={100} style={styles.color3} />
      <Progress value={45} max={100} style={styles.color4} />
    </View>
  );
}

const styles = StyleSheet.create({
  color1: {
    backgroundColor: "#FFCCCC",
  },
  color2: {
    backgroundColor: "#B3E6B3",
  },
  color3: {
    backgroundColor: "#ADD8E6",
  },
  color4: {
    backgroundColor: "#FFFF99",
  },
});
