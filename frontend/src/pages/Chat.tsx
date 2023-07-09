import MessageInput from "../components/MessageInput";
import { useEffect, useState, useContext } from "react";
import IMessage from "../models/IMessage";
import MessageComponent from "../components/MessageComponent";
import { SocketContext } from "../context/SocketProvider";
import { UserContext } from "../context/UserProvider";
import "../styles/Chat.scss"

export interface IChat {
    
  }
  
  const Chat: React.FC<IChat> = () => {
    const [error, setError] = useState<Error | null>(null);
  const [messages, setMessages] = useState<IMessage[] | null>(null);
  const socket = useContext(SocketContext);
  const user = useContext(UserContext)

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


  if (!user) {
    return (
      <div className="container">
      <h1>Login pls</h1>
      </div>
    );
  }

  return (
   <>

      <main className="main">
      <div className="container">
        <div className="messages-container">
          {messages &&
            messages.map((message, index) => (
              <MessageComponent
                key={index}
                isUserMessage={message.email === "user"}
                email={message.email}
                text={message.text}
              />
            ))}
        </div>
        <MessageInput />
        </div>
      </main>
   </>
      
  );
  };
  
  export default Chat;
  