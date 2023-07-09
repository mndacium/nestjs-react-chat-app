import "../styles/MessageComponent.scss";
export interface IMessageComponent {
  isUserMessage: boolean;
  email: string;
  text: string;
}

const MessageComponent: React.FC<IMessageComponent> = ({
  isUserMessage,
  email,
  text,
}) => {
  const className = isUserMessage ? "user-message" : "other-user-message";

  return <div className={`message ${className}`}>{text}</div>;
};

export default MessageComponent;
