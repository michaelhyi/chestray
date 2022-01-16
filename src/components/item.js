import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Item({ onPress, patient, diagnosis, date }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Fontisto name="person" size={60} style={styles.icons} />
      <View style={{ flexDirection: "column", flexShrink: 1 }}>
        <Text style={styles.largeText2}>{patient}</Text>
        <Text style={styles.smallText1}>{diagnosis}</Text>
        <Text style={styles.smallText1}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#c2d2e9",
    flexDirection: "row",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom: 10,
    borderRadius: 17,
  },

  icons: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    color: "#5e83ba",
  },

  largeText2: {
    marginTop: 15,
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    marginLeft: 20,
  },

  smallText1: {
    marginLeft: 20,
    fontFamily: "Avenir-Light",
    marginTop: 0,
    color: "#3A4E7A",
    fontSize: 15,
  },
});
