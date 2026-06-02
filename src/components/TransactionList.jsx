function TransactionList({
  transactions,
  deleteTransaction
}) {

  return (
    <div>

      {transactions.map((item) => (

        <div key={item.id}>

          <h3>{item.category}</h3>

          <p>{item.amount}</p>

          <p>{item.type}</p>

          <button
            onClick={() => deleteTransaction(item.id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default TransactionList;