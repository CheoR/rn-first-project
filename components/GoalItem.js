import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ id, text, onDeleteHandler }) => {
  return (
    <View style={styles.goal}>
      <Pressable
        onPress={onDeleteHandler.bind(this, id)}
        android_ripple={{ color: "red" }}
        // good for ios
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "black",
    margin: 8,
    borderRadius: 10,
  },
  goalText: {
    padding: 8,
    color: "white",
  },

  pressed: {
    opacity: 0.5,
  },
});
