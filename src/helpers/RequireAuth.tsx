import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../components/store/store";
import { useSelector } from "react-redux";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((s: RootState) => s.user.jwt);

  if (!jwt) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};
