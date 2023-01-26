import { StartPage } from "../../pages/Start";
import { UseUser } from "../hooks/UseUser";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = UseUser();

  if (!auth.user) {
    return <StartPage />;
  }

  return children;
}


