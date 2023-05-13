import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4y9hKSzNy0l75Iak7zSdI0rNTkDGBNC0",
  authDomain: "netflixe-clone-1d013.firebaseapp.com",
  projectId: "netflixe-clone-1d013",
  storageBucket: "netflixe-clone-1d013.appspot.com",
  messagingSenderId: "283889238483",
  appId: "1:283889238483:web:8cf5848503f1c7a8d22f26",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const getproducts = async () => {
    const dbproducts = await getDocs(collection(db, "products"));
    const filtreddata = dbproducts.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // setProducts(filtreddata);
    console.log(filtreddata);
  };

  useEffect(() => {
    getproducts();
  });
  return <div className="plansscreen"></div>;
}

export default PlansScreen;
