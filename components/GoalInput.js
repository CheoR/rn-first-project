import { useState } from "react";

import {
  Button,
  Image,
  Modal,
  TextInput,
  StyleSheet,
  View,
} from "react-native";

const GoalInput = ({ goalHandler, visible, onCancel }) => {
  const [text, setText] = useState("");

  const inputHandler = (text) => setText(text);

  const addGoalHandler = () => {
    goalHandler(text);
    setText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require("../assets/icon.png")} />
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder="Pug Things"
          onChangeText={inputHandler}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Naw" onPress={onCancel} />
          </View>
          <View style={styles.btn}>
            <Button title="Pug Goals" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingBottom: 24,
    backgroundColor: "lightblue",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#aba",
    width: "100%",
    backgroundColor: "lightgreen",
    padding: 8,
  },
  btnContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "pink",
    width: "100%",
    justifyContent: "space-evenly",
  },
  btn: {
    width: "30%",
    marginHorizontal: 8,
  },
  img: {
    height: 200,
    width: 200,
    margin: 8,
    backgroundColor: "red",
  },
});
