/**
 * IncomeVsExpense component
 * Pie chart showing the ratio of income to expenses
 */
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function IncomeVsExpense({ income, expense }) {
  const data = [
    { name: "Income", value: Math.max(income, 0) },
    { name: "Expense", value: Math.max(expense, 0) },
  ];

  const COLORS = ["#52B788", "#FF6B6B"];

  const renderCustomLabel = ({ value, percent }) => {
    if (value === 0) return null;
    return `${(percent * 100).toFixed(0)}%`;
  };

  const total = income + expense;

  return (
    <div className="flex justify-center flex-col items-center w-full">
      {/* Income & Expense Boxes */}
      <div className="flex justify-center flex-col gap-6 mb-5 w-full" style={{margin: '25px',display: 'flex', flexDirection: 'row', gap: '10rem', justifyContent:'center'}}>
        <div className="bg-white border-2 border-[#D9D9D9] rounded-lg px-6 py-4 shadow-sm min-w-[180px] text-center" style={{margin: '5px',display: 'flex', flexDirection: 'column', justifyContent:'center' ,backgroundColor:'white',padding:'5px', borderRadius:'10px', border: '1px solid black', fontSize:'18px'}}>
          <p className="text-sm text-gray-500">Total Income</p>
          <p className="text-xl font-bold text-[#52B788]">
            ${income.toFixed(2)}
          </p>
        </div>

        <div className="bg-white border-2 border-[#D9D9D9] rounded-lg px-6 py-4 shadow-sm min-w-[180px] text-center" style={{margin: '5px',display: 'flex', flexDirection: 'column', justifyContent:'center' ,backgroundColor:'white',padding:'5px', borderRadius:'10px', border: '1px solid black',fontSize:'18px'}}>
          <p className="text-sm text-gray-500">Total Expense</p>
          <p className="text-xl font-bold text-[#FF6B6B]">
            ${expense.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Chart */}
      {total === 0 ? (
        <div className="h-64 flex items-center justify-center">
          <p className="text-[#666666]">No transaction data yet</p>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => `$${value.toFixed(2)}`}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "2px solid #D9D9D9",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}