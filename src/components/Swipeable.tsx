import { motion, type PanInfo } from "framer-motion";
import { type ReactNode, useState } from "react";
import { useMobileView } from "../hooks/useBreakpoint";

interface SwipeableProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}

export default function Swipeable({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
}: SwipeableProps) {
  const isMobile = useMobileView();
  const [isDragging, setIsDragging] = useState(false);

  if (!isMobile) {
    return <>{children}</>;
  }

  const handlePanEnd = (_event: PointerEvent, info: PanInfo) => {
    const { offset } = info;
    setIsDragging(false);

    if (Math.abs(offset.x) > Math.abs(offset.y)) {
      // Horizontal swipe
      if (offset.x > threshold && onSwipeRight) {
        onSwipeRight();
      } else if (offset.x < -threshold && onSwipeLeft) {
        onSwipeLeft();
      }
    } else {
      // Vertical swipe
      if (offset.y > threshold && onSwipeDown) {
        onSwipeDown();
      } else if (offset.y < -threshold && onSwipeUp) {
        onSwipeUp();
      }
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onPanStart={() => setIsDragging(true)}
      onPanEnd={handlePanEnd}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      className="touch-pan-y"
    >
      {children}
    </motion.div>
  );
}