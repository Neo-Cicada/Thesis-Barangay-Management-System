import { useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const useUpload = async (data, path) => {
  try {
    const futureTimestamp = new Date();
    futureTimestamp.setFullYear(futureTimestamp.getFullYear() + 2);
    await addDoc(collection(db, path),
      {
        ...data,
        status: 'request',
        timestamp: serverTimestamp(),
        futureTimestamp: futureTimestamp,
      }
    )
    console.log("Uploaded!")
  } catch (error) {
    console.log(error)
  }
};

export default useUpload;