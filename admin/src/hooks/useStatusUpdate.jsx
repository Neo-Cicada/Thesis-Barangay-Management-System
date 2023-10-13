import React from 'react';
import { doc, updateDoc, getDoc,serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const useStatusUpdate = async (path, id, status) => {
  const documentRef = doc(db, path, id);

  try {
    // Fetch the existing document data
    const documentSnapshot = await getDoc(documentRef);
    if (documentSnapshot.exists()) {
      // Get the existing data
      const existingData = documentSnapshot.data();

      // Create an updated object with the new status
      const updatedData = {
            ...existingData.data,
            status: status,
            timestamp: serverTimestamp()

      };

      // Update the document with the new data
      await updateDoc(documentRef, updatedData);

      console.log('Updated!!!');
    } else {
      console.error('Document does not exist.');
    }
  } catch (error) {
    console.error("Can't update:", error);
  }
};

export default useStatusUpdate;
