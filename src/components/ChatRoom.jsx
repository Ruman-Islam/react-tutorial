import { useState } from "react";
import useChatRoom from "../hooks/useChatRoom";
import showNotification from "../utils/showNotification";

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useChatRoom({
    serverUrl: serverUrl,
    roomId: roomId,
    onReceiveMessage(msg) {
      showNotification("New message: " + msg);
    },
  });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
