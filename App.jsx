import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Fun from "./components/Fun-component";
import Todo from "./components/Todo"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.smallcont}>
      <Text style={styles.header}>Todo Tasks</Text>
      <Todo/>
      <TextInput
        style={styles.input}
        placeholder="Write Tasks"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
    justifyContent:"center"
  },
  smallcont:{
    backgroundColor:"purple",
    height:400,
    justifyContent:"space-evenly"
  },
  input:{
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    alignSelf:"center",
    borderRadius:6,
    borderWidth:2,
    borderColor:"gray"
  },
  header:{
    fontSize:24,
    fontWeight:"bold"
  }
});
