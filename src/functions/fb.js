import { firebase } from "../utils/fb.js";
import { format } from "date-fns";

export const save = async (
  image,
  diagnosis,
  userData,
  patient,
  setHistory,
  d
) => {
  let { id } = await firebase
    .firestore()
    .collection("scans")
    .add({
      patient: patient,
      image: image,
      diagnosis: diagnosis,
      date: d,
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

  if (pastScans.length > 0) {
    await firebase
      .firestore()
      .collection("userData")
      .doc(userData.uid)
      .update({
        pastScans: [
          {
            id: id,
            patient: patient,
            image: image,
            diagnosis: diagnosis,
            date: d,
            doctor: userData.firstName + " " + userData.lastName,
          },
          ...pastScans,
        ],
      });
    setHistory([
      {
        id: id,
        patient: patient,
        image: image,
        diagnosis: diagnosis,
        date: d,
        doctor: userData.firstName + " " + userData.lastName,
      },
      pastScans[0],
    ]);
  } else {
    await firebase
      .firestore()
      .collection("userData")
      .doc(userData.uid)
      .update({
        pastScans: [
          {
            id: id,
            patient: patient,
            image: image,
            diagnosis: diagnosis,
            date: d,
            doctor: userData.firstName + " " + userData.lastName,
          },
        ],
      });
    setHistory([
      {
        id: id,
        patient: patient,
        image: image,
        diagnosis: diagnosis,
        date: d,
        doctor: userData.firstName + " " + userData.lastName,
      },
    ]);
  }
};

export const read = async (uid, setData) => {
  await firebase
    .firestore()
    .collection("userData")
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) setData(doc.data().pastScans);
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

export const readHistory = async (id, setHistory) => {
  await firebase
    .firestore()
    .collection("userData")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        if (doc.data().pastScans.length >= 2)
          setHistory([doc.data().pastScans[0], doc.data().pastScans[1]]);
        else if (doc.data().pastScans.length == 1)
          setHistory([doc.data().pastScans[0]]);
      }
    });
};
