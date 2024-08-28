import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TransactionsList = () => {
  const { transactions, dispatch } = useContext(GlobalContext);

  const handlerDelete = (id) => {
    dispatch({ type: "DELETE", id: id });
  };

  return (
    <div>
      <h3>Recents Transaction</h3>
      <ul className="list">
        {(() => {
          const recentTransactions = [];
          for (
            let i = Math.max(transactions.length - 4, 0);
            i < transactions.length;
            i++
          ) {
            const transaction = transactions[i];
            recentTransactions.push(
              <li
                key={transaction.id}
                className={transaction.amount < 0 ? "minus" : "plus"}
              >
                {transaction.text} <span>{transaction.amount}</span>
                <button
                  onClick={() => handlerDelete(transaction.id)}
                  className="delete-btn"
                >
                  x
                </button>
              </li>
            );
          }
          return recentTransactions;
        })()}
      </ul>
    </div>
  );
};

export default TransactionsList;
