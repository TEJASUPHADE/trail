import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Transactions from "./components/Transactions";
import Charts from "./components/Charts";
import QuickTransfer from "./components/QuickTransfer";
import Settings from "./components/Settings";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <main>
          <Cards />
          <Transactions />
          <Charts />
          <QuickTransfer />
        </main>
      </div>
    </div>
  );
}

export default App;
