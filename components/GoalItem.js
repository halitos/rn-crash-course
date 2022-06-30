import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Icon name='star' size={30} color='#900' />
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
    backgroundColor: '#D3D9DC',
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
