import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useOrientation, useMobileView } from "../hooks/useBreakpoint";
import { colors } from "../theme/colors";

export default function OrientationPrompt() {
  const isMobile = useMobileView();
  const orientation = useOrientation();

  // Só mostra em mobile e quando está em landscape
  if (!isMobile || orientation === "portrait") {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${colors.primary.main}dd, ${colors.accent.main}dd)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center max-w-sm mx-4 shadow-xl"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <RotateCcw 
            className="w-16 h-16 mx-auto" 
            style={{ color: colors.primary.main }}
          />
        </motion.div>
        
        <h3 
          className="text-xl font-bold mb-4"
          style={{ color: colors.text.primary }}
        >
          Melhor experiência
        </h3>
        
        <p 
          className="text-sm mb-6 leading-relaxed"
          style={{ color: colors.text.secondary }}
        >
          Para uma melhor experiência, vire seu dispositivo para o modo retrato (vertical).
        </p>
        
        <motion.div
          className="text-xs opacity-70"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: colors.text.secondary }}
        >
          Aguardando rotação...
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Componente para detectar dispositivos touch
export function TouchDetector({ children }: { children: React.ReactNode }) {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  return (
    <div 
      className={`${isTouchDevice ? 'touch-device' : 'no-touch'}`}
      style={{
        // Melhorar performance de scroll em dispositivos touch
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'none',
      }}
    >
      {children}
    </div>
  );
}