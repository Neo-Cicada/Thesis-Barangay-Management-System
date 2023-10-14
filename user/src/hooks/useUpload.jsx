import { useEffect } from 'react';
import { collection, addDoc, serverTimestamp  } from 'firebase/firestore';
import { db } from '../firebase';

const useUpload = async (data, path) => {
  try{
    await addDoc(collection(db, path),
        {...data,
        timestamp: serverTimestamp(),}
      )
    console.log("Uploaded!")
  }catch(error){
    console.log(error)
  }
};

export default useUpload;