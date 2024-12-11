import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Test from "@/app/Test";
import TestList from "../TestList";

export default function HomeScreen() {
  return <TestList />;
}
