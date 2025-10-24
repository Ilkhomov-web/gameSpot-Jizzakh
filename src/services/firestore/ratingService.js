import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function addRating(roomId, userId, rating, comment) {
  await addDoc(collection(db, "ratings"), {
    roomId,
    userId,
    rating,
    comment,
    timestamp: serverTimestamp(),
  });
}
