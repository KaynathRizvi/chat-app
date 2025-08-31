import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="homePage"
        options={{
          title: "Home",
          headerShown: false, // 👈 hides header only on home
        }}
      />
      {/* You can add more tabs later */}
    </Tabs>
  );
}