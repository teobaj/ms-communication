import { Image, List } from "@fluentui/react";
import { Button } from "@fluentui/react-components";
import React from "react";
import { Avatar } from "../../components/atoms/Avatar";
import { useChats } from "../../hooks/useChats";
import { formatDate } from "../../utils/formatDate";
import {
  Filter24Filled,
  Chat24Regular,
  ChevronDown24Regular,
} from "@fluentui/react-icons";
import "./ChatList.css";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  lastDate: string;
  avatarSrc: string;
}

export const ChatList = () => {
  const { chats } = useChats();

  return (
    <div className="chat-list">
      <Header></Header>
      <List items={chats} onRenderCell={onCellRender}></List>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <h2>Chat</h2>
        <Button appearance="transparent">
          <ChevronDown24Regular />
        </Button>
      </div>

      <div className="header__buttons">
        <Button appearance="transparent">
          <Filter24Filled />
        </Button>
        <Button appearance="transparent">
          <Chat24Regular />
        </Button>
      </div>
    </div>
  );
};

const onCellRender = (item?: Chat) => {
  return (
    <div className="cell">
      <Avatar src={item?.avatarSrc} width={"48px"} height={"48px"} />
      <div className="cell__main">
        <h4>{item?.name}</h4>
        <span>{item?.lastMessage}</span>
      </div>

      <span>{formatDate(item?.lastDate ?? "")}</span>
    </div>
  );
};
