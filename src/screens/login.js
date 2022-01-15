import { StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.topText1Container}>
        <Text style={styles.topText1}>Enter</Text>
        <Text style={styles.topText2}>Information</Text>
        <View style={styles.line}/>
      </View>
      <View style={styles.cards}>
          <View style={styles.rectangle}>
            <View>
              <Text style={styles.smallText}>Username</Text>
              <View style={styles.textInputContainer}>
                <TextInput style={styles.input}/>
              </View>
              <Text style={styles.smallText}>Password</Text>
              <View style={styles.textInputContainer1}>
                <TextInput style={styles.input}/>
              </View>
              <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Log In</Text>
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
    color: "#091d36"
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
    marginTop: Dimensions.get('window').height/2 - 275,
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
  buttonContainer: {
    alignContent: "center",
    alignItems: "center",
  }
});
