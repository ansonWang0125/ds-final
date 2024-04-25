import { Navigate } from "react-router-dom";
import { UseUserDataContext } from "@context";
import config from "@config/config.json";

export default function ProtectedRoutes({ children }) {
  const { userData } = UseUserDataContext();
  const isPm = userData.role === config.Role.PM;

  return isPm ? children : <Navigate to="/login" />;
}
