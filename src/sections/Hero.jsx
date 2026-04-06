import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";
import FloatingElement from "../components/FloatingElement";
import GradientText from "../components/GradientText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-800" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse" />
                New: AI-Powered Project Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Manage Projects{" "}
              <GradientText>Smarter</GradientText>
              <br />
              Not Harder
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Streamline your workflow with intelligent task management,
              real-time collaboration, and AI-driven insights that help your
              team deliver exceptional results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-cyan-400 to-purple-500"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">10,000+</p>
                <p className="text-sm">Teams trust us</p>
              </div>
            </motion.div>
          </div>

          <FloatingElement duration={4} yOffset={30}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 text-lg">📊</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Project Alpha</p>
                        <p className="text-gray-500 text-sm">In Progress</p>
                      </div>
                    </div>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <span className="text-purple-400 text-lg">🚀</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Launch Campaign</p>
                        <p className="text-gray-500 text-sm">Completed</p>
                      </div>
                    </div>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                        <span className="text-pink-400 text-lg">✨</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Design System</p>
                        <p className="text-gray-500 text-sm">Planning</p>
                      </div>
                    </div>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
                        initial={{ width: 0 }}
                        animate={{ width: "30%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-xl">
                      🤖
                    </div>
                    <div>
                      <p className="text-white font-medium">AI Assistant</p>
                      <p className="text-gray-400 text-sm">
                        "3 tasks need attention today"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center text-white text-3xl shadow-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                📈
              </motion.div>
            </motion.div>
          </FloatingElement>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-white/50 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
