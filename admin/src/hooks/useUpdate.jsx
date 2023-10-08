import React from 'react'
import { collection, doc, setDoc, addDoc, QuerySnapshot, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'
const useUpdate = async (path,id, item) => {

        const data = doc(db, path, id)
        console.log(id)
        try {
            await updateDoc(data, 
                item
            ).then(
                console.log('Updated!!!')
                )
        } catch (error) {
            console.log("Cant Update", error)
        }
    }

export default useUpdate
