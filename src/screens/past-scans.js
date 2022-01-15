import { StyleSheet, View, Text } from "react-native";

export default function PastScans() {
  return (
    <View style={styles.container}>
      <Text>Past Scans Screen</Text>
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
