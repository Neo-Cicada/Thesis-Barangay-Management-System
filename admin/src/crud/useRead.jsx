import React, { useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const useRead = (path, setData) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, path);
        const querySnapshot = await getDocs(collectionRef);
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
};

export default useRead;
