import create from "zustand";

import { devtools, persist } from "zustand/middleware";
const SERVICE_URL = import.meta.env.VITE_SERVICE_URL;

export interface UserStore {
  id?: number;
  username?: string;
  loading: boolean;
  error?: string;
  apiKey?: string;
  isLoggedIn: boolean;
  success?: boolean;
  login: (username: string, password: string) => void;
  signup: (username: string, password: string) => void;
  toggleSuccess: () => void;
}

const initialState: Pick<UserStore, "isLoggedIn" | "loading" | "success"> = {
  isLoggedIn: false,
  loading: false,
  success: false,
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        signup: async (username, password) => {
          try {
            set((state) => ({ ...state, loading: true }));
            const url = new URL("auth/signup", SERVICE_URL);
            const res = await fetch(url.href, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ name: username, password: password }),
            });
            const data = await res.json();
            if (res.ok) {
              set((state) => ({ ...state, success: true }));
            } else {
              throw new Error("Failed to login");
            }
          } catch (error: any) {
            set((state) => ({ ...state, error: error.message }));
          } finally {
            set((state) => ({ ...state, loading: false }));
          }
        },
        login: async (username, password) => {
          try {
            set((state) => ({ ...state, loading: true }));
            const url = new URL("auth/login", SERVICE_URL);
            const res = await fetch(url.href, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ name: username, password: password }),
            });
            const data = await res.json();
            if (res.ok) {
              set((state) => ({
                ...state,
                username,
                apiKey: data.apiKey,
                id: data.id,
                isLoggedIn: true,
              }));
            } else {
              throw new Error("Failed to login");
            }
          } catch (error: any) {
            set((state) => ({ ...state, error: error.message }));
          } finally {
            set((state) => ({ ...state, loading: false }));
          }
        },
        toggleSuccess: () => set((state) => ({ ...state, success: false })),
      }),
      {
        name: "user-store",
      }
    )
  )
);
