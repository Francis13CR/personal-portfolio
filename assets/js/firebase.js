  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase.js
import config from './config.js';
let isNetlify = true;
const firebaseConfig = {
  apiKey: isNetlify === true ? process.env.API_KEY : config.apiKey,
  authDomain: isNetlify === true ? process.env.AUTH_DOMAIN : config.authDomain,
  projectId: isNetlify === true ? process.env.PROJECT_ID : config.projectId,
  storageBucket: isNetlify === true ? process.env.STORAGE_BUCKET : config.storageBucket,
  messagingSenderId: isNetlify === true ? process.env.MESSAGING_SENDER_ID : config.messagingSenderId,
  appId: isNetlify === true ? process.env.APP_ID : config.appId,
  measurementId: isNetlify === true ? process.env.MEASUREMENT_ID : config.measurementId
};
console.log(firebaseConfig);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  let proyectos = [];
  export async function getBlogPosts() {
    const querySnapshot = await getDocs(collection(db, 'proyectos'));
    querySnapshot.forEach((doc) => {
      proyectos.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    //pasar el createdAt a un objeto Date js
    proyectos = proyectos.map((proyecto) => {
      return {
        ...proyecto,
       created_at: new Date(proyecto.created_at.seconds * 1000).toLocaleDateString(),
       subtitle: proyecto.description.substring(0, 170) + '...'
      }
    });
    return proyectos;
  }
