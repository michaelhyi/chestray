import { firebase } from "../utils/fb.js";

export const save = async (image, diagnosis, userData, patient) => {
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
          date: new Date(),
          doctor: userData.firstName + " " + userData.lastName,
        },
        ...pastScans,
      ],
    });
};
