import "./App.css";

import { GlobalProvider } from "./Context/GlobalState";
import TransactionsList from "./components/TransactionsList";
import AddTransactionsList from "./components/AddTransactionsList";
import Expense from "./components/Expense";

import Balance from "./components/Balance";

import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalProvider>
        <div>
          <Header />

          <Balance />

          <Expense></Expense>

          <TransactionsList />
          <AddTransactionsList />
        </div>
      </GlobalProvider>

      {/* {GlobalProvider({
        children: (
          <div>
            <Header />

            <div className="container">
              <Balance />
            </div>

            <Expense></Expense>

            <TransactionsList />
            <AddTransactionsList />
          </div>
        ),
      })} */}
    </>
  );
}

export default App;
