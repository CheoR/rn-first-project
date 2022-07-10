import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const deleteHandler = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };
  const goalHandler = (text) => {
    setGoals((prev) => [...prev, { text: text, id: Math.random().toString() }]);
  };
  return (
    <View style={styles.container}>
      <GoalInput goalHandler={goalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          keyExtractor={(data, idx) => {
            return data.id;
          }}
          renderItem={(data) => {
            return (
              <GoalItem
                id={data.item.id}
                text={data.item.text}
                onDeleteHandler={deleteHandler}
              />
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
  listContainer: {
    flex: 3,
    backgroundColor: "pink",
  },
});
