/**
 * SummaryCards component
 * Displays income, expense, and balance cards with sticky note aesthetic
 */
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

export default function SummaryCards({ income, expense, balance }) {
  const cards = [
    {
      icon: TrendingUp,
      title: 'Total Income',
      amount: income,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-black-200',
    },
    {
      icon: TrendingDown,
      title: 'Total Expense',
      amount: expense,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      borderColor: 'border-black-200',
    },
    {
      icon: Wallet,
      title: 'Balance',
      amount: balance,
      color: balance >= 0 ? 'from-blue-500 to-indigo-500' : 'from-orange-500 to-red-500',
      bgColor: balance >= 0 ? 'bg-blue-50' : 'bg-orange-50',
      textColor: balance >= 0 ? 'text-blue-700' : 'text-orange-700',
      borderColor: balance >= 0 ? 'border-black-200' : 'border-black-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-6" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch', width: '100%', marginTop:'20px' }}>

      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group rounded-lg border-2 border-[#D9D9D9] shadow-md transition-shadow" style={{ backgroundColor: '#F2F2F2', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',marginBottom:'30px',  border: '1px solid black', borderRadius:'10px' }}
          >
            {/* Paper texture effect */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-md opacity-95 group-hover:opacity-100 transition-opacity" />

            {/* Tape effect at top */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-yellow-100 border border-yellow-200 rounded-sm opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Pin effect */}
            <div className="absolute -top-1 right-4 w-2 h-2 bg-red-500 rounded-full shadow-md group-hover:shadow-lg transition-shadow" />

            {/* Content */}
            <div className="relative p-6 rounded-lg border-2 border-[#D9D9D9]" style={{ backgroundColor: '#F2F2F2' ,  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width:'100%'}}>
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${card.color}rounded-lg shadow-md`} style={{ display: 'flex',flexDirection:'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div >
                  <p className="text-sm text-[#666666] font-large" style={{fontSize:'20px'}}>{card.title}</p>
                  <p className={`text-3xl font-bold mt-2 ${card.textColor}`}>
                    ${Math.abs(card.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>

              </div>

              {/* Handwritten style underline */}
              <div className="h-1 w-12 bg-black rounded-full opacity-20" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
