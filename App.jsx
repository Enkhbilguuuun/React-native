import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import Fun from "./components/Fun-component";
import Todo from "./components/Todo";
import Quest from "./components/Quest";

export default function App() {

const [todo, setTodo] = useState([]);
const [inputValue, setInputValue] = useState("")

function map() {
  return todo.map((e) => {
    return <View>
      <Quest value={e}/>
      <TouchableOpacity onPress={}>
          <FontAwesome5
            name="trash"
            size={20}
            // color={clicked ? "white" : "black"}
          />
        </TouchableOpacity>
    </View> 
    
  });
}
const add = () => {
  console.log(inputValue)
  setTodo([...todo, inputValue])
}
const checkarray = () => {
  console.log(todo)
}


  return (
  
     <ScrollView style={styles.scrollview}>
          <View style={styles.container}>
      <View style={styles.smallcont}>
        <Text style={styles.header}>Todo Tasks</Text>
        {map()}
        <TextInput
         style={styles.input}
         placeholder="Write Tasks"
         onChangeText={(e) => setInputValue(e)} />
        <Button
          onPress={add}
          style={styles.buttons}
          title="Add"
          color="#4d76ff"
        />
                <Button
          onPress={checkarray}
          style={styles.buttons}
          title="checkarray"
          color="#4d76ff"
        />
      </View>
      <StatusBar style="inverted"/>
    </View>
     </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
    justifyContent: "center",
  },
  smallcont: {
    height: "auto",
    justifyContent: "space-evenly",
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "gray",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollview:{
    flex:1
  }
});




