import { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useUpload = async (name, number, path) => {
  try{
    await addDoc(collection(db, path),{
      type: name,
      quantity: number
    })
    console.log("Uploaded!")
  }catch(error){
    console.log(error)
  }
};

export default useUpload;