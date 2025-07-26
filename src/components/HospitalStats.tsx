import { motion } from 'framer-motion';
import { Users, Calendar, Award, Clock } from 'lucide-react';

const HospitalStats = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Patients Served',
      description: 'Happy patients treated with care'
    },
    {
      icon: Calendar,
      number: '500+',
      label: 'Daily Appointments',
      description: 'Scheduled consultations per day'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Expert Doctors',
      description: 'Specialized medical professionals'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Care',
      description: 'Round-the-clock medical support'
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Leading Healthcare
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering world-class healthcare services with state-of-the-art technology and compassionate care
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalStats;
