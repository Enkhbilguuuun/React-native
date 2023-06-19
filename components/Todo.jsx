import React from "react";
import { Text, Image, TextInput, View, Button, Alert } from "react-native";
import { useState, useEffect } from "react";
import Quest from "./Quest";

const Todo = () => {
  //   const [todo, setTodo] = useState([]);
  //   const [add, setAdd] = useState("");
  const arr = ["hool hiih", "huvtsaa ugaah", "hicheelee davtah", "8:30 sereh"];

  function Map() {
    return arr.map((e) => {
      return <Quest value={e} />;
    });
  }

  return <View>{Map()}</View>;
};

export default Todo;
