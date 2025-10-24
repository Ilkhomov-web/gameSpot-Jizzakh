import { useEffect, useState } from "react";
import { listenMessages } from "../services/firestore/messageService";

export default function useMessages(roomId) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!roomId) return;
    const unsub = listenMessages(roomId, setMessages);
    return () => unsub();
  }, [roomId]);

  return messages;
}
