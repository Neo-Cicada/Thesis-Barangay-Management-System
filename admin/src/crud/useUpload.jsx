import { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useUpload = async (formName, formNumber, path) => {
  try{
    await addDoc(collection(db, path),{
      type: formName,
      quantity: formNumber
    })
    console.log("Certificate Uploaded!")
  }catch(error){
    console.log(error)
  }
};

export default useUpload;