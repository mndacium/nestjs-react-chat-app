export interface IMessageComponent {
  email: string;
  text: string;
}

const MessageComponent: React.FC<IMessageComponent> = ({ email, text }) => {
  return (
    <div>
      <p>{email}</p>
      <p>{text}</p>
    </div>
  );
};

export default MessageComponent;
