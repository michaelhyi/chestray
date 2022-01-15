import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import LandingStack from "./src/components/landing-stack.js";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <LandingStack />
    </NavigationContainer>
  );
}
