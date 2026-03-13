import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./router/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
