import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

import Button from "../components/button.js";

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.lightText}>Select</Text>
        <Text style={styles.boldText}>Login</Text>
        <View style={styles.horizontalRule} />
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.boldText}>Doctor</Text>
          <Text>Upload and Manage Diagnosis</Text>
          <View style={{ flexDirection: "row" }}>
            <Button text="Login" onPress={() => navigation.navigate("Login")} />
            <Button
              text="Sign Up"
              onPress={() => navigation.navigate("Sign Up")}
            />
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boldText}>Patient</Text>
          <Text>View Your Diagnosis</Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              text="Enter Diagnosis ID"
              onPress={() => navigation.navigate("Enter Diagnosis ID")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
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
    flexDirection: "column",
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
});
