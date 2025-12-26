import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const location = useLocation();
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  return (
    <AuthProvider>
      <div>
        {!hideNavbar && <Navbar />}
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;
