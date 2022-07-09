import { StyleSheet, Button, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Pug Things" />
        <Button title="Pug Goals" />
      </View>
      <View style={styles.listContainer}>
        <Text>Pug List of Barks</Text>
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
});
