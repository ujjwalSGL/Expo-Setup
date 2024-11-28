import { Linking, StyleSheet, Text } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { View } from "react-native";
import Inputs from "@/components/Input/Inputs";
import Buttons from "@/components/Button/Buttons";
import ProgressComponents from "@/components/Progress/ProgressBar";
import Input from "@/components/Input/Input";
import { Link } from "@react-navigation/native";
import Button from "@/components/Button/Button";
import Cards from "@/components/Card/Cards";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>

      <Collapsible title="Input Fields">
        <ThemedText style={styles.subtitle}>
          Explore different input fields below :-
        </ThemedText>

        <View>
          <Inputs />
        </View>
      </Collapsible>

      <Collapsible title="Buttons">
        <ThemedText style={styles.subtitle}>
          Explore different buttons below :-
        </ThemedText>
        <Buttons />
      </Collapsible>

      <Collapsible title="Progress Bar">
        <ThemedText style={styles.subtitle}>
          Explore different ProgressBar below :-
        </ThemedText>
        <ProgressComponents />
      </Collapsible>
      <Collapsible title="Cards">
        <ThemedText style={styles.subtitle}>
          Explore different Card below :-
        </ThemedText>
        <Cards />
      </Collapsible>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: "#007bff",
    marginVertical: 5,
  },
  secondaryButton: {
    borderColor: "#6c757d",
    marginVertical: 5,
  },
  dangerButton: {
    backgroundColor: "#dc3545",
    marginVertical: 5,
  },
});
