import React from "react";
import "./../styles/Transactions.css";

function Transactions() {
  const transactions = [
    { name: "Deposit from my Card", date: "28 January 2021", amount: "-$850" },
    { name: "Deposit Paypal", date: "25 January 2021", amount: "+$2,500" },
    { name: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400" },
  ];

  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>{transaction.name}</span>
            <span>{transaction.date}</span>
            <span>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
