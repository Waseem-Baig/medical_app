
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Globe, Lock, BarChart, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with sub-2 second load times and real-time updates across all modules."
    },
    {
      icon: Globe,
      title: "Multi-Platform Access",
      description: "Access from any device - web, mobile, or tablet with responsive design and offline capabilities."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Military-grade encryption, 2FA authentication, and comprehensive audit logging."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Real-time dashboards with KPI tracking, predictive analytics, and custom reporting."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Native mobile apps for iOS and Android with push notifications and offline sync."
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime SLA",
      description: "Guaranteed reliability with redundant systems, automated backups, and 24/7 monitoring."
    }
  ];

  const stats = [
    { number: "500+", label: "Hospitals Trust Us" },
    { number: "1M+", label: "Patients Served" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              MedCare HMS?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge technology and healthcare expertise to deliver 
            unmatched performance, security, and user experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
