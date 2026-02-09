import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { colors } from '../theme/colors';
import { NAV_ITEMS } from '../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      {/* Burger Menu Button */}
      <motion.button
        className="md:hidden z-30 relative w-8 h-8 flex items-center justify-center"
        onClick={onToggle}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Menu"
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" style={{ color: colors.text.primary }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: colors.text.primary }} />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-20 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
        }}
        onClick={onToggle}
      />

      {/* Mobile Menu Panel */}
      <motion.nav
        className="fixed top-0 right-0 h-full w-64 z-25 md:hidden flex flex-col shadow-lg"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          background: `linear-gradient(to bottom, ${colors.background.from}, ${colors.background.to})`,
        }}
      >
        {/* Menu Header */}
        <div className="p-6 border-b border-white/20">
          <h3 className="font-bold text-lg" style={{ color: colors.text.primary }}>
            Menu
          </h3>
        </div>

        {/* Menu Items */}
        <div className="flex-1 p-6">
          <ul className="space-y-6">
            {NAV_ITEMS.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ x: 50, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <motion.a
                  href={item.href}
                  className="block text-lg font-semibold transition-colors py-2"
                  style={{ color: colors.text.primary }}
                  whileHover={{ 
                    color: colors.primary.main,
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  onClick={onToggle}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Login Button */}
        <div className="p-6 border-t border-white/20">
          <motion.button
            className="w-full font-bold text-lg px-6 py-3 rounded-xl"
            style={{
              background: `linear-gradient(to bottom, ${colors.button.from}, ${colors.button.to})`,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onToggle}
          >
            LOGIN
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
}