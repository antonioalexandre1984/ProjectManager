import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./components/contexts/RequireAuth";
import { ClientsPage } from "./pages/Clients";
import { DashboardPage } from "./pages/Dashboard";
import { SignInClient } from "./pages/SignInClient";
import { SignInDevPage } from "./pages/SignInDev";
import { SignUpDevPage } from "./pages/SignUpDev";
import { StartPage } from "./pages/Start";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/sign-in/dev" element={<SignInDevPage />} />
      <Route path="/sign-up/dev" element={<SignUpDevPage />} />
      <Route path="/sign-in/client" element={<SignInClient />} />
      <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
      <Route path="/clients" element={<RequireAuth><ClientsPage /></RequireAuth>} />
    </Routes>
  )
}
