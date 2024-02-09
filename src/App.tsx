import React from "react";
import Header from "./components/body/Header/Header";
import DefaultBar from "./components/body/DefaultBar/DefaultBar";
import SelectedPiercing from "./components/body/SelectedPiercings/SelectedPiercing";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/body/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <DefaultBar />
      </Router>
      <SelectedPiercing />
      <Footer />
    </div>
  );
}

export default App;
