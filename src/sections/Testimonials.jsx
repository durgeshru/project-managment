import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Martinez",
    role: "Chief Technology Officer",
    company: "GlobalTech Solutions",
    image: "AM",
    content:
      "TaskFlow has completely revolutionized our project management approach. The AI-powered insights have helped us identify bottlenecks we didn't even know existed. Our delivery speed has increased by 60% since implementation.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Kim",
    role: "Head of Product",
    company: "InnovateLabs",
    image: "DK",
    content:
      "The intuitive interface and powerful automation features have made TaskFlow indispensable for our team. We've reduced manual task management by 80% and our team can finally focus on what matters most - building great products.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rachel Thompson",
    role: "Operations Director",
    company: "ScaleUp Inc",
    image: "RT",
    content:
      "As we scaled from 20 to 200 employees, TaskFlow scaled with us seamlessly. The resource management features are incredibly sophisticated yet easy to use. It's been a game-changer for our operations.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Founder & CEO",
    company: "NextGen Startups",
    image: "JW",
    content:
      "I've tried dozens of project management tools, and TaskFlow is in a league of its own. The combination of beautiful design and powerful functionality is unmatched. Our entire team actually enjoys using it.",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Engineering Manager",
    company: "DevOps Pro",
    image: "PS",
    content:
      "The integration capabilities are phenomenal. TaskFlow connects with all our existing tools and creates a single source of truth. Our cross-functional collaboration has never been better.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Testimonials"
          title="Loved by Teams Worldwide"
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonials[currentIndex].image}
                  </motion.div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role} at{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-full bg-slate-800 border border-white/10 text-white hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-full bg-slate-800 border border-white/10 text-white hover:bg-slate-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-cyan-500 to-purple-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {["Google", "Microsoft", "Amazon", "Meta", "Apple"].map(
            (company, index) => (
              <motion.div
                key={company}
                className="text-2xl font-bold text-gray-500"
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ duration: 0.3 }}
              >
                {company}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
