import { db } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export function listenMessages(roomId, callback) {
  const q = query(
    collection(db, "messages"),
    where("roomId", "==", roomId),
    orderBy("timestamp", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(messages);
  });
}

export async function sendMessage(roomId, userId, username, text) {
  await addDoc(collection(db, "messages"), {
    roomId,
    userId,
    username,
    text,
    timestamp: serverTimestamp(),
  });
}
