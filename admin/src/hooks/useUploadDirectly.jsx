import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';


const useUploadDirectly = async (path, data) => {
    try {
      await addDoc(collection(db, path), data); // Pass data directly
      console.log("Uploaded!");
    } catch (error) {
      console.log(error);
    }
  };
export default useUploadDirectly;