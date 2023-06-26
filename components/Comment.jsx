import {
  Text,
  Image,
  TextInput,
  View,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Modal
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const Comment = ({ value }) => {
  console.log(value.text)
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [inputValue, setInputValue] = useState();
  const [create, setCreate] = useState(false);

  const delte = () => {
    console.log(value._id);
    fetch(`http://192.168.4.150:3000/api/deletepost?id=${value._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const uptade = () => {
    console.log(inputValue)
    fetch(`http://192.168.4.150:3000/api/updatepost?id=${value._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputValue }),
    });
  };

  return (
    <View style={styles.commentCont}>
      <View style={styles.topComment}>
        <Image
          source={{
            uri: "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg",
          }}
          style={{ width: 40, height: 40, borderRadius: 40 }}
        />
        <Text style={styles.username}>{value.email}</Text>
        <Text style={styles.time}>6.9sec ago</Text>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Ionicons name="ellipsis-vertical" size={20} color="black" />
        </TouchableOpacity>
        <View
          style={{
            display: open ? "flex" : "none",
            position: "absolute",
            width: 100,
            right: 35,
            borderWidth: 2,
            backgroundColor: "white",
          }}
        >
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
            <Text>Update Comment</Text>
            <TextInput
              placeholder="comment"
              onChangeText={(e) => setInputValue(e)}
              style={{ borderWidth: 1, width: 280, borderRadius: 6, margin: 5 }}
            />
            <Button title="Update" onPress={uptade} />
            <Button title="Close" onPress={() => setCreate(false)} />
          </View>
        </View>
      </Modal>
          
          <Button title="update" onPress={()=> setCreate(true)} />
          <Button title="delete" onPress={delte} />
        </View>
      </View>
      <View style={styles.botComment}>
        <Text style={styles.botCommentText}>{value._id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topComment: {
    width: 350,
    height: 60,
    backgroundColor: "#C0DBE2",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingEnd: 10,
    paddingStart: 10,
    position: "relative",
  },
  botComment: {
    width: 350,
    height: "auto",
    backgroundColor: "#C0DBE2",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 13,
    borderTopColor: "black",
    borderTopWidth: 0.5,
  },
  username: {
    fontSize: 20,
    position: "absolute",
    left: 60,
    top: 5,
  },
  botCommentText: {
    fontSize: 15,
  },
  commentCont: {
    margin: 5,
  },
  time: {
    position: "absolute",
    left: 110,
    top: 35,
    opacity: 0.5,
  },
});

export default Comment;
