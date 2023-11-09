import React from 'react';
import { doc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const useUpdatePayment = async (path, id, details) => {
    const documentRef = doc(db, path, id);

    try {
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
            const existingData = documentSnapshot.data();

            if (!existingData.paymentDetails) {
                existingData.paymentDetails = [];
            }

            existingData.paymentDetails.push(...details);

            const updatedData = {
                ...existingData,
                timestamp: serverTimestamp()
            };

            await updateDoc(documentRef, updatedData);

            console.log('Updated!!!');
        } else {
            console.error('Document does not exist.');
        }
    } catch (error) {
        console.error("Can't update:", error);
    }
};

export default useUpdatePayment;