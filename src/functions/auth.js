import * as Google from "expo-google-app-auth";

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      // androidClientId: YOUR_CLIENT_ID_HERE,
      behavior: "web",
      iosClientId:
        "884038989558-6qm7bi6neqbp421ojkcjntp92k8r5e1t.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};
