import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginRight: 10,
    padding: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: "lightblue",
    borderRadius: 25,
  },
});
