import React from 'react'
import { collection, doc, deleteDoc} from "firebase/firestore";
import { db } from '../firebase'
const useDelete = async(path, id,) => {
  try {
    await deleteDoc(doc(db, path, id)).then(()=>console.log('deleted successfuly!'))
  } catch (error) {
    console.log("Can't delete", error);
  }
}

export default useDelete