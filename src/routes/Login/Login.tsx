import { DefaultButton, PrimaryButton, TextField } from "@fluentui/react";
import "./Login.css";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useUserStore } from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useUserStore((state) => state.login);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="login__page">
      <form className="login__form">
        <h2>Login</h2>
        <TextField
          label="Username"
          type="text"
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
        <PrimaryButton text="Login" onClick={() => login(username, password)} />
        <DefaultButton text="SignUp" onClick={() => navigate("/signup")} />
      </form>
    </div>
  );
};
