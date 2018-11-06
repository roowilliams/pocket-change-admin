import firebase from 'firebase/app'
import 'firebase/auth'

const devConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY_DEV,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL_DEV,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_DEV,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID_DEV
}

// for the future
// const prodConfig = {
//     apiKey: YOUR_API_KEY,
//     authDomain: YOUR_AUTH_DOMAIN,
//     databaseURL: YOUR_DATABASE_URL,
//     projectId: YOUR_PROJECT_ID,
//     storageBucket: '',
//     messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// }

// const config = process.env.NODE_ENV === 'production'
// ? prodConfig
// : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(devConfig)
}

export const auth = firebase.auth()
