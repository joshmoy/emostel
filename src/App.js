import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
