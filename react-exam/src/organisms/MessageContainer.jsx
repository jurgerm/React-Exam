import { useMessagesContext } from "../hooks/MessagesContext";
import { StyButton } from "../atoms/StyButton";

export const MessageContainer = () => {
  
  const { message, removeMessage } = useMessagesContext();
  console.log({ message });

  const closeMessage = () => {
    removeMessage();
  };

  const messageContainerContent = (message != null) ? (
    <div className="messageContainer">
      <span className="content">{message}</span>
      <StyButton onClick={closeMessage}>
        X
      </StyButton>
    </div >
  ) : null;

  return (
    <div className="messageContainerPlaceholder">
      {messageContainerContent}
    </div>
  );
}
