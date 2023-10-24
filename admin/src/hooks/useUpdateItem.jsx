import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

const useUpdateItem = async (path, id, newQuantity, type="minus") => {
    try {
        // Get a reference to the document
        const docRef = doc(db, path, id);

        // Get the current document data
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            // Get the current quantity from the document
            const currentData = docSnapshot.data();
            const currentQuantity = currentData.quantity;

            // Calculate the new quantity by subtracting the change
            const updatedQuantity = currentQuantity - newQuantity
            const returnQuantity = currentQuantity + newQuantity
            // Update the document with the new quantity
            await updateDoc(docRef, {
                quantity: type==="minus" ? updatedQuantity: returnQuantity
            });

            console.log('Updated!!!');

            // Return the updated quantity for reference
            return updatedQuantity;
        } else {
            console.log('Document does not exist.');
        }
    } catch (error) {
        console.log('Error updating document:', error);
    }
}

export default useUpdateItem;
