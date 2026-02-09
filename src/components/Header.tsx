import ScooterIcon from "../assets/scooter-icon.svg";
import { motion } from "framer-motion";
import { colors } from "../theme/colors";
import { useState } from "react";
import { useMobileView } from "../hooks/useBreakpoint";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navItems = ["HOME", "PRODUCTS", "GALERY", "CONTACT"];
  const isMobile = useMobileView();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`absolute flex items-center justify-between z-20 ${
          isMobile 
            ? 'w-full px-4 py-3' 
            : 'w-[90%] px-10 py-4'
        }`}
      >
        <motion.img 
          src={ScooterIcon} 
          alt="LP Electric Scooter Logo" 
          className={isMobile ? "h-12" : "h-20"}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex gap-14 font-bold">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="/"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: colors.primary.main,
                  transition: { duration: 0.2 }
                }}
                style={{ color: colors.text.primary }}
                className="transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        )}

        {/* Desktop Login Button */}
        {!isMobile && (
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-lg px-6 py-2 rounded-xl cursor-pointer"
            style={{
              background: `linear-gradient(to bottom, ${colors.button.from}, ${colors.button.to})`
            }}
          >
            LOGIN
          </motion.button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onToggle={toggleMobileMenu}
          />
        )}
      </motion.header>

      {/* Mobile Menu Backdrop */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
