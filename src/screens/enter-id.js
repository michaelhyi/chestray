import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

import Button from "../components/button.js";

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.lightText}>Enter</Text>
        <Text style={styles.boldText}>Diagnosis ID</Text>
        <View style={styles.horizontalRule} />
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <TextInput style={styles.input} placeholder="Enter Diagnosis ID" />
          <Button text="Enter" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },

  header: {
    marginLeft: 35,
    marginTop: 10,
    flexDirection: "column",
  },

  lightText: {
    fontSize: 36,
    fontWeight: "normal",
  },

  boldText: {
    fontSize: 36,
    fontWeight: "bold",
  },

  horizontalRule: {
    marginTop: 15,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginRight: 250,
  },

  body: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingLeft: 20,
    marginHorizontal: 35,
    marginVertical: 35,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderRadius: 20,
  },

  input: {
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 25,
  },
});
