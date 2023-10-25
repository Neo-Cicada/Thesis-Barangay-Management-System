import { collection, addDoc, serverTimestamp,  } from 'firebase/firestore';
import { db } from '../firebase';

const useUpload = async (path, data) => {
  try{
    await addDoc(collection(db, path),
      {...data,
        timestamp: serverTimestamp(),
      }
    )
    console.log("Uploaded!")
  }catch(error){
    console.log(error)
  }
};

export default useUpload;