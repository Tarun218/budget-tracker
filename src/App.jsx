/**
 * Main App Component
 * Orchestrates all features: transactions, dashboard, forms, and navigation
 */
import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { useTransactions, useModal } from './hooks/useLocalStorage';
import { SAMPLE_TRANSACTIONS } from './utils/sampleData';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingTransaction, setEditingTransaction] = useState(null);
  const { transactions, addTransaction, updateTransaction, deleteTransaction, exportToCSV } =
    useTransactions(SAMPLE_TRANSACTIONS);
  const { isOpen: formIsOpen, openModal: openForm, closeModal: closeForm } =
    useModal();

  // Handle tab navigation
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setEditingTransaction(null);
    closeForm();
  };

  // Handle form submission (add or edit)
  const handleFormSubmit = (formData) => {
    if (editingTransaction) {
      updateTransaction(editingTransaction.id, formData);
      setEditingTransaction(null);
    } else {
      addTransaction(formData);

      // Return to dashboard after adding a transaction
      if (activeTab === 'add') {
        setActiveTab('dashboard');
      }
    }
    closeForm();
  };

  // Handle edit button click
  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    openForm(transaction);
  };

  // Handle delete button click
  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard transactions={transactions} />;

      case 'add':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28">
            <h1 className="text-3xl font-bold text-black mb-8 font-serif">
              Add Transaction
            </h1>

            <div className="bg-white rounded-lg border-2 border-[#D9D9D9] p-6 shadow-md">
              <TransactionForm
                isOpen={true}
                initialData={null}
                onSubmit={handleFormSubmit}
                onCancel={() => setActiveTab('dashboard')}
              />
            </div>
          </div>
        );

      case 'transactions':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28">
            <h1 className="text-3xl font-bold text-black mb-8 font-serif">
              All Transactions
            </h1>
            <TransactionList
              transactions={transactions}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28">
            <h1 className="text-3xl font-bold text-black mb-8 font-serif">
              Settings & Tools
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Export CSV */}
              <div className="bg-white rounded-lg border-2 border-[#D9D9D9] p-6 shadow-md">
                <h2 className="text-xl font-bold text-black mb-4">Export Data</h2>
                <p className="text-[#666666] mb-6">
                  Export all your transactions as a CSV file for backup or analysis.
                </p>
                <button
                  onClick={exportToCSV}
                  className="w-full px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-[#333333] transition-colors"
                >
                  Download CSV
                </button>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-lg border-2 border-[#D9D9D9] p-6 shadow-md">
                <h2 className="text-xl font-bold text-black mb-4">Statistics</h2>
                <div className="space-y-2 text-[#666666]">
                  <p>
                    <span className="font-medium">Total Transactions:</span> {transactions.length}
                  </p>
                  <p>
                    <span className="font-medium">Income Entries:</span>{' '}
                    {transactions.filter((t) => t.type === 'income').length}
                  </p>
                  <p>
                    <span className="font-medium">Expense Entries:</span>{' '}
                    {transactions.filter((t) => t.type === 'expense').length}
                  </p>
                </div>
              </div>

              {/* Clear Data */}
              <div className="bg-white rounded-lg border-2 border-[#D9D9D9] p-6 shadow-md md:col-span-2">
                <h2 className="text-xl font-bold text-black mb-4">Data Management</h2>
                <p className="text-[#666666] mb-6">
                  All data is stored locally in your browser. Clear your browser data to reset the
                  application.
                </p>
                <p className="text-sm text-[#999999]">
                  Data is automatically saved to your browser's local storage.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard transactions={transactions} />;
    }
  };

  return (
      <Layout activeTab={activeTab} onTabChange={handleTabChange}>
        {renderContent()}

      {/* Modal only used for editing transactions */}
      {editingTransaction && (
      <TransactionForm
          isOpen={formIsOpen}
        initialData={editingTransaction}
        onSubmit={handleFormSubmit}
        onCancel={() => {
          closeForm();
          setEditingTransaction(null);
        }}
      />
      )}
    </Layout>
  );
}