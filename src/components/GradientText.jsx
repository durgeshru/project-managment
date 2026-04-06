import { motion } from "framer-motion";

const GradientText = ({ children, className = "" }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
