import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getAllRooms = async () => {
  const snapshot = await getDocs(collection(db, "rooms"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getRoomById = async (roomId) => {
  try {
    const ref = doc(db, "rooms", roomId);
    const snap = await getDoc(ref);
    if (!snap.exists()) throw new Error("Room not found");
    return { id: snap.id, ...snap.data() };
  } catch (error) {
    console.error("Error fetching room:", error);
    throw error;
  }
};
