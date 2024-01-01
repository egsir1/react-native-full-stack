import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { LogBox } from "react-native";

// Ignore specific warning messages
LogBox.ignoreLogs([
  "Constants.platform.ios.model has been deprecated", // The specific warning message to ignore
  // Add any other warnings you want to ignore here
]);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
