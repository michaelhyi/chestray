import { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Context from "../utils/context.js";

export default function Home({ navigation }) {
  const { image, setImage } = useContext(Context);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
      navigation.navigate("Results");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text>Upload an Image</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
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
