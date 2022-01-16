import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import Item from "../components/item.js";

import { read } from "../functions/fb.js";

import Context from "../utils/context.js";

export default function PastScans({ navigation }) {
  const { userData } = useContext(Context);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    read(userData.uid, setData);
  }, []);

  const renderItem = ({ item }) => (
    <Item
      onPress={() => {
        navigation.navigate("View Scan");
      }}
      patient={item.patient}
      diagnosis={item.diagnosis}
      date={item.date}
    />
  );

  if (data) {
    return (
      <View style={styles.container}>
        <Text>Past Scans Screen</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    );
  }

  return <ActivityIndicator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
