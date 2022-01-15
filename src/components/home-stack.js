import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home.js";
import PastScans from "../screens/past-scans.js";
import ViewScan from "../screens/view-scan.js";

const Stack = createStackNavigator();

export default function LandingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Past Scans" component={PastScans} />
      <Stack.Screen name="View Scan" component={ViewScan} />
    </Stack.Navigator>
  );
}
