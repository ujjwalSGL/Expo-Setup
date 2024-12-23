import { Stack, Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="AddTest" options={{ headerShown: false }} />
      <Stack.Screen name="(addTest)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
