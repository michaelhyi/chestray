import { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Clipboard,
} from "react-native";

import Constants from "expo-constants";

import Context from "../utils/context.js";

export default function ViewScan({ navigation }) {
  const { scan } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.topText1Container}>
        <Text style={styles.topText1}>Patient</Text>
        <Text style={styles.topText2}>Results</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.cards}>
        <View style={styles.rectangle}>
          <View style={{ marginLeft: 30 }}>
            <Image
              style={{ height: 250, width: 250, marginTop: 30 }}
              source={{ uri: scan.image.uri }}
            />
            <View style={{ marginLeft: 10 }}>
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.largeText}>{scan.patient}</Text>
                {scan.diagnosis === "Healthy" && (
                  <Text>Your lungs are healthy.</Text>
                )}
                {scan.diagnosis !== "Healthy" && (
                  <Text style={styles.smallText}>
                    {scan.patient} has tested positive for {scan.diagnosis}.
                  </Text>
                )}
                <Text style={styles.smallText1}>{scan.date}</Text>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Copied!");
                    Clipboard.setString(scan.id);
                  }}
                >
                  <Text style={styles.smallText1}>Copy Diagnosis ID</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Home")}
              >
                <View style={styles.button1}>
                  <Text style={styles.buttonText}>Exit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
  },
  topText1Container: {
    marginTop: 20,
  },
  topText1: {
    fontFamily: "Avenir-Light",
    fontSize: 45,
  },
  topText2: {
    fontFamily: "Avenir-Heavy",
    fontSize: 45,
    color: "#091d36",
  },
  line: {
    marginTop: 15,
    backgroundColor: "#3a4e7a",
    height: 3,
    width: "50%",
    borderRadius: 10,
  },
  rectangle: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom: 10,
    borderRadius: 15,
  },

  smallText: {
    fontFamily: "Avenir-Heavy",
    marginTop: 5,
    color: "#5E83BA",
    fontSize: 16,
    alignItems: "center",
    textAlign: "center",
    marginRight: 20,
  },
  smallText1: {
    fontFamily: "Avenir-Light",
    marginTop: 20,
    color: "#3A4E7A",
    fontSize: 16,
    alignItems: "center",
    textAlign: "center",
    marginRight: 20,
  },
  largeText: {
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Avenir-Heavy",
    marginTop: 20,
    color: "#091D36",
    fontSize: 30,
    marginRight: 20,
  },
  button1: {
    marginLeft: 25,
    fontFamily: "Avenir-Light",
    marginBottom: 18,
    backgroundColor: "#3a4e7a",
    fontSize: 16,
    width: 100,
    borderRadius: 10000,
  },
  buttonText: {
    alignContent: "center",
    textAlign: "center",
    margin: 5,
    fontFamily: "Avenir-Light",
    color: "white",
    fontSize: 15,
  },
  buttonStyle: {
    marginTop: 20,
    alignItems: "center",
    marginRight: 30,
  },
});
