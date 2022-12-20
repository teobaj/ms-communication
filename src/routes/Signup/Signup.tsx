import { DefaultButton, PrimaryButton, TextField } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import "./Signup.css";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, success, toggleSuccess } = useUserStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      toggleSuccess();
      navigate("/login");
    }
  }, [success]);

  return (
    <div className="signup__page">
      <form className="signup__form">
        <h2>Signup</h2>
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

        <PrimaryButton
          text="Signup"
          onClick={() => signup(username, password)}
        />
        <DefaultButton text="Login" onClick={() => navigate("/login")} />
      </form>
    </div>
  );
};
