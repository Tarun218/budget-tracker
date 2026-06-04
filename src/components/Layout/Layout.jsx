import { motion } from 'framer-motion';
import Header from './Header';
import Navigation from './Navigation';

export default function Layout({ children, activeTab, onTabChange }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-black">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10">
        <Header />

        <main className="min-h-[calc(100vh-120px)]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>

        <Navigation activeTab={activeTab} onTabChange={onTabChange} />
      </div>
    </div>
  );
}
