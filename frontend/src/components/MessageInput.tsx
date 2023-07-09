import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import "../styles/MessageInput.scss";
import IMessage from "../models/IMessage";
import { SocketContext } from "../context/SocketProvider";
import { UserContext } from "../context/UserProvider";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import CustomTextField from "./CustomTextField";
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

  const handleSubmit = async () => {
    socket?.emit("sendMessage", formData);
  };
  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <div className="input_wrapper">
        <CustomTextField
          id="standard-basic"
          label="Enter your message"
          fullWidth
          variant="standard"
        />
      </div>

      <Button
        sx={{ background: "#499ce3" }}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
