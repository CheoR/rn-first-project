import { Text, StyleSheet, View } from "react-native";

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
