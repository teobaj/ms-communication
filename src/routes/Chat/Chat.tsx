import React from "react";
import { Outlet } from "react-router-dom";
import { ChatList } from "./ChatList";
import "./Chat.css";
export const Chat = () => {
  return (
    <div className="chat">
      <ChatList />
      <Outlet />
    </div>
  );
};
