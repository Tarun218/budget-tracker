/**
 * Calculate total amount from transactions
 * @param {Array} transactions - Array of transaction objects
 * @param {String} type - Transaction type ('income' or 'expense')
 * @returns {Number} Total amount
 */
export const calculateTotal = (transactions = [], type) => {
  return transactions
    .filter((t) => t.type === type)
    .reduce((sum, t) => sum + t.amount, 0);
};

/**
 * Calculate balance
 * @param {Array} transactions - Array of transaction objects
 * @returns {Number} Current balance
 */
export const calculateBalance = (transactions = []) => {
  const totalIncome = calculateTotal(transactions, 'income');
  const totalExpense = calculateTotal(transactions, 'expense');
  return totalIncome - totalExpense;
};

/**
 * Group transactions by category
 * @param {Array} transactions - Array of transaction objects
 * @returns {Object} Transactions grouped by category
 */
export const groupByCategory = (transactions = []) => {
  return transactions.reduce((acc, transaction) => {
    const category = transaction.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(transaction);
    return acc;
  }, {});
};

/**
 * Calculate expenses by category
 * @param {Array} transactions - Array of transaction objects
 * @returns {Array} Array of category spending data
 */
export const calculateExpensesByCategory = (transactions = []) => {
  const expenses = transactions.filter((t) => t.type === 'expense');
  const grouped = groupByCategory(expenses);

  return Object.keys(grouped).map((category) => ({
    category,
    amount: grouped[category].reduce((sum, t) => sum + t.amount, 0),
    transactions: grouped[category].length,
  }));
};

/**
 * Calculate monthly summary
 * @param {Array} transactions - Array of transaction objects
 * @param {Date} date - Date to calculate summary for
 * @returns {Object} Monthly summary data
 */
export const calculateMonthlySummary = (transactions = [], date = new Date()) => {
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const monthlyTransactions = transactions.filter((t) => {
    const tDate = new Date(t.date);
    return tDate >= monthStart && tDate <= monthEnd;
  });

  return {
    month: monthStart,
    income: calculateTotal(monthlyTransactions, 'income'),
    expense: calculateTotal(monthlyTransactions, 'expense'),
    balance: calculateBalance(monthlyTransactions),
    transactions: monthlyTransactions,
  };
};

/**
 * Get last 12 months summary
 * @param {Array} transactions - Array of transaction objects
 * @returns {Array} Array of monthly summaries for last 12 months
 */
export const getLast12MonthsSummary = (transactions = []) => {
  const months = [];
  const today = new Date();

  for (let i = 11; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    months.push(calculateMonthlySummary(transactions, date));
  }

  return months;
};

/**
 * Calculate statistics for transactions
 * @param {Array} transactions - Array of transaction objects
 * @returns {Object} Statistics object
 */
export const calculateStatistics = (transactions = []) => {
  const totalIncome = calculateTotal(transactions, 'income');
  const totalExpense = calculateTotal(transactions, 'expense');
  const balance = calculateBalance(transactions);
  const avgTransaction = transactions.length > 0 ? (totalIncome + totalExpense) / transactions.length : 0;
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpense) / totalIncome * 100).toFixed(2) : 0;

  return {
    totalIncome,
    totalExpense,
    balance,
    avgTransaction,
    savingsRate,
    transactionCount: transactions.length,
  };
};

/**
 * Generate mock transaction for testing
 * @returns {Object} Mock transaction
 */
export const generateMockTransaction = () => {
  const categories = {
    income: ['Salary', 'Freelance', 'Investment', 'Bonus', 'Gift'],
    expense: ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Shopping', 'Healthcare'],
  };

  const type = Math.random() > 0.7 ? 'income' : 'expense';
  const categoryList = categories[type];
  const category = categoryList[Math.floor(Math.random() * categoryList.length)];
  const amount = Math.floor(Math.random() * (type === 'income' ? 5000 : 500)) + 10;
  const daysAgo = Math.floor(Math.random() * 90);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);

  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `${type === 'income' ? 'Income' : 'Expense'} - ${category}`,
    amount,
    category,
    date: date.toISOString().split('T')[0],
    type,
  };
};
