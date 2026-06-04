/**
 * IncomeVsExpense component
 * Pie chart showing the ratio of income to expenses
 */
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function IncomeVsExpense({ income, expense }) {
  const data = [
    { name: 'Income', value: Math.max(income, 0) },
    { name: 'Expense', value: Math.max(expense, 0) },
  ];

  const COLORS = ['#52B788', '#FF6B6B'];

  const renderCustomLabel = ({ name, value, percent }) => {
    if (value === 0) return null;
    return `${(percent * 100).toFixed(0)}%`;
  };

  const total = income + expense;

  return (
    <div className="flex flex-col items-center">
      {total === 0 ? (
        <div className="h-64 flex items-center justify-center">
          <p className="text-[#666666]">No transaction data yet</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `$${value.toFixed(2)}`}
              contentStyle={{
                backgroundColor: '#fff',
                border: '2px solid #D9D9D9',
                borderRadius: '8px',
                padding: '12px',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}

      {/* Statistics below chart */}
      <div className="mt-6 grid grid-cols-2 gap-4 w-full">
        <div className="text-center">
          <p className="text-sm text-[#666666]">Total Income</p>
          <p className="text-xl font-bold text-[#52B788]">
            ${income.toFixed(2)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-[#666666]">Total Expense</p>
          <p className="text-xl font-bold text-[#FF6B6B]">
            ${expense.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
