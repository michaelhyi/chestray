import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topText1Container}>
        <Text style={styles.topText1}>Select</Text>
        <Text style={styles.topText2}>Login</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.cards}>
          <View style={styles.rectangle}>
            <View>
              <Text style={styles.largeText}>Doctor</Text>
              <Text style={styles.smallText}>Upload and Manage Diagonsis</Text>
              <View style={{ flexDirection: "row", flexShrink: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: -10}}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rectangle1}>
          <View>
            <Text style={styles.largeText}>Patient</Text>
            <Text style={styles.smallText}>View your Diagonsis</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Enter Diagnosis ID")}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Select</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rectangle1}>
          <View>
            <Text style={styles.largeText}>Admin</Text>
            <Text style={styles.smallText}>Monitor Server Status</Text>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
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

  rectangle1: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 15,
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

  largeText: {
    marginTop: 15,
    fontFamily: "Avenir-Heavy",
    fontSize: 35,
    marginLeft: 25,
    color: "#3a4e7a",
  },

  smallText: {
    marginLeft: 25,
    fontFamily: "Avenir-Light",
    marginTop: 4,
    color: "#8D8D8D",
    fontSize: 16,
  },

  button: {
    marginLeft: 25,
    fontFamily: "Avenir-Light",
    marginTop: 10,
    marginBottom: 18,
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
});
