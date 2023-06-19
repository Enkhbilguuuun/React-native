import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AiOutlineDelete from "react-icons/ai"

const Quest = ({ value }) => {
  return (
    <View style={styles.cont}>
        {/* <AiOutlineDelete/> */}
      <Text style={styles.task}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    height: 40,
    width: 300,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    display: "flex",
    textAlignVertical: "center",
    textAlign: "center",
  },

  cont: {
    margin: 5,
  },
});

export default Quest;
