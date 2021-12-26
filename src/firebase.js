import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCQdPZM-mobILIEWIsFK_8cZW10rUg8hWo",
    authDomain: "snory-ea017.firebaseapp.com",
    projectId: "snory-ea017",
    storageBucket: "snory-ea017.appspot.com",
    messagingSenderId: "247790068597",
    appId: "1:247790068597:web:99877fa6e135ba5b6b293c",
    measurementId: "G-P8MR65X9WD"
  };

  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app);

