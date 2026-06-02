import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { useEffect } from "react";
import { saveData, getData } from "./utils/localStorage";
function App() {

  const [transactions, setTransactions] =
useState(getData());
useEffect(() => {
  saveData(transactions);
}, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div>

      <h1>Budget Tracker</h1>

      <TransactionForm
        addTransaction={addTransaction}
      />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />

    </div>
  );
}

export default App;