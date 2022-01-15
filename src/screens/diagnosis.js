import { StyleSheet, View, Text } from "react-native";

export default function Diagnosis() {
  return (
    <View style={styles.container}>
      <Text>Diagnosis Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
