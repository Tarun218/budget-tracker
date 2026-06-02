import { useState } from "react";

function TransactionForm({ addTransaction }) {

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      category,
      type,
      date: new Date().toISOString().split("T")[0]
    };

    addTransaction(newTransaction);

    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
      />

      <select
        value={type}
        onChange={(e)=>setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default TransactionForm;