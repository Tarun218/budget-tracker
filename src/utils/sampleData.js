/**
 * Sample transaction data for initial load
 * Used for demonstration and testing
 */
export const SAMPLE_TRANSACTIONS = [
  {
    id: '1',
    title: 'Monthly Salary',
    amount: 5000,
    category: 'Salary',
    date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString().split('T')[0],
    type: 'income',
  },
  {
    id: '2',
    title: 'Freelance Project',
    amount: 1200,
    category: 'Freelance',
    date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString().split('T')[0],
    type: 'income',
  },
  {
    id: '3',
    title: 'Grocery Shopping',
    amount: 125.50,
    category: 'Food',
    date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString().split('T')[0],
    type: 'expense',
  },
  {
    id: '4',
    title: 'Gas',
    amount: 55.00,
    category: 'Transportation',
    date: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString().split('T')[0],
    type: 'expense',
  },
  {
    id: '5',
    title: 'Movie Tickets',
    amount: 28.00,
    category: 'Entertainment',
    date: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString().split('T')[0],
    type: 'expense',
  },
  {
    id: '6',
    title: 'Electricity Bill',
    amount: 95.75,
    category: 'Utilities',
    date: new Date(new Date().setDate(new Date().getDate() - 8)).toISOString().split('T')[0],
    type: 'expense',
  },
  {
    id: '7',
    title: 'Online Shopping',
    amount: 89.99,
    category: 'Shopping',
    date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().split('T')[0],
    type: 'expense',
  },
  {
    id: '8',
    title: 'Doctor Visit',
    amount: 150.00,
    category: 'Healthcare',
    date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0],
    type: 'expense',
  },
  {
    id: '9',
    title: 'Investment Dividend',
    amount: 250.00,
    category: 'Investment',
    date: new Date().toISOString().split('T')[0],
    type: 'income',
  },
  {
    id: '10',
    title: 'Restaurant',
    amount: 65.50,
    category: 'Food',
    date: new Date().toISOString().split('T')[0],
    type: 'expense',
  },
];

/**
 * Category colors for charts and UI
 */
export const CATEGORY_COLORS = {
  'Food': '#FF6B6B',
  'Transportation': '#4ECDC4',
  'Entertainment': '#45B7D1',
  'Utilities': '#FFA07A',
  'Shopping': '#98D8C8',
  'Healthcare': '#F7DC6F',
  'Salary': '#52B788',
  'Freelance': '#2D6A4F',
  'Investment': '#1B4965',
  'Bonus': '#5F0F40',
  'Gift': '#FFB3BA',
};

/**
 * Expense categories
 */
export const EXPENSE_CATEGORIES = [
  'Food',
  'Transportation',
  'Entertainment',
  'Utilities',
  'Shopping',
  'Healthcare',
  'Other',
];

/**
 * Income categories
 */
export const INCOME_CATEGORIES = [
  'Salary',
  'Freelance',
  'Investment',
  'Bonus',
  'Gift',
  'Other',
];

/**
 * All categories
 */
export const ALL_CATEGORIES = {
  income: INCOME_CATEGORIES,
  expense: EXPENSE_CATEGORIES,
};
