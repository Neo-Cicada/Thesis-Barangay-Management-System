import { useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const useRecent = (collectionPath, setData) => {
    useEffect(() => {
        const activitiesRef = collection(db, collectionPath);
        const q = query(activitiesRef, orderBy('timestamp', 'desc'), limit(5));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const activityData = querySnapshot.docs.map((doc) => doc.data());
            setData(activityData);
        });

        return unsubscribe;
    }, [collectionPath, setData]);
};

export default useRecent;
