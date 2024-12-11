// import { Tabs } from "expo-router";
// import React from "react";
// import { Platform } from "react-native";
// import { HapticTab } from "@/components/HapticTab";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import TabBarBackground from "@/components/ui/TabBarBackground";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: "absolute",
//           },
//           default: {},
//         }),
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="house.fill" color="black" />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           tabBarIcon: ({ color }) => (
//             <FontAwesome5 name="user-alt" size={24} color="black" />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
}
