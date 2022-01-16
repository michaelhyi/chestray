import { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator, Image } from "react-native";

import { process } from "../functions/tf.js";
import { save } from "../functions/fb.js";

import Context from "../utils/context.js";

export default function Results() {
  const { image, userData, patient, setHistory } = useContext(Context);
  const [processing, setProcessing] = useState(true);
  const [diagnosis, setDiagnosis] = useState(undefined);

  useEffect(() => {
    process(image, setDiagnosis, setProcessing);
  }, []);

  useEffect(() => {
    if (diagnosis) {
      save(image, diagnosis, userData, patient, setHistory);
    }
  }, [diagnosis]);

  if (processing) {
    <View style={styles.container}>
      <Text>Processing...</Text>
      <ActivityIndicator />
    </View>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.uri }} />
      <Text>{diagnosis}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
