
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const Stats = () => {
  const achievements = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Efficiency Increase",
      description: "Average improvement in hospital operations",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Active Users",
      description: "Healthcare professionals using our system daily",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Time Saved",
      description: "Reduction in administrative tasks",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Client satisfaction with our HMS solution",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Results That
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Drive Success
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our HMS has transformed healthcare delivery across hundreds of facilities, 
            delivering measurable improvements in efficiency and patient outcomes.
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
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                >
                  {achievement.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-100 transition-colors">
                  {achievement.label}
                </h3>

                {/* Description */}
                <p className="text-blue-200 text-sm leading-relaxed group-hover:text-blue-100 transition-colors">
                  {achievement.description}
                </p>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
