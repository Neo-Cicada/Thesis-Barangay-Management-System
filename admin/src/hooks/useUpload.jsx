import { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useUpload = async (path) => {
  try{
    await addDoc(collection(db, path),{
      type: 'success',
      quantity: 'sucess'
    })
    console.log("Uploaded!")
  }catch(error){
    console.log(error)
  }
};

export default useUpload;