import { IconButton } from "@fluentui/react";
import { Button } from "@fluentui/react-components";
import { Send24Filled } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/atoms/Avatar";
import { ChatMessage } from "../../components/ChatMessage/ChatMessage";
import { useUserStore } from "../../store/useUserStore";
import "./ChatRoom.css";

interface Message {
  text: string;
  to: string;
  from: string;
  date: string;
}

export const ChatRoom = () => {
  const { senderId, reciverId } = useParams();
  const { id, apiKey } = useUserStore((state) => state);
  const SERVICE_URL = import.meta.env.VITE_SERVICE_URL;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const postNewMessage = async () => {
    try {
      const url = new URL(`chat/${senderId}/${reciverId}`, SERVICE_URL);
      const res = await fetch(url.href, {
        method: "POST",
        headers: {
          "x-key": apiKey,

          "content-type": "application/json",
        } as HeadersInit,
        body: JSON.stringify({
          message: { text: newMessage },
        }),
      });
      const data = await res.json();
      setNewMessage("");
      console.log(data);
    } catch (error) {
      //TODO: handle Errors;
    }
  };

  useEffect(() => {
    const url = new URL(`chat/${senderId}/${reciverId}`, SERVICE_URL);
    url.searchParams.append("key", apiKey ?? "");
    const eventSource = new EventSource(url.href);
    eventSource.addEventListener("message", (e) => {
      const data: Message = JSON.parse(e.data);
      setMessages((messages) => [data, ...messages]);
    });
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="chat-room">
      <header className="chat-room__header">
        <Avatar
          src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
          width={"48px"}
          height={"48px"}
        />
        <h2>Teodor</h2>
      </header>
      <div className="chat-room__messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.from === senderId ? "sender" : "reciver"}
          >
            <ChatMessage name={msg.from} message={msg.text} date={msg.date} />
          </div>
        ))}
      </div>
      <div className="chat-room__new-message">
        <input onChange={(e) => setNewMessage(e.target.value)}></input>
        <Button onClick={postNewMessage}>
          <Send24Filled></Send24Filled>
        </Button>
      </div>
    </div>
  );
};
