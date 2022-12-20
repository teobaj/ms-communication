import React, { FC } from "react";
import "./ChatMessage.css";
interface ChatMessageProps {
  name: string;
  message: string;
  date: string | Date;
}

export const ChatMessage: FC<ChatMessageProps> = ({ name, message, date }) => {
  return (
    <div className="chat-message">
      <span>{name}:</span>
      <span>{message}</span>
    </div>
  );
};
