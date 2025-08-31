import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="index" />       {/* Login */}
      <Stack.Screen name="register" />    {/* Register */}

      {/* Protected Screens */}
      <Stack.Screen name="(tabs)" />      {/* Tabs group (Home, etc) */}
    </Stack>
  );
}