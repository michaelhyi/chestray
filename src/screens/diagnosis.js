import { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";

import Context from "../utils/context.js";

import { readDiag } from "../functions/fb.js";

export default function Diagnosis({ navigation }) {
  const { id } = useContext(Context);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    readDiag(id, setData);
  }, []);

  if (data) {
    return (
      <View style={styles.container}>
        <View style={styles.topText1Container}>
          <Text style={styles.topText1}>Your</Text>
          <Text style={styles.topText2}>Results</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.cards}>
          <View style={styles.rectangle}>
            <View
              style={{
                backgroundColor: "black",
                width: 225,
                height: 100,
                marginLeft: 25,
                marginTop: 50,
              }}
            >
              <Image
                style={{ height: 300, width: 300 }}
                source={{ uri: data.image.uri }}
              />
              <Text>{data.patient}</Text>
              {data.diagnosis === "Healthy" && (
                <Text>Your lungs are healthy.</Text>
              )}
              {data.diagnosis !== "Healthy" && (
                <Text>You have tested positive for {data.diagnosis}.</Text>
              )}
              <Text>{data.date}</Text>
              <Text>Doctor {data.doctor}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return <ActivityIndicator />;
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
    marginLeft: 25,
    fontFamily: "Avenir-Light",
    marginTop: 20,
    color: "#8D8D8D",
    fontSize: 16,
  },
  input: {
    height: 40,
    backgroundColor: "#c2d2e9",
    width: 237,
    padding: 10,
    borderRadius: 15,
  },
  textInputContainer: {
    marginLeft: 25,
    marginTop: 5,
    borderRadius: 20,
  },
  textInputContainer1: {
    marginLeft: 25,
    marginTop: 5,
    borderRadius: 20,
    marginBottom: 5,
  },
  button: {
    marginLeft: 25,
    fontFamily: "Avenir-Light",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#3a4e7a",
    fontSize: 16,
    width: 90,
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
  buttonContainer: {
    alignContent: "center",
    alignItems: "center",
  },
  button1: {
    marginLeft: 25,
    fontFamily: "Avenir-Light",
    marginBottom: 18,
    backgroundColor: "#3a4e7a",
    fontSize: 16,
    width: 175,
    borderRadius: 10000,
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
});
