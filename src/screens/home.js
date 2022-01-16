import { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";
import Fontisto from "react-native-vector-icons/Fontisto";

import Context from "../utils/context.js";

export default function Home({ navigation }) {
  const { userData, history } = useContext(Context);

  if (!userData) return <ActivityIndicator />;

  if (!history || history.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.topText1Container}>
          <Text style={styles.topText2}>Hello</Text>
          <Text style={styles.topText2}>
            {userData.firstName + " " + userData.lastName}!
          </Text>
          <Text style={styles.topText1}>How are you feeling today?</Text>
        </View>
        <View style={styles.cards}>
          <View
            styles={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Patient")}>
              <View style={styles.rectangle}>
                <Fontisto name="doctor" size={60} style={styles.icons} />
                <View style={{ flexDirection: "column", flexShrink: 1 }}>
                  <Text style={styles.largeText}>Upload Image</Text>
                  <Text style={styles.smallText}>
                    Upload a diagonsis for a patient
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            styles={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Past Scans")}>
              <View style={styles.rectangle1}>
                <Fontisto name="bed-patient" size={60} style={styles.icons} />
                <View style={{ flexDirection: "column", flexShrink: 1 }}>
                  <Text style={styles.largeText}>View Diagonsis</Text>
                  <Text style={styles.smallText}>View a diagonsis</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.recentHistory}>
            <View style={styles.cards1}>
              <Text style={styles.largeText1}>Recent History</Text>
              <Text>You have no data.</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (history.length === 1) {
    return (
      <View style={styles.container}>
        <View style={styles.topText1Container}>
          <Text style={styles.topText2}>Hello</Text>
          <Text style={styles.topText2}>
            {userData.firstName + " " + userData.lastName}!
          </Text>
          <Text style={styles.topText1}>How are you feeling today?</Text>
        </View>
        <View style={styles.cards}>
          <View
            styles={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Patient")}>
              <View style={styles.rectangle}>
                <Fontisto name="doctor" size={60} style={styles.icons} />
                <View style={{ flexDirection: "column", flexShrink: 1 }}>
                  <Text style={styles.largeText}>Upload Image</Text>
                  <Text style={styles.smallText}>
                    Upload a diagonsis for a patient
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            styles={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Past Scans")}>
              <View style={styles.rectangle1}>
                <Fontisto name="bed-patient" size={60} style={styles.icons} />
                <View style={{ flexDirection: "column", flexShrink: 1 }}>
                  <Text style={styles.largeText}>View Diagonsis</Text>
                  <Text style={styles.smallText}>View a diagonsis</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.recentHistory}>
            <View style={styles.cards1}>
              <Text style={styles.largeText1}>Recent History</Text>
              <View
                styles={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.rectangle2}>
                  <Fontisto name="person" size={60} style={styles.icons} />
                  <View style={{ flexDirection: "column", flexShrink: 1 }}>
                    <Text style={styles.largeText2}>{history[0].patient}</Text>
                    <Text style={styles.smallText1}>
                      {history[0].diagnosis}
                    </Text>
                    <Text style={styles.smallText1}>{history[0].date}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.topText1Container}>
        <Text style={styles.topText2}>Hello</Text>
        <Text style={styles.topText2}>
          {userData.firstName + " " + userData.lastName}!
        </Text>
        <Text style={styles.topText1}>How are you feeling today?</Text>
      </View>
      <View style={styles.cards}>
        <View
          styles={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Patient")}>
            <View style={styles.rectangle}>
              <Fontisto name="doctor" size={60} style={styles.icons} />
              <View style={{ flexDirection: "column", flexShrink: 1 }}>
                <Text style={styles.largeText}>Upload Image</Text>
                <Text style={styles.smallText}>
                  Upload a diagonsis for a patient
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          styles={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Past Scans")}>
            <View style={styles.rectangle1}>
              <Fontisto name="bed-patient" size={60} style={styles.icons} />
              <View style={{ flexDirection: "column", flexShrink: 1 }}>
                <Text style={styles.largeText}>View Diagonsis</Text>
                <Text style={styles.smallText}>View a diagonsis</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.recentHistory}>
          <View style={styles.cards1}>
            <Text style={styles.largeText1}>Recent History</Text>
            <View
              styles={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.rectangle2}>
                <Fontisto name="person" size={60} style={styles.icons} />
                <View style={{ flexDirection: "column", flexShrink: 1 }}>
                  <Text style={styles.largeText2}>{history[0].patient}</Text>
                  <Text style={styles.smallText1}>{history[0].diagnosis}</Text>
                  <Text style={styles.smallText1}>{history[0].date}</Text>
                </View>
              </View>
            </View>
            <View
              styles={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.rectangle2}>
                <Fontisto name="person" size={60} style={styles.icons} />
                <View style={{ flexDirection: "column", flexShrink: 1 }}>
                  <Text style={styles.largeText2}>{history[1].patient}</Text>
                  <Text style={styles.smallText1}>{history[1].diagnosis}</Text>
                  <Text style={styles.smallText1}>{history[1].date}</Text>
                </View>
              </View>
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
    marginLeft: 30,
    marginRight: 30,
  },
  topText1Container: {
    marginTop: 20,
  },
  topText1: {
    fontFamily: "Avenir-Light",
    fontSize: 20,
    color: "#5e83ba",
  },
  topText2: {
    fontFamily: "Avenir-Heavy",
    fontSize: 40,
    color: "#091d36",
  },
  rectangle: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 30,
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
  rectangle1: {
    backgroundColor: "white",
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

  rectangle2: {
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

  largeText: {
    marginTop: 15,
    fontFamily: "Avenir-Heavy",
    fontSize: 25,
    marginLeft: 20,
  },
  largeText1: {
    marginTop: 15,
    fontFamily: "Avenir-Heavy",
    fontSize: 25,
  },
  largeText2: {
    marginTop: 15,
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    marginLeft: 20,
  },
  smallText: {
    marginLeft: 20,
    fontFamily: "Avenir-Light",
    marginTop: 4,
    color: "#8D8D8D",
    fontSize: 15,
  },
  smallText1: {
    marginLeft: 20,
    fontFamily: "Avenir-Light",
    marginTop: 0,
    color: "#3A4E7A",
    fontSize: 15,
  },
  recentHistory: {
    marginTop: 30,
    height: 400,
    marginLeft: -30,
    marginRight: -30,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 10,
  },
  cards1: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
  },
});
