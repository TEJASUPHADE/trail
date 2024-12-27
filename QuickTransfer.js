import React from "react";
import "./../styles/QuickTransfer.css";

function QuickTransfer() {
  return (
    <div className="quick-transfer">
      <h2>Quick Transfer</h2>
      <div>
        <input type="text" placeholder="Write Amount" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default QuickTransfer;
