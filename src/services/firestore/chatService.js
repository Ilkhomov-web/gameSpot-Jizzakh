
import { db } from '../../firebase/firebaseConfig';
import { doc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';

export const sendMessageToRoom = async (roomId, message) => {
  if (!roomId) {
    console.error("roomId yo‘q — Firestore path xatosi");
    return;
  }

  const roomRef = doc(db, "rooms", String(roomId)); 

  try {
    await updateDoc(roomRef, {
      messages: arrayUnion({
        text: message,
        sender: "user",
        createdAt: serverTimestamp(),
      }),
    });
    console.log("Message Firestore’ga yozildi");
  } catch (err) {
    console.error("Firestore yozishda xato:", err);
  }
};
