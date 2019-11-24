import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseCredentials';
/************************
 * Firestore configurtion
 ***********************/
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

/************************
 * ability to use oauth signin with google
 *  can implement with other oauth services
 *************************/
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

/**
 *
 * @param {firebase.Observer <any | error>} authObj
 * @param {Object} additionalData
 * @returns {firebase.firestore.DocumentReference} firebase doc ref
 */
export const createUserProfileDocument = async (authObj, additionalData) => {
  if (!authObj) return;

  const userRef = authObj.uid
    ? firestore.collection('users').doc(authObj.uid)
    : firestore.collection('users').doc();
  const user = await userRef.get();
  if (!user.exists) {
    const { email, displayName } = authObj;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.error(e);
    }
  }
  return userRef;
};
