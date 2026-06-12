/**
 * TransactionList component
 * Displays all transactions in a table format with edit/delete functionality
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit2, Trash2, Search } from 'lucide-react';
import { formatDate, getRelativeDate } from '../utils/dateHelpers';

export default function TransactionList({
  transactions = [],
  onEdit,
  onDelete,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === 'all' || t.type === filterType;

    return matchesSearch && matchesType;
  });

  const handleDelete = (id) => {
    setDeleteConfirm(null);
    onDelete(id);
  };

  if (transactions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg border-2 border-[#D9D9D9] p-12 text-center"
      >
        <p className="text-[#666666] text-lg">No transactions yet.</p>
        <p className="text-[#999999] text-sm mt-2">
          Start by adding your first income or expense transaction.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg border-2 border-[#D9D9D9] p-4 space-y-4">
        <div className="flex gap-2" style={{display: 'flex', flexDirection:'row',gap:'5px'}}>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-[#999999]" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-[#D9D9D9] rounded-lg focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border-2 border-[#D9D9D9] rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg border-2 border-[#D9D9D9] overflow-hidden shadow-lg" >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#D9D9D9] bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-bold text-black">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-black">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-black">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-black">
                  Type
                </th>
                <th className="px-6 py-4 text-right text-sm font-bold text-black">
                  Amount
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-black">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody >
              {filteredTransactions.map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-[#D9D9D9] hover:bg-gray-50 transition-colors" 
                >
                  <td className="px-6 py-4 text-sm text-[#666666]">
                    <div>{formatDate(transaction.date, 'MMM dd')}</div>
                    <div className="text-xs text-[#999999]">
                      {getRelativeDate(transaction.date)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-black">
                    {transaction.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#666666]">
                    {transaction.category}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        transaction.type === 'income'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {transaction.type === 'income' ? '+ ' : '- '}
                      {transaction.type.charAt(0).toUpperCase() +
                        transaction.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-right">
                    <span
                      className={
                        transaction.type === 'income'
                          ? 'text-emerald-600'
                          : 'text-red-600'
                      }
                    >
                      {transaction.type === 'income' ? '+' : '-'}$
                      {transaction.amount.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEdit(transaction)}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-blue-600 hover:text-blue-700"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(transaction.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600 hover:text-red-700"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setDeleteConfirm(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-white rounded-lg shadow-2xl border-2 border-[#D9D9D9] p-6"
          >
            <h3 className="text-xl font-bold text-black mb-4">
              Delete Transaction?
            </h3>
            <p className="text-[#666666] mb-6">
              Are you sure you want to delete this transaction? This action
              cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2 border-2 border-[#D9D9D9] rounded-lg text-black font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}