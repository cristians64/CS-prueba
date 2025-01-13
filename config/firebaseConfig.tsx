// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD9BIM19xpxrk16HZnYRT_JgJ8ExUEGzE",
  authDomain: "cs-prueba-7c249.firebaseapp.com",
  projectId: "cs-prueba-7c249",
  storageBucket: "cs-prueba-7c249.firebasestorage.app",
  messagingSenderId: "1054407878268",
  appId: "1:1054407878268:web:ed1841d369de3068f20bf9",

  databaseURL:"https://cs-prueba-7c249-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Realtime Database and get a reference to the service
export const dbRealTime = getDatabase(app);


