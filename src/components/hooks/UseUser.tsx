import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export function UseUser() {
  const context = useContext(AuthContext);
  return context;
}
