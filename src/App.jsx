import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/layouts/Navbar";
import Banner from "./pages/layouts/Banner";
import Footer from "./pages/layouts/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-lato">
        <Navbar></Navbar>

        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
