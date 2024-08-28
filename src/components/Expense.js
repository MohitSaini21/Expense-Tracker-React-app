import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Expense = () => {
  const { income, expense } = useContext(GlobalContext);

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+IR {income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-IR {expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Expense;
