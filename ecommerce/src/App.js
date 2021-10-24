import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
      </Router>
      <ItemListContainer />
    </div>
  );
}

export default App;
