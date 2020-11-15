import firebase from 'firebase/app'
import 'firebase/storage' // If you need it
import 'firebase/analytics' // If you need it

// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }

const clientCredentials = {
  apiKey: 'AIzaSyDSVoXQZGv47Xx3C7yH6HyzmiV7SdZK7Yk',
  authDomain: 'tamastudy-c49ef.firebaseapp.com',
  databaseURL: 'https://tamastudy-c49ef.firebaseio.com',
  projectId: 'tamastudy-c49ef',
  storageBucket: 'tamastudy-c49ef.appspot.com',
  messagingSenderId: '574711615042',
  appId: '1:574711615042:web:0b530d857a08f41d69a7db',
  measurementId: 'G-XD4G6RZR12',
}

// Check that `window` is in scope for the analytics module!
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials)
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  if ('measurementId' in clientCredentials) firebase.analytics()
}

export default firebase