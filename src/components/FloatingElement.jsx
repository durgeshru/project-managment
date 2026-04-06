import { motion } from "framer-motion";

const FloatingElement = ({
  children,
  className = "",
  duration = 3,
  delay = 0,
  yOffset = 20,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
