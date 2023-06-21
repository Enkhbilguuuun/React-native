import { Text, Image, TextInput, View, Button, Alert, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';





const Comment = () => {
    return(
        <View>
        <View style={styles.topComment}>
        <Image
        source={{
          uri: "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg",
        }}
        style={{ width: 60, height: 60, borderRadius:40}}
      />
        <Text style={styles.username}>Ben Dova</Text>
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
      width:390,
      height:60,
      backgroundColor: "#dbdbdb",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection:"row",
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      paddingEnd:10,
      paddingStart:10
    },
    botComment:{
        width:390,
        height:"auto",
        backgroundColor: "#dbdbdb",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:13
    },
    username:{
        fontSize:20
    },
    botCommentText:{
        fontSize:15,
        marginLeft:10
    }

   
  });


export default Comment