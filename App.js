import { StyleSheet, Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sampleText}>Bark bark bark</Text>
      </View>
      <Button title="Pug" />
      <Text
        style={{ margin: 8, borderWidth: 3, borderColor: "red", padding: 8 }}
      >
        "Moooo" goes the little pug. Oink Oink Moo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sampleText: {
    margin: 8,
    borderWidth: 3,
    borderColor: "red",
    padding: 8,
    backgroundColor: "pink",
  },
});
