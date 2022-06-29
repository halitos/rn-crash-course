import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const displayGoalHandler = () => {
    setmodalIsVisible(true);
  };
  const hideGoalHandler = () => {
    setmodalIsVisible(false);
  };

  const addGoalHandler = (goalText) => {
    if (goalText.length === 0) {
      alert('Please enter a goal');
      return;
    }
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
      <View style={{ marginVertical: 16 }}>
        <Button title='Add New' onPress={displayGoalHandler} />
      </View>
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        hideGoalHandler={hideGoalHandler}
      />
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
