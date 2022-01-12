//Importas la funcion de incializacion de la app
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC0M63_ZpejlOkHg1hgbFlzEl5Id5hmxD4",
    authDomain: "comision-19770.firebaseapp.com",
    projectId: "comision-19770",
    storageBucket: "comision-19770.appspot.com",
    messagingSenderId: "517300331977",
    appId: "1:517300331977:web:d6cd6ff3beee760b16f418"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
//1)obtener una referencia a la db
//2)obtener una referencia a la coleccion