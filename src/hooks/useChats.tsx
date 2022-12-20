import React, { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useEnvVars } from "./useEnvVars";

export interface Chat {
  id: number;
  name: string;
  lastMessage?: string;
  lastDate?: string;
  avatarSrc: string;
}

export const useChats = () => {
  const [chatsId, setChatsId] = useState<number[][]>([]);
  const userId = useUserStore((state) => state.id);
  const apiKey = useUserStore((state) => state.apiKey);

  const [chats, setChats] = useState<Chat[]>([]);

  const { VITE_SERVICE_URL } = import.meta.env;
  const fetchChats = async () => {
    if (VITE_SERVICE_URL) {
      const url = new URL(`chats/${userId}`, VITE_SERVICE_URL);
      const res = await fetch(url.href, {
        headers: {
          "x-key": apiKey,
        } as any,
      });
      const data = await res.json();
      if (res?.ok) {
        setChatsId(data.chats);
      }
    }
  };

  useEffect(() => {
    const chatUsersIds: number[] = chatsId
      ?.reduce((prev, current) => {
        console.log(prev, current, chatsId);
        return [...prev, ...current];
      }, [])
      .filter((id: number) => id !== userId);
    fetchAlluserInfo(chatUsersIds);
  }, [chatsId]);

  useEffect(() => {
    if (userId) {
      fetchChats();
    }
  }, [userId]);

  const fetchUserInfo = async (id: number) => {
    const url = new URL(`user/info/${id}`, VITE_SERVICE_URL);
    const res = await fetch(url.href);
    const data = await res.json();
    return data;
  };

  const fetchAlluserInfo = async (ids: number[]) => {
    const data = await Promise.all(ids.map((id) => fetchUserInfo(id)));
    const chats: Chat[] = data.map((user) => ({
      ...user,
      lastMessage: "hello",
      avatarSrc:
        "https://avatars.dicebear.com/api/male/john.svg?background=%230000ff",
    }));
    setChats(chats);
  };

  return { chats };
};
