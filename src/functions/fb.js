import * as firebase from "firebase";
import { useContext } from "react";

import Context from "../utils/context.js";

export const saveScan = async (image, diagnosis) => {
  let { userData, patient } = useContext(Context);
  let { id } = await firebase
    .firestore()
    .collection("scans")
    .add({
      patient: patient,
      image: image,
      diagnosis: diagnosis,
      date: new Date(),
      doctor: userData.firstName + " " + userData.lastName,
    });

  let pastScans = [];
  await firebase.firestore
    .collection("userData")
    .doc(userData.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        pastScans = doc.data().pastScans;
      }
    });

  await firebase
    .firestore()
    .collection("userData")
    .doc(userData.uid)
    .update({
      scans: [
        {
          id: id,
          patient: patient,
          image: image,
          diagnosis: diagnosis,
          date: new Date(),
          doctor: userData.firstName + " " + userData.lastName,
        },
        ...pastScans,
      ],
    });
};
