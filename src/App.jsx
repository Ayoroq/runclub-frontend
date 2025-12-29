import { useEffect,useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { gsap } from "gsap";
import { ReactLenis } from "lenis/react";

function App() {
  const lenisRef = useRef();
  const location = useLocation();
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);
  const hideMobileNav = ["/","/login", "/signup", "/compose/post"].includes(location.pathname);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
    <AuthProvider>
      <>
        {!hideNavbar && <Navbar />}
        <Outlet />
        {!hideMobileNav && <MobileNav />}
      </>
    </AuthProvider>
    </ReactLenis>
  );
}

export default App;
