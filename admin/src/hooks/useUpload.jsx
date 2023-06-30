import { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
const useUpload = (formName, formNumber, path) => {
  useEffect(() => {
    const addDocumentToCollection = async () => {
      try {
        const docRef = await addDoc(collection(db, path), {
          type: formName,
          quantity: formNumber
        });
        console.log('Document added with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    };

    addDocumentToCollection();
  }, [formName && formNumber]);
};

export default useUpload;