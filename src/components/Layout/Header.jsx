import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-gray-400 bg-gray-900 backdrop-blur-md"
      style={{ backgroundColor: '#1f1f1f' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"  >
        <div className="flex items-center gap-4">
        
          <div>
            <h1 className="text-3xl font-bold text-white font-serif" align="center" style={{ color: '#FFFFFF' }}>Budget Journal</h1>
            <p className="text-sm text-gray-300 italic" align ="center" style={{ color: '#CCCCCC' }}>Your personal finance notebook</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
