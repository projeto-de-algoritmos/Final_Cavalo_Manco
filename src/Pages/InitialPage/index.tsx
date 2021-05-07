import React from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import Instructions from "../../Components/Instructions";
import GameTable from "../../Components/GameTable";
function App() {
  return (
    <>
      <Navbar/>
    <section className="content">
      <Instructions/>
      <GameTable/>
    </section>
    </>
  );
}

export default App;
