import { Text, Image, TextInput, View, Button, Alert, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';





const Comment = () => {
    return(
        <View style={styles.commentCont}>
        <View style={styles.topComment}>
        <Image
        source={{
          uri: "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg",
        }}
        style={{ width: 40, height: 40, borderRadius:40}}
      />
        <Text style={styles.username}>Ben Dova</Text>
        <Text style={styles.time}>6s ago</Text>
        <Ionicons name="ellipsis-vertical" size={20} color="black" />
        </View>
        <View style={styles.botComment}>
            <Text style={styles.botCommentText}>Hitler had good intentions! </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topComment: {
      width:350,
      height:60,
      backgroundColor: "#C0DBE2",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection:"row",
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      paddingEnd:10,
      paddingStart:10,
      position:"relative"
    },
    botComment:{
        width:350,
        height:"auto",
        backgroundColor: "#C0DBE2",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:13,
        borderTopColor:"black",
        borderTopWidth:0.5
    },
    username:{
        fontSize:20,
        position:"absolute",
        left:60,
        top:5
    },
    botCommentText:{
        fontSize:15,
        
    },
    commentCont:{
      margin:5
    },
    time:{
      position:"absolute",
      left: 110,
      top:35,
      opacity:0.5
    }

   
  });


export default Comment