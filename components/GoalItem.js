import { StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});
