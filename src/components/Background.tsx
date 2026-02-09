import { motion } from "framer-motion";
import { useMobileView } from "../hooks/useBreakpoint";

export default function Background() {
  const isMobile = useMobileView();

  return (
    <div className="flex-1 relative pointer-events-none">
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`elipse-1 -translate-x-1/2 ${
          isMobile ? "w-48 h-48 top-16" : "w-75 h-75 top-30"
        }`}
      />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        className={`elipse-2 -right-50 -top-50 ${
          isMobile ? "w-[600px] h-[600px]" : "w-250 h-250"
        }`}
      />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={`elipse-3 -translate-y-1/2 top-0 ${
          isMobile ? "w-32 h-32 right-4" : "w-50 h-50 right-110"
        }`}
      />
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className={`font-semibold tracking-[0.15em] absolute scale-y-170 ${
          isMobile 
            ? "text-4xl top-32 right-4 opacity-50" 
            : "text-9xl top-70 right-60"
        }`}
      >
        EV-B
      </motion.div>
      {!isMobile && (
        <motion.div 
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 90, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-50"
        >
          <div className="elipse-1 w-75 h-75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="elipse-3 w-[230px] h-[230px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
      )}
    </div>
  );
}
