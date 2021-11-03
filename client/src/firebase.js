
const { FIREBASE_CONFIG_KEY,
  FIREBASE_CONFIG_AUTH_DOMAIN,
  FIREBASE_CONFIG_PROJECT_ID,
  FIREBASE_CONFIG_STORAGE_BUCKET,
  FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  FIREBASE_CONFIG_APP_ID,
  FIREBASE_CONFIG_MEASUREMENTID} = process.env;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: `${FIREBASE_CONFIG_KEY}`,
  authDomain: `${FIREBASE_CONFIG_AUTH_DOMAIN}`,
  projectId: `${FIREBASE_CONFIG_PROJECT_ID}`,
  storageBucket: `${FIREBASE_CONFIG_STORAGE_BUCKET}`,
  messagingSenderId: `${FIREBASE_CONFIG_MESSAGING_SENDER_ID}`,
  appId: `${FIREBASE_CONFIG_APP_ID}`,
  measurementId: `${FIREBASE_CONFIG_MEASUREMENTID}`
};

// Initialize Firebase

export default firebaseConfig;