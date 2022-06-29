import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem(props) {
  const deleteGoal = () => {
    props.onDeleteGoal(props.id);
  };

  /* By using bind()instaed of helper function
  <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}> */

  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: '#ddddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteGoal}
      >
        <Text style={styles.listText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  listText: {
    fontSize: 18,
    padding: 10,
  },
  pressedItem: {
    opacity: 0.4,
    backgroundColor: '#DC707D',
  },
});
