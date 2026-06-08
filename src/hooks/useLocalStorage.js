import { useState } from 'react';

/**
 * Custom hook for managing localStorage
 * @param {String} key - localStorage key
 * @param {Any} initialValue - Initial value if key doesn't exist
 * @returns {Array} [value, setValue]
 */
export const useLocalStorage = (key, initialValue) => {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (valueToStore === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

/**
 * Custom hook for managing transactions
 * @param {Array} initialTransactions - Initial transactions data
 * @returns {Object} Transactions management object
 */
export const useTransactions = (initialTransactions = []) => {
  const [transactions, setTransactions] = useLocalStorage('budget_tracker_transactions', initialTransactions);

  // Add a new transaction
  const addTransaction = (transaction) => {
    const newTransaction = {
      id: Math.random().toString(36).substr(2, 9),
      ...transaction,
    };
    setTransactions([newTransaction, ...transactions]);
    return newTransaction;
  };

  // Update an existing transaction
  const updateTransaction = (id, updatedData) => {
    setTransactions(
      transactions.map((t) =>
        t.id === id ? { ...t, ...updatedData } : t
      )
    );
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };



  // Export to CSV
  const exportToCSV = () => {
    if (transactions.length === 0) {
      alert('No transactions to export');
      return;
    }

    const headers = ['ID', 'Title', 'Amount', 'Category', 'Date', 'Type'];
    const csvContent = [
      headers.join(','),
      ...transactions.map((t) =>
        [
          t.id,
          `"${t.title}"`,
          t.amount,
          t.category,
          t.date,
          t.type,
        ].join(',')
      ),
    ].join('\n');

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`
    );
    element.setAttribute('download', `transactions_${new Date().toISOString().split('T')[0]}.csv`);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    exportToCSV,
  };
};

/**
 * Custom hook for managing modal state
 * @returns {Object} Modal management object
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data = null) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
  };
};
