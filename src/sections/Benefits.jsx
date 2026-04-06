import { motion } from "framer-motion";
import {
  Clock,
  TrendingUp,
  Heart,
  Lightbulb,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description:
      "Automate routine tasks and streamline workflows to reclaim valuable time for strategic work.",
    stat: "10h",
    statLabel: "saved per week",
  },
  {
    icon: TrendingUp,
    title: "Increase Productivity by 40%",
    description:
      "Teams using TaskFlow report significant productivity gains through better organization and collaboration.",
    stat: "40%",
    statLabel: "productivity boost",
  },
  {
    icon: Heart,
    title: "Improve Team Satisfaction",
    description:
      "Reduce burnout and improve morale with clear priorities, balanced workloads, and recognition features.",
    stat: "95%",
    statLabel: "satisfaction rate",
  },
  {
    icon: Lightbulb,
    title: "Foster Innovation",
    description:
      "Free your team from administrative overhead so they can focus on creative problem-solving.",
    stat: "3x",
    statLabel: "more innovation",
  },
];

const checklist = [
  "No credit card required",
  "Free 14-day trial",
  "Cancel anytime",
  "24/7 support included",
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Benefits"
          title="Why Teams Choose TaskFlow"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <motion.div
                  className="flex gap-5 p-5 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500 group-hover:to-purple-500 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <benefit.icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-gray-500">{benefit.statLabel}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="right">
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <div className="relative bg-slate-900 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Start Free Today
                  </h3>
                </div>

                <p className="text-gray-400 mb-8">
                  Experience the full power of TaskFlow with our generous free
                  tier. No hidden fees, no surprises.
                </p>

                <ul className="space-y-4 mb-8">
                  {checklist.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/25"
                >
                  Start Your Free Trial
                </motion.button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  Trusted by 10,000+ teams worldwide
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "TaskFlow transformed how our team works. We've cut meeting time in half and everyone knows exactly what to focus on.",
              author: "Sarah Chen",
              role: "VP of Engineering",
              company: "TechCorp",
            },
            {
              quote: "The AI features are game-changing. It's like having a project manager that never sleeps.",
              author: "Michael Ross",
              role: "Product Lead",
              company: "StartupXYZ",
            },
            {
              quote: "Best investment we made this year. Our team productivity increased by 40% within the first month.",
              author: "Emily Watson",
              role: "CEO",
              company: "DesignStudio",
            },
          ].map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 0.1}>
              <motion.div
                className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/5 h-full"
                whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.3)" }}
              >
                <div className="text-cyan-400 text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
