import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Protected } from "./components/Protected/Protected";
import { Blank } from "./routes/Blank/Blank";
import { Chat } from "./routes/Chat/Chat";
import { ChatRoom } from "./routes/Chat/ChatRoom";
import { Login } from "./routes/Login/Login";
import { Signup } from "./routes/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <Protected>
        <App />
      </Protected>
    ),
    children: [
      {
        path: "/",
        element: <Blank />,
      },
      {
        path: "chat",
        element: <Chat />,
        children: [
          {
            path: "room/:senderId/:reciverId",
            element: <ChatRoom />,
          },
        ],
      },
    ],
  },
]);
