
import { motion } from 'framer-motion';
import { Shield, Clock, Users, BarChart3 } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'HIPAA compliant with enterprise-grade security to protect patient data.',
    },
    {
      icon: Clock,
      title: 'Streamlined Workflow',
      description: 'Reduce administrative overhead and focus more on patient care.',
    },
    {
      icon: Users,
      title: 'Collaborative Care',
      description: 'Enable seamless communication between all healthcare team members.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive analytics and reporting.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MedCare HMS?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive hospital management system is designed to improve efficiency,
            enhance patient care, and streamline operations across your healthcare facility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
