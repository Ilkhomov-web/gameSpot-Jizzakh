import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig"; 

export const getRoomById = async (roomId) => {
  if (!roomId) throw new Error("Room ID berilmagan");

  const docRef = doc(db, "rooms", roomId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Room topilmadi");
  }

  return { id: docSnap.id, ...docSnap.data() };
};
