import { motion } from "framer-motion";
import { Target, Users, Zap, Globe } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

const stats = [
  { number: "50K+", label: "Active Users", icon: Users },
  { number: "1M+", label: "Projects Completed", icon: Target },
  { number: "99.9%", label: "Uptime", icon: Zap },
  { number: "150+", label: "Countries", icon: Globe },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Us"
          title="Empowering Teams Worldwide"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <ScrollReveal direction="left">
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
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-6 bg-slate-700/50 rounded-xl"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl mb-2">🎯</div>
                    <h4 className="text-white font-semibold mb-1">Goal Setting</h4>
                    <p className="text-gray-400 text-sm">Define clear objectives</p>
                  </motion.div>
                  <motion.div
                    className="p-6 bg-slate-700/50 rounded-xl mt-8"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl mb-2">📊</div>
                    <h4 className="text-white font-semibold mb-1">Analytics</h4>
                    <p className="text-gray-400 text-sm">Track performance</p>
                  </motion.div>
                  <motion.div
                    className="p-6 bg-slate-700/50 rounded-xl"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl mb-2">🤝</div>
                    <h4 className="text-white font-semibold mb-1">Collaboration</h4>
                    <p className="text-gray-400 text-sm">Work together</p>
                  </motion.div>
                  <motion.div
                    className="p-6 bg-slate-700/50 rounded-xl -mt-8"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl mb-2">⚡</div>
                    <h4 className="text-white font-semibold mb-1">Automation</h4>
                    <p className="text-gray-400 text-sm">Save time</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                We Help Teams{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Achieve More
                </span>
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                TaskFlow was born from a simple idea: project management should be
                intuitive, not intimidating. We believe that when teams have the
                right tools, they can accomplish extraordinary things.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our platform combines cutting-edge AI technology with thoughtful
                design to create a workspace where creativity flourishes and
                productivity soars. From startups to enterprises, we are helping
                teams across the globe transform how they work.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Intuitive Design", "AI-Powered", "Enterprise Security"].map(
                  (tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
                    >
                      {tag}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 text-center group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <motion.h4
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
