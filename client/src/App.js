import "./App.css";
import io from "socket.io-client";
import { useEffect } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const sendMessage = () => {
    socket.emit("send", {
      message: "Hello world",
    });
  };

  useEffect(() => {
    socket.on("received", (data) => {
      alert(data.message);
    });
  }, [socket]);
  return (
    <div>
      <input placeholder="messagge..." />
      <button onClick={sendMessage}>Send messages</button>
    </div>
  );
}

export default App;
