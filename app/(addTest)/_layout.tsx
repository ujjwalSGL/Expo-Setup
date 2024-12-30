import { Stack, Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="AddTest" options={{ headerShown: false }} />
      <Stack.Screen name="AddTests" options={{ headerShown: false }} />
      <Stack.Screen name="(addTest)" options={{ headerShown: false }} />
      <Stack.Screen name="Add" options={{ headerShown: false }} />
      <Stack.Screen name="Question" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
