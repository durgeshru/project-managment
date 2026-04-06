import { motion } from "framer-motion";

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      className={`transform-gpu perspective-1000 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
