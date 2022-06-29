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
        style={({ pressed }) => (pressed ? styles.pressedItem : styles.item)}
        onPress={deleteGoal}
      >
        <Text style={styles.listText}>{props.text}</Text>
        {/* <Text>Delete</Text> */}
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
    backgroundColor: '#BFC9CA',
  },
  listText: {
    fontSize: 18,
    padding: 10,
  },
  pressedItem: {
    opacity: 0.4,
    backgroundColor: '#ddd',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
