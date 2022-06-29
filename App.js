import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalText) => {
    if (goalText.length === 0) return null;
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, key: Math.random().toString() },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={[styles.goalsContainer]}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.key}
              onDeleteGoal={removeGoalHandler}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 5,
  },
});
