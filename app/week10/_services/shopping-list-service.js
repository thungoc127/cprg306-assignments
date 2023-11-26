import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
  
 
  
  // Get one Item by userId 
  export const getItems = async (userId) => {
    try {
      const docRef = doc(db, "users", userId,"items" );
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const event = { id: docSnap.id, ...docSnap.data() };
        console.error("Error in getEvent: ", event);
        return event;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error in getEvent: ", error);
    }
  };
  
    // Add a new event
  export const addItem = async (item,userId) => {
    try {
      if (!item.name || !item.quantity || !item.category) {
        throw new Error(
          "The event object is missing required fields (name, date, or location)."
        );
      }
  
      const itemCollection = collection(db, "users",userId,"items");
      const docRef = await addDoc(itemCollection, item);
      return docRef.id;
    } catch (error) {
      console.error("Error in addItem:", error);
    }
  };