import { useState } from "react";

import { Button, TextInput, StyleSheet, View } from "react-native";

const GoalInput = ({ goalHandler }) => {
  const [text, setText] = useState("");

  const inputHandler = (text) => setText(text);

  const addGoalHandler = () => {
    goalHandler(text);
    setText("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        style={styles.textInput}
        placeholder="Pug Things"
        onChangeText={inputHandler}
      />
      <Button title="Pug Goals" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
