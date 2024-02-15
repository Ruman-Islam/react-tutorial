import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import createConnection from "../utils/createConnection";

export default function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  const onMessage = useEffectEvent(onReceiveMessage);
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };

    const connection = createConnection(options);
    connection.on("message", (msg) => {
      onMessage(msg);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
