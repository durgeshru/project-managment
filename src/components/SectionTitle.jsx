import { motion } from "framer-motion";
import GradientText from "./GradientText";

const SectionTitle = ({ title, subtitle, align = "center" }) => {
  const alignClass = align === "center" ? "text-center" : align === "left" ? "text-left" : "text-right";

  return (
    <div className={`mb-16 ${alignClass}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block px-4 py-1 mb-4 text-sm font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        <GradientText>{title}</GradientText>
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
