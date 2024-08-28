import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useState } from "react";

const AddTransactionsList = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { transactions, dispatch } = useContext(GlobalContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!(text && amount)) {
      return;
    } else {
      dispatch({
        type: "UPDATE",
        payload: {
          id: transactions.length + 1,
          text: text,
          amount: Number(amount),
        },
      });

      setAmount(0);
      setText("");
    }
  };

  return (
    <div>
      <h3>Insert New Transaction</h3>
      <form onSubmit={handlerSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Your Amout <br />
            Use negative sign when you are supposed to add the expense. (-700);
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter Youramount..."
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionsList;
