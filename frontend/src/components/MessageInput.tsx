import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import "../styles/MessageInput.scss";
import IMessage from "../models/IMessage";
import { SocketContext } from "../context/SocketProvider";
import { UserContext } from "../context/UserProvider";

export interface IMessageInput {
  // changeMessages:(arg: IMessage[]) => void;
}

const MessageInput: React.FC<IMessageInput> = ({}) => {
  const socket = useContext(SocketContext);
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState<IMessage>({
    email: user ? user : "",
    text: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setFormData({
      email: user ? user : "",
      text: formData.text,
    });
  }, [user]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket?.emit("sendMessage", formData);
  };
  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        id="text"
        name="text"
        placeholder="Enter your message"
        value={formData.text}
        onChange={handleChange}
      />

      <button className=" message_form-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default MessageInput;
