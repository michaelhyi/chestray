import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import LandingStack from "./src/components/landing-stack.js";

import Home from "./src/screens/home.js";

import Context from "./src/utils/context.js";
import { firebase } from "./src/utils/fb.js";

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) setUser(user);
    });
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        {user && <Home />}
        {!user && <LandingStack />}
      </NavigationContainer>
    </Context.Provider>
  );
}
