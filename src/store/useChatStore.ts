import create from "zustand";

import { devtools, persist } from "zustand/middleware";
import { useUserStore } from "./useUserStore";
const SERVICE_URL = import.meta.env.VITE_SERVICE_URL;

export interface ChatStore {
  chats: {};
  initateChat: (id: number) => void;
}

const initialState = {
  chats: {},
};

export const useChatStore = create<ChatStore>()(
  devtools(
    persist((set) => ({
      ...initialState,
      initateChat: (id: number) => {
        console.log("called");
      },
    }))
  )
);
