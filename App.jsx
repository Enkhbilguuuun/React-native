import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import Fun from "./components/Fun-component";
import Todo from "./components/Todo";
import Quest from "./components/Quest";
import Comment from "./components/Comment";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [create, setCreate] = useState(false);

  useEffect(() => {
    fetch("http://192.168.4.150:3000/api/getpost")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data.documents);
      });
  }, []);

  

  function map() {
    return todo.map((e) => {
      return (
        <View>
          <Comment value={e} />
        </View>
      );
    });
  }
  const add = () => {
    console.log({inputValue});
    fetch('http://192.168.4.150:3000/api/createpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: inputValue}),
    })
  };
  const checkarray = () => {};
  return (
    //  <ScrollView style={styles.scrollview}>
    //       <View style={styles.container}>
    //   <View style={styles.smallcont}>
    //     <Text style={styles.header}>Todo Tasks</Text>
    //     {map()}
    //     <TextInput
    //      style={styles.input}
    //      placeholder="Write Tasks"
    //      onChangeText={(e) => setInputValue(e)} />
    //     <Button
    //       onPress={add}
    //       style={styles.buttons}
    //       title="Add"
    //       color="#4d76ff"
    //     />
    //             <Button
    //       onPress={checkarray}
    //       style={styles.buttons}
    //       title="checkarray"
    //       color="#4d76ff"
    //     />
    //   </View>
    //   <StatusBar style="inverted"/>
    // </View>
    //  </ScrollView>
    <SafeAreaView style={styles.safearea}>
      <Modal transparent={true} visible={create}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: "auto",
              width: 300,
              padding: 5,
              backgroundColor: "white",
              borderRadius: 6,
              alignItems: "center",
            }}
          >
            {/* <TouchableOpacity onPress={() => console.log("irj bn")}>
              <AntDesign
                style={{ left: 133 }}
                name="closecircleo"
                size={24}
                color="black"
              />
            </TouchableOpacity> */}
            <Text>Create Comment</Text>
            <TextInput
              placeholder="comment"
              onChangeText={(e) => setInputValue(e)}
              style={{ borderWidth: 1, width: 280, borderRadius: 6, margin: 5 }}
            />
            <Button title="add" onPress={add} />
            <Button title="close" onPress={() => setCreate(false)} />
          </View>
        </View>
      </Modal>
      <ScrollView>{map()}</ScrollView>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "orange",
          borderWidth: 2,
        }}
      >
        <TouchableOpacity onPress={()=>setCreate(true)}>
        <AntDesign name="plussquareo" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  scrollview: {
    flex: 1,
  },
  safearea: {
    flex: 1,
    backgroundColor: "#538495",
    display: "flex",
    alignItems: "center",
  },
});
