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

  return (
    <div className={`message_box ${className}`}>
      {!isUserMessage && <div className="email">{email}</div>}
      <div className={`message ${className}`}>{text}</div>
    </div>
  );
};

export default MessageComponent;
