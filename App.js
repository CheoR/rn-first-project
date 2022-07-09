import { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = (text) => setText(text);
  const goalHandler = () => {
    setGoals((prev) => [...prev, text]);
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
        {goals.map((goal, idx) => (
          <View key={`${idx}-${goal}`} style={styles.goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
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
