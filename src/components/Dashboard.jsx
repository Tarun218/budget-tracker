/**
 * Dashboard component
 * Main dashboard view showing summary cards, charts, and recent transactions
 */
import { motion } from 'framer-motion';
import SummaryCards from './SummaryCards';
import IncomeVsExpense from './Charts/IncomeVsExpense';
import ExpenseByCategory from './Charts/ExpenseByCategory';
import {
  calculateTotal,
  calculateExpensesByCategory,
  calculateBalance,
} from '../utils/calculations';

export default function Dashboard({ transactions = [] }) {
  const totalIncome = calculateTotal(transactions, 'income');
  const totalExpense = calculateTotal(transactions, 'expense');
  const balance = calculateBalance(transactions);
  const expensesByCategory = calculateExpensesByCategory(transactions);

  // Get recent transactions (last 5)
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28" style={{ marginTop: '20px' }}>
      {/* Summary Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 mt-40 "
      >
        <h3 className="text-xs font-bold text-white mb-6 font-serif" style={{ justifyContent: 'center', display: 'flex', padding: '4px 8px' }}>
          Financial Overview
        </h3>
        <SummaryCards income={totalIncome} expense={totalExpense} balance={balance} />
      </motion.section>

      {/* Charts Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
      >
        {/* Income vs Expense Pie Chart */}
        <div className="bg-white rounded-lg border-2 border-[#D9D9D9] p-6 shadow-md hover:shadow-lg transition-shadow relative " style={{backgroundColor:'grey'}}>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg z-10" />
          <h3 className="text-xl font-bold text-black mb-6 font-serif" className="text-xs font-bold text-white mb-6 font-serif" style={{ justifyContent: 'center', display: 'flex', padding: '4px 8px', marginTop:'20px' }}>
            Income vs Expense
          </h3>
          <IncomeVsExpense income={totalIncome} expense={totalExpense} />
        </div>

        {/* Expenses by Category Bar Chart */}
        <div className="bg-white rounded-lg border-2 border-[#D9D9D9] p-6 shadow-md hover:shadow-lg transition-shadow relative">
          <div className="absolute -top-3 right-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg z-10" />
          <h3 className="text-xl font-bold text-black mb-6 font-serif" className="text-xs font-bold text-white mb-6 font-serif" style={{ justifyContent: 'center', display: 'flex', padding: '4px 8px', marginTop:'20px' }}>
            Expenses by Category
          </h3>
          <ExpenseByCategory data={expensesByCategory} />
        </div>
      </motion.section>

      {/* Recent Transactions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{backgroundColor:'grey'}}
      >
        <h3 className="text-2xl font-bold text-white mb-6 font-serif" style={{ justifyContent: 'center', display: 'flex', padding: '4px 8px' }}>
          Recent Transactions
        </h3>
        <div className="bg-white rounded-lg border-2 border-[#D9D9D9] overflow-hidden shadow-md"  >
          {recentTransactions.length > 0 ? (
            <div className="divide-y divide-[#D9D9D9]"  style={{display:'flex',flexDirection:'row',alignItems:'space-between', justifyContent:'center', backgroundColor:'grey'}} >
              {recentTransactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"style={{ backgroundColor:'white',margin:'30px'}}
                >
                  <div className="flex-1" >
                    <p className="font-medium text-black">{transaction.title}</p>
                    <p className="text-sm text-[#666666]">
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>
                  <span
                    className={`text-lg font-bold ${
                      transaction.type === 'income'
                        ? 'text-emerald-600'
                        : 'text-red-600'
                    }`}
                  >
                    {transaction.type === 'income' ? '+' : '-'}$
                    {transaction.amount.toFixed(2)}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-[#666666]">No transactions yet.</p>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}