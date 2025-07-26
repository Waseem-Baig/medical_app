import { motion } from "framer-motion";
import { Users, Calendar, Award, Clock } from "lucide-react";

const HospitalStats = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "AI-Assisted Patients",
      description: "Patients treated with AI-powered care",
    },
    {
      icon: Calendar,
      number: "500+",
      label: "Smart Appointments",
      description: "AI-optimized consultations per day",
    },
    {
      icon: Award,
      number: "50+",
      label: "AI-Enhanced Doctors",
      description: "AI-assisted medical professionals",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "AI Emergency Care",
      description: "Intelligent round-the-clock support",
    },
  ];

  return (
    <section className="py-20 relative z-10 bg-space-gradient">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leading AI Healthcare
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering revolutionary AI-powered healthcare services with
            cutting-edge technology and intelligent compassionate care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glassmorphism rounded-2xl p-8 text-center border border-white/20 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalStats;
