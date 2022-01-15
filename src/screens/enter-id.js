import { StyleSheet, View, Text } from "react-native";

export default function EnterID() {
  return (
    <View style={styles.container}>
      <Text>Enter Diagnosis ID Page</Text>
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
