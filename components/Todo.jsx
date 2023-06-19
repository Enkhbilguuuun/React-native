import React from "react";
import { Text, Image, TextInput, View, Button, Alert } from "react-native";
import { useState } from "react";

const Todo = () => {

const [todo, setTodo] = useState([]);
const [add, setAdd] = useState()


const Add = () => {

    setTodo([...todo], add)

}

    return(
        <View>
            <Text>Todo List</Text>
            {todo & todo.map((e) => {
                return<Text>{e}</Text>
            })}
           <TextInput
        style={{
          height: 40,
          width: 180,
          borderColor: "gray",
          borderWidth: 1,
          backgroundColor: "white",
        }}
        placeholder="So? what shall it be"
        onChange={(e) => setAdd(e.target.value)}
      />
       <Button
  onPress={Add}
  title="ADD"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>  
        </View>
    )
}

export default Todo