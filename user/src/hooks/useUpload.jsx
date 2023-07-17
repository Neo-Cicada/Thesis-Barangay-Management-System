import { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useUpload = async (data, path) => {
  try{
    await addDoc(collection(db, path),{
        data
    })
    console.log("Uploaded!")
  }catch(error){
    console.log(error)
  }
};

export default useUpload;