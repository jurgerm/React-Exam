import { useState } from "react";
import { MessagesContext } from "../hooks/MessagesContext";

// extract email from jwt

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(
    {
      message: null
    }
  );

  const addMessage = (messageText) => {
    console.log({ messageText});
    setMessage(({
      message: messageText
    }));
  };

  const removeMessage = () => {
    console.log('removeMessage ', { message });
    setMessage({
      message: null
    });
  };

  const value = { ...message, addMessage, removeMessage };

  return <MessagesContext.Provider value={value}>{children}</MessagesContext.Provider>;
};
