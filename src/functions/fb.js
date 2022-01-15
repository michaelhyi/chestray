import { firebase } from "../utils/fb.js";
import { format } from "date-fns";

export const save = async (image, diagnosis, userData, patient) => {
  let { id } = await firebase
    .firestore()
    .collection("scans")
    .add({
      patient: patient,
      image: image,
      diagnosis: diagnosis,
      date: format(new Date(), "MM/dd/yyyy p"),
      doctor: userData.firstName + " " + userData.lastName,
    });

  let pastScans = [];
  await firebase
    .firestore()
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
          date: format(new Date(), "MM/dd/yyyy p"),
          doctor: userData.firstName + " " + userData.lastName,
        },
        ...pastScans,
      ],
    });
};

export const read = async (uid, setData) => {
  await firebase
    .firestore()
    .collection("userData")
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) setData(doc.data().scans);
    });
};

export const readDiag = async (id, setData) => {
  await firebase
    .firestore()
    .collection("scans")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) setData(doc.data());
    });
};
