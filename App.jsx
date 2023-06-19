import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Fun from "./components/Fun-component";
import Todo from "./components/Todo"

export default function App() {
  return (
    <View style={styles.container}>
      <Todo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
