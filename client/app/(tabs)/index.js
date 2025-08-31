// app/(tabs)/index.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ChatApp 🚀</Text>
      <Text style={styles.subtitle}>You are now logged in!</Text>
      <Text style={styles.subtitle}>Start chatting with your friends.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },
});