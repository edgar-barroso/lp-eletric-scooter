import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { colors } from "../theme/colors";

export default function SideBar() {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="absolute h-full w-20 flex flex-col top-0 right-0 z-10"
    >
      <motion.a
        href="/"
        className="flex-1 flex flex-col items-center justify-center gap-1 relative"
        style={{
          background: `linear-gradient(to bottom, ${colors.primary.light}, ${colors.primary.main})`
        }}
      >

          <Search className="w-6 h-6 stroke-current absolute top-10" />
        <button className="rotate-90 mt-10 whitespace-nowrap tracking-[0.75em] text-sm">
          THE CONCEPT
        </button>
      </motion.a>
      <motion.a
        href="/"
        className="flex-1 flex flex-col items-center justify-center gap-1 relative"
        style={{
          background: `linear-gradient(to bottom, ${colors.accent.dark}, ${colors.secondary.dark})`
        }}
      >
        <button className="rotate-90 whitespace-nowrap tracking-[0.75em] text-sm">
          ELECTRIC - B
        </button>
      </motion.a>
    </motion.div>
  );
}
