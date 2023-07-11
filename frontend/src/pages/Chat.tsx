import MessageInput from "../components/MessageInput";
import { useEffect, useState, useContext, useRef } from "react";
import IMessage from "../models/IMessage";
import MessageComponent from "../components/MessageComponent";
import { SocketContext } from "../context/SocketProvider";
import { UserContext } from "../context/UserProvider";
import "../styles/Chat.scss";

export interface IChat {}

const Chat: React.FC<IChat> = () => {
  const [error, setError] = useState<Error | null>(null);
  const [messages, setMessages] = useState<IMessage[] | null>(null);
  const [latestMessage, setLatestMessage] = useState<IMessage | null>(null);
  const socket = useContext(SocketContext);
  const { user } = useContext(UserContext);
  const bottomRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (socket) {
      // Request messages from the server
      socket.emit("getMessages");

      // Handling the response from the server
      socket.on("messageResponse", (receivedMessages) => {
        receivedMessages = receivedMessages.reverse();
        setMessages(receivedMessages);
      });

      socket.on("getMessages", () => {
        socket.emit("getMessages"); // Request updated messages from the server
      });

      console.log("socket re-triggers");

      // Clean up event listeners when the component unmounts or when the socket is updated
      return () => {
        socket.off("messageResponse");
        socket.off("error");
      };
    } else {
      console.log("Socket is not ready yet");
    }
  }, [socket]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!user) {
    return (
      <div className="container">
        <h1>Login pls</h1>
      </div>
    );
  }
  console.log(user);
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="messages-container">
            {messages &&
              messages.map((message, index) => (
                <MessageComponent
                  key={index}
                  isUserMessage={message.email === user}
                  email={message.email}
                  text={message.text}
                />
              ))}
              <div ref={bottomRef} />
          </div>
          
          <MessageInput />
        </div>
      </main>
    </>
  );
};

export default Chat;
