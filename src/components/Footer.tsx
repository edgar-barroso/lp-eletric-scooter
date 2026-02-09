import { motion } from "framer-motion";
import { colors } from "../theme/colors";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useMobileView } from "../hooks/useBreakpoint";

export default function Footer() {
  const isMobile = useMobileView();
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  if (isMobile) {
    return (
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 py-4 px-4 flex flex-col items-center gap-3 z-10"
        style={{ color: colors.text.secondary }}
      >
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              whileHover={{
                scale: 1.2,
                color: colors.primary.main,
                transition: { duration: 0.2 },
              }}
              className="transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="text-xs text-center"
        >
          © 2026 Electric Scooter. All rights reserved.
        </motion.p>
      </motion.footer>
    );
  }

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="absolute bottom-0 left-0 right-20 py-6 px-20 flex items-center justify-between z-10"
      style={{ color: colors.text.secondary }}
    >
      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="text-sm"
      >
        © 2026 Electric Scooter. All rights reserved.
      </motion.p>

      <div className="flex gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 + index * 0.1 }}
            whileHover={{
              scale: 1.2,
              color: colors.primary.main,
              transition: { duration: 0.2 },
            }}
            className="transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="text-sm"
      >
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        {" | "}
        <a href="/terms" className="hover:underline">
          Terms of Service
        </a>
      </motion.div>
    </motion.footer>
  );
}