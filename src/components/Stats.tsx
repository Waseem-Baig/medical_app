import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const Stats = () => {
  const achievements = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "AI Efficiency Boost",
      description: "Average improvement in AI-powered hospital operations",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "AI-Assisted Users",
      description: "Healthcare professionals using our AI system daily",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Clock,
      value: "60%",
      label: "Smart Time Savings",
      description: "AI-driven reduction in administrative tasks",
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: Award,
      value: "98%",
      label: "AI Satisfaction Rate",
      description: "Client satisfaction with our AI-Enhanced HMS solution",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-space-gradient text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Proven Results That
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Drive Smart Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-Enhanced Medical Hub has revolutionized healthcare delivery
            across hundreds of facilities, delivering measurable AI-driven
            improvements in efficiency and patient outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="glassmorphism rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  {achievement.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gray-100 transition-colors">
                  {achievement.label}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {achievement.description}
                </p>

                {/* Enhanced glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
