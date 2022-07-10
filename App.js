import { useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = (text) => setText(text);
  const goalHandler = () => {
    setGoals((prev) => [
      ...prev,
      { text: text, key: Math.random().toString() },
    ]);
    inputHandler("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Pug Things"
          onChangeText={inputHandler}
        />
        <Button title="Pug Goals" onPress={goalHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          // keyExtractor={(data, idx) => {
          //   return data.id;
          // }}
          renderItem={(data) => {
            return (
              <View style={styles.goal}>
                <Text style={styles.goalText}>{data.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    backgroundColor: "lightblue",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#aba",
    width: "70%",
    backgroundColor: "lightgreen",
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 3,
    backgroundColor: "pink",
  },
  goal: {
    backgroundColor: "black",
    padding: 8,
    margin: 8,
    borderRadius: 10,
  },
  goalText: {
    color: "white",
  },
});
