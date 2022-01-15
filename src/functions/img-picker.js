import * as ImagePicker from "expo-image-picker";
import { useContext } from "react";
import Context from "../utils/context.js";

export const pickImage = async () => {
  const { image, setImage } = useContext(Context);

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
