import "./App.scss";
import MessageBox from "./components/MessageBox";
import { useEffect, useState, useContext } from "react";

import IMessage from "./models/IMessage";
import MessageComponent from "./components/MessageComponent";
import { Socket } from "socket.io-client";
import { SocketContext } from "./context/SocketProvider";

export interface IApp {}

const App: React.FC<IApp> = () => {
  const [error, setError] = useState<Error | null>(null);
  const [messages, setMessages] = useState<IMessage[] | null>();
  const socket = useContext(SocketContext);
  useEffect(() => {
    if (socket) {
      // Request messages from the server
      socket.emit("getMessages");

      // Handling the response from the server
      socket.on("messageResponse", (messages) => {
        setMessages(messages);
      });
      socket.on("getMessages", () => {
        socket.emit("getMessages"); // Request updated messages from the server
      });
      console.log("socket re triggers");
      // Clean up event listeners when the component unmounts or when the socket is updated
      return () => {
        socket.off("messageResponse");
        socket.off("error");
      };
    } else {
      console.log("Socket is not ready yet");
    }
  }, [socket]);
  return (
    <div className="container">
      {error && <div>{error.message}</div>}
      <div className="messages-container">
        {messages &&
          messages.map((message) => {
            return (
              <>
                <MessageComponent
                  isUserMessage={message.email === "user"}
                  email={message.email}
                  text={message.text}
                ></MessageComponent>
              </>
            );
          })}
          <MessageBox></MessageBox>
      </div>
    </div>
  );
};

export default App;
