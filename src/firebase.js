import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCYvBDrIDJLHtamiCJsw8LlnTq_QMQcm0Y",
    authDomain: "fir-89b52.firebaseapp.com",
    projectId: "fir-89b52",
    storageBucket: "fir-89b52.appspot.com",
    messagingSenderId: "380765793472",
    appId: "1:380765793472:web:6390e1f36e22413b259125",
    measurementId: "G-Q72HZ4DT3P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { provider, auth};
  export default db;