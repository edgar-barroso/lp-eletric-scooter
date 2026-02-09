import { motion, useScroll } from "framer-motion";
import { colors } from "../theme/colors";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Progress bar no topo */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: `linear-gradient(to right, ${colors.primary.main}, ${colors.accent.main})`,
        }}
      />

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="30"
            height="50"
            viewBox="0 0 30 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="28"
              height="48"
              rx="14"
              stroke={colors.text.secondary}
              strokeWidth="2"
            />
            <motion.circle
              cx="15"
              cy="15"
              r="4"
              fill={colors.primary.main}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        <motion.p
          className="text-xs uppercase tracking-wider"
          style={{ color: colors.text.secondary }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </>
  );
}
