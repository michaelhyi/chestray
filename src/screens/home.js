import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Patient")}>
        <Text>Upload an Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Past Scans")}>
        <Text>View Past Scans</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
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
