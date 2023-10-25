import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

const useUpdateTimeSlot = async (itemId, slotKey) => {
    const docRef = doc(db, 'Facility', itemId);

    try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            const slots = data.slots;

            if (slots && typeof slots[slotKey] !== 'undefined') {
                delete slots[slotKey];

                // Convert the modified object back to an array
                const updatedSlots = Object.values(slots);

                await updateDoc(docRef, {
                    slots: updatedSlots
                });

                console.log(`Slot '${slotKey}' deleted successfully.`);
            } else {
                console.log(`Slot '${slotKey}' not found.`);
            }
        } else {
            console.log("Document not found");
        }
    } catch (error) {
        console.error(`Error deleting slot '${slotKey}': `, error);
    }
}


export default useUpdateTimeSlot;
