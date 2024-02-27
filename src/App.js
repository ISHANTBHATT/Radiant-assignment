import React from "react";
import HorizontalCard from "./components/HorizontalCard";
import Homepage from "./components/Homepage";
import HorizontalCard2 from "./components/HorizontalCard";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />
      <main className="mt-14 md:mt-2 px-4 md:px-16 py-4 w-full flex justify-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
