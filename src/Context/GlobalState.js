import React, { createContext, useReducer, useEffect } from "react";

// Initial state setup, checking local storage
const initialState = JSON.parse(localStorage.getItem("state")) || {
  transactions: [],
  income: 0,
  expense: 0,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      const newTransactions = [...state.transactions, action.payload];
      const totals = newTransactions.reduce(
        (acc, transaction) => {
          if (transaction.amount > 0) {
            acc.income += transaction.amount;
          } else {
            acc.expense += transaction.amount;
          }
          return acc;
        },
        { income: 0, expense: 0 }
      );
      return {
        ...state,
        transactions: newTransactions,
        income: totals.income,
        expense: totals.expense,
      };
    }
    case "DELETE": {
      const newTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.id
      );

      const totals = newTransactions.reduce(
        (acc, transaction) => {
          if (transaction.amount > 0) {
            acc.income += transaction.amount;
          } else {
            acc.expense += transaction.amount;
          }
          return acc;
        },
        { income: 0, expense: 0 }
      );

      return {
        ...state,
        transactions: newTransactions,
        income: totals.income,
        expense: totals.expense,
      };
    }
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
        income: state.income,
        expense: state.expense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
