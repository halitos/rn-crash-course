import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalText);
    setGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='My Course Goal'
        value={goalText}
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 10,
    padding: 10,
  },
});
