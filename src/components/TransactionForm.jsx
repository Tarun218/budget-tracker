/**
 * TransactionForm component
 * Form for creating and editing transactions with validation
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Save } from 'lucide-react';
import { formatDateForInput } from '../utils/dateHelpers';
import { ALL_CATEGORIES } from '../utils/sampleData';

export default function TransactionForm({
  onSubmit,
  onCancel,
  initialData = null,
  isOpen = true,
}) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: formatDateForInput(new Date()),
    type: 'expense',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        amount: initialData.amount || '',
        category: initialData.category || '',
        date: initialData.date || formatDateForInput(new Date()),
        type: initialData.type || 'expense',
      });
    }
  }, [initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.amount || formData.amount <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount),
    });

    setFormData({
      title: '',
      amount: '',
      category: '',
      date: formatDateForInput(new Date()),
      type: 'expense',
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const categories = ALL_CATEGORIES[formData.type] || [];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onCancel}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-lg shadow-2xl border-2 border-[#D9D9D9] relative"
      >
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg z-10" />

        <div className="flex items-center justify-between p-6 border-b border-[#D9D9D9]">
          <h2 className="text-2xl font-bold text-black font-serif">
            {initialData ? 'Edit Transaction' : 'New Transaction'}
          </h2>
        
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="income"
                checked={formData.type === 'income'}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-black">Income</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="expense"
                checked={formData.type === 'expense'}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-black">Expense</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Grocery shopping"
              className="w-full px-4 py-2 border-2 border-[#D9D9D9] rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Amount ($)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              className="w-full px-4 py-2 border-2 border-[#D9D9D9] rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
            />
            {errors.amount && (
              <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#D9D9D9] rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#D9D9D9] rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 border-2 border-[#D9D9D9] rounded-lg text-black font-medium hover:bg-gray-50 transition-colors"
            >
<X className="w-5 h-5 text-[#666666]" />
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {initialData ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}