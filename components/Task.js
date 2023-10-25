import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const Task = ({ text }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemsleft}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <Text style={styles.itemText}>{text}</Text>
        </View>

        <View style={styles.circular}></View>
      </View>
    </>
  );
};

export default Task;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        padding:15,
        borderRadius:10,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,

    },
    itemsleft:{
        flexDirection:"row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    itemText: {
        maxWidth:"90%",
    },
    square:{
        width:24,
        height:24,
        backgroundColor: "#55BCF666",
        opacity: 4,
        borderRadius:5,
        marginRight:15,
    },
    circular:{
        width:12,
        height: 12,
        borderColor:"#55BCF6",
        borderWidth: 2,
        borderRadius: 5,

    },
});
