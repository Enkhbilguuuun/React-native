import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AiOutlineDelete } from "react-icons/ai";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

const Quest = ({ value }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.cont}>
      {/* <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Custom Checkbox"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        // onPress={(isChecked: boolean) => {}}
      /> */}
      <Text
        style={clicked ? styles.whenclicked : styles.task}
        onPress={() => {
          setClicked(true);
        }}
      >
        {value}{" "}
      </Text>
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
  whenclicked: {
    backgroundColor: "gray",
    color: "white",
    height: 40,
    width: 300,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 5,
  },
  cont: {
    margin: 5,
  },
});

export default Quest;
