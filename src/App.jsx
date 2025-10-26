import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Home />
      </div>
    </>
  );
}