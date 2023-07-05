import React, { useEffect } from 'react';
import { collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const useRead = (path, setData) => {
  useEffect(() => {
    const collectionRef = collection(db, path);
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setData(newData);
    });

    return () => unsubscribe();
  }, []);
};



export default useRead;
