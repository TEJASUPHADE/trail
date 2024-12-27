import React from "react";
import "./../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Accounts</li>
        <li>Investments</li>
        <li>Credit Cards</li>
        <li>Loans</li>
        <li>Services</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
