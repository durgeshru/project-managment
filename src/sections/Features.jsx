import { motion } from "framer-motion";
import {
  Kanban,
  Calendar,
  MessageSquare,
  FileText,
  BarChart3,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";

const features = [
  {
    icon: Kanban,
    title: "Kanban Boards",
    description:
      "Visualize your workflow with customizable boards. Drag and drop tasks, set priorities, and track progress effortlessly.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "AI-powered scheduling that learns your team's patterns and suggests optimal timelines for maximum efficiency.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Team Chat",
    description:
      "Real-time messaging integrated with your projects. Keep conversations contextual and never lose important discussions.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FileText,
    title: "Document Hub",
    description:
      "Centralized document management with version control, collaborative editing, and smart search capabilities.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Comprehensive insights into team performance, project health, and resource allocation with predictive analytics.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Resource Management",
    description:
      "Optimize team capacity with intelligent workload balancing and skill-based task assignment.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Automate repetitive tasks with custom workflows. Set triggers and actions to streamline your processes.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SSO integration, and compliance with SOC 2, GDPR, and HIPAA standards.",
    color: "from-indigo-500 to-purple-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Features"
          title="Everything You Need to Succeed"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1}>
              <motion.div
                className="h-full p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 group cursor-pointer"
                whileHover={{
                  borderColor: "rgba(99, 102, 241, 0.5)",
                }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-5 flex items-center text-cyan-400 text-sm font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span>Learn more</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Workflow?
              </h3>
              <p className="text-gray-400 text-lg">
                Join thousands of teams already using TaskFlow to deliver
                exceptional results. Start your free trial today.
              </p>
            </div>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/25"
              >
                Get Started Free
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
