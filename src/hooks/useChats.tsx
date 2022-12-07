import React, { useEffect, useState } from "react";

export const useChats = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const res = await fetch("http://localhost:3000/chats");
    const data = await res.json();
    if (res?.ok) {
      setChats(data.results);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return { chats };
};
