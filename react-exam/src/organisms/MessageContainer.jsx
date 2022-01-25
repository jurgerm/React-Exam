import { useMessagesContext } from "../hooks/MessagesContext";

export const MessageContainer = () => {

  const aaaa = useMessagesContext();
  console.log({ aaaa });

  const { message, removeMessage } = useMessagesContext();
  console.log({ message });


  const closeMessage = () => {
    removeMessage();
  };

  const messageContainerContent = (message != null) ? (
    <div className="messageContainer">
      <span className="content">{message}</span>
      <button data-testid="notification-submit-button" onClick={closeMessage}>
        X
      </button>
    </div >
  ) : null;

  return (
    <div className="messageContainerPlaceholder">
      {messageContainerContent}
    </div>
  );
}
