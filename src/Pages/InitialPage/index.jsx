import React from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import GameTable from "../../Components/GameTable";
function App() {
  return (
    <>
      <Navbar />
      <section className="content">
        <GameTable />
      </section>
    </>
  );
}

export default App;
