  // Import the functions you need from the SDKs you need
  import { initializeApp }  from 'firebase/app';
  import { getFirestore, getDocs, collection } from 'firebase/firestore';
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase.js

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};


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
        created_at: new Date((proyecto.created_at?.seconds ?? 0) * 1000).toLocaleDateString(),
        subtitle: (proyecto.description?.substring(0, 170) ?? '') + '...'
      }
    });
    return proyectos;
  }
