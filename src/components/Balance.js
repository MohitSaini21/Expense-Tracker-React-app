import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { income, expense } = useContext(GlobalContext);
  const balance = income - Math.abs(expense); // Directly calculate the balance
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 style={{ color: balance < 0 ? "red" : "green" }}>
        IR {balance}
      </h1>{" "}
      {/* Optionally add "IR" to show currency */}
    </div>
  );
};

export default Balance;
