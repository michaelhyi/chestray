import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import LandingStack from "./src/components/landing-stack.js";
import HomeStack from "./src/components/home-stack.js";

import { readHistory } from "./src/functions/fb.js";

import Context from "./src/utils/context.js";
import { firebase } from "./src/utils/fb.js";

export default function App() {
  const [user, setUser] = useState(undefined);
  const [userData, setUserData] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [patient, setPatient] = useState(undefined);
  const [id, setId] = useState("");
  const [history, setHistory] = useState(undefined);
  const [scan, setScan] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        await firebase
          .firestore()
          .collection("userData")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUserData(doc.data());
              readHistory(user.uid, setHistory);
            }
          });
      } else {
        setUser(undefined);
        setUserData(undefined);
      }
    });
  }, []);

  if (!user) {
    return (
      <Context.Provider
        value={{
          user,
          setUser,
          userData,
          setUserData,
          image,
          setImage,
          patient,
          setPatient,
          id,
          setId,
        }}
      >
        <NavigationContainer>
          <StatusBar style="dark" />
          <LandingStack />
        </NavigationContainer>
      </Context.Provider>
    );
  }

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        userData,
        setUserData,
        image,
        setImage,
        patient,
        setPatient,
        history,
        setHistory,
        scan,
        setScan,
      }}
    >
      <NavigationContainer>
        <StatusBar style="dark" />
        <HomeStack />
      </NavigationContainer>
    </Context.Provider>
  );
}
