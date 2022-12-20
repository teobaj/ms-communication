import React, { FC, ReactComponentElement, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";

interface ProtectedProps {
  children: ReactElement;
}

export const Protected: FC<ProtectedProps> = ({ children }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};
