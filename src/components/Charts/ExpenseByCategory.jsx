/**
 * ExpenseByCategory component
 * Bar chart showing expenses by category
 */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { CATEGORY_COLORS } from '../../utils/sampleData';

export default function ExpenseByCategory({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-[#666666]">No expense data to display</p>
      </div>
    );
  }

  // Get top 8 categories by amount
  const topData = data.slice(0, 8);

  const colors = topData.map(
    (item) => CATEGORY_COLORS[item.category] || '#999999'
  );

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={topData}
        margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
        <XAxis
          dataKey="category"
          angle={-45}
          textAnchor="end"
          height={80}
          tick={{ fill: '#666666', fontSize: 12 }}
        />
        <YAxis tick={{ fill: '#666666', fontSize: 12 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '2px solid #D9D9D9',
            borderRadius: '8px',
            padding: '12px',
          }}
          formatter={(value) => `$${value.toFixed(2)}`}
          cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
        />
        <Bar dataKey="amount" fill="#8884d8" radius={[8, 8, 0, 0]}>
          {colors.map((color, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
