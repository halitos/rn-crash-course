import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';
const goalImage = require('../assets/images/goal.png');

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
        <Image style={styles.image} color='black' source={goalImage} />
        <TextInput
          placeholder='New Task'
          placeholderTextColor='#565158'
          value={goalText}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title='Add' color='#37895E' onPress={addGoalHandler} />
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
    backgroundColor: '#8E679C',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: '#D5CBD8',
    backgroundColor: '#D5CBD8',
    borderRadius: 8,
    width: '70%',
    marginRight: 10,
    padding: 12,
    color: '#565158',
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
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
