import { initializeApp } from 'firebase/app'
import { getFirestore, doc, onSnapshot, updateDoc, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAdChTp2cjnZCss2dMrv56HOol-e7ZfeD0",
    authDomain: "virtualspaces-fb.firebaseapp.com",
    projectId: "virtualspaces-fb",
    storageBucket: "virtualspaces-fb.appspot.com",
    messagingSenderId: "12888717214",
    appId: "1:12888717214:web:39c083fe310f43cad7488f",
    measurementId: "G-YQMMVLYYP4"
})

const db = getFirestore(firebaseApp)

export const getDevice = (id, callback) => onSnapshot(doc(db, "devices", id), callback)
export const updateValue = (id, update) => updateDoc(doc(db, "devices", id), update)

export const getAll = (callback) => onSnapshot(collection(db, "devices"), callback)