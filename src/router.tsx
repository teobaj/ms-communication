import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Chat } from "./routes/Chat/Chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "chat",
        element: <Chat />,
      },
    ],
  },
]);
