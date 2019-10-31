import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYG2ElNaz3kP72zQGOmFTz_mCXTf2A1tI",
    authDomain: "abedy-plan.firebaseapp.com",
    databaseURL: "https://abedy-plan.firebaseio.com",
    projectId: "abedy-plan",
    storageBucket: "abedy-plan.appspot.com",
    messagingSenderId: "760411128726",
    appId: "1:760411128726:web:fe9a3149fd9c7cd2d593b7",
    measurementId: "G-GLWB1F89DL"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots:true })

export default firebase;
