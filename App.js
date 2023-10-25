import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
  ScrollView, // Import ScrollView
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskitems, setTaskitems] = useState(["Click me to delete the task"]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskitems([...taskitems, task]);
    setTask("");
  };

  const completedTask = (index) => {
    const itemsCopy = [...taskitems];
    itemsCopy.splice(index, 1);
    setTaskitems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        {/* Wrap the list of tasks in a ScrollView */}
        <ScrollView contentContainerStyle={styles.items}>
          {taskitems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completedTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Completed Task's </Text>
        
      </View> */}

      {/* This is where the entire bottom input field goes */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTasksWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  CompletedtasksWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTasksWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    backgroundColor: "#ffffff",
    height: 45,
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    marginLeft: 15,
    width: 45,
    height: 45,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addText: {},
});
