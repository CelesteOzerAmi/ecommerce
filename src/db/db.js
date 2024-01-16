import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC2req1sUl5XrTJgQEIosz0D4QUy_CGe4I",
    authDomain: "my-ecommerce-ee5d3.firebaseapp.com",
    projectId: "my-ecommerce-ee5d3",
    storageBucket: "my-ecommerce-ee5d3.appspot.com",
    messagingSenderId: "614476850879",
    appId: "1:614476850879:web:d49fb228ee8ede80c3880a"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db