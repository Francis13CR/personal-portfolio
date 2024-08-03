  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvl_koSWKCARcUZUZQ02J1-OKQeoHmLGQ",
    authDomain: "portafolio-41e1c.firebaseapp.com",
    projectId: "portafolio-41e1c",
    storageBucket: "portafolio-41e1c.appspot.com",
    messagingSenderId: "283651430287",
    appId: "1:283651430287:web:64014a6190e2e81019ddfa",
    measurementId: "G-MZR6XERDR3"
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
       created_at: new Date(proyecto.created_at.seconds * 1000).toLocaleDateString(),
       subtitle: proyecto.description.substring(0, 170) + '...'
      }
    });
    return proyectos;
  }
