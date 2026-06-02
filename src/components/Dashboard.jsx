import {
  PieChart,
  Pie,
  Tooltip
} from "recharts";

function Dashboard({ transactions }) {

    const chartData = [
  {
    name:"Income",
    value:income
  },
  {
    name:"Expense",
    value:expense
  }
];
  const income =
    transactions
      .filter(t => t.type === "income")
      .reduce((sum,t)=>sum+t.amount,0);

  const expense =
    transactions
      .filter(t => t.type === "expense")
      .reduce((sum,t)=>sum+t.amount,0);

  return (
    <div>

      <h2>Income : ₹{income}</h2>

      <h2>Expense : ₹{expense}</h2>

      <h2>
        Balance : ₹{income-expense}
      </h2>
      <PieChart width={400} height={300}>
  <Pie
    data={chartData}
    dataKey="value"
    outerRadius={100}
  />
  <Tooltip />
</PieChart> 

    </div>
  );
}

export default Dashboard;