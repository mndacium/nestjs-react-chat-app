import { ChangeEvent, FormEvent, useContext, useState } from "react";
import postMessage from "../fetch/postMessage";
import IMessage from "../models/IMessage";
import { SocketContext } from "../context/SocketProvider";
export interface IMessageBox {
  // changeMessages:(arg: IMessage[]) => void;
}

const MessageBox: React.FC<IMessageBox> = ({}) => {
  const socket = useContext(SocketContext);
  const [formData, setFormData] = useState<IMessage>({
    email: "",
    text: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket?.emit("sendMessage", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MessageBox;
