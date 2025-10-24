import { useEffect, useState } from "react";
import { listenRoomMessages } from "../services/firestore/chatService";

export default function useRoomMessages(roomId) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!roomId) return;
    const unsub = listenRoomMessages(roomId, setMessages);
    return () => unsub();
  }, [roomId]);

  return messages;
}
