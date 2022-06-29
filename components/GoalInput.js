import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalText);
    setGoalText('');
    props.hideGoalHandler();
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='My Course Goal'
          value={goalText}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title='Add Goal' color='#37895E' onPress={addGoalHandler} />
          </View>
          <View style={styles.buttons}>
            <Button
              title='Cancel'
              color='#9C1527'
              onPress={props.hideGoalHandler}
            />
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
    justifyContent: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
  },
  buttons: {
    width: '30%',
    padding: 8,
    marginHorizontal: 8,
    marginTop: 12,
  },
});
