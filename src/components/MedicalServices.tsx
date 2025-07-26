
import { motion } from 'framer-motion';
import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from 'lucide-react';

const MedicalServices = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced heart care with cutting-edge diagnostic and treatment options.',
      features: ['ECG & Echo', 'Cardiac Surgery', 'Preventive Care']
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Comprehensive neurological care for brain and nervous system disorders.',
      features: ['Brain Imaging', 'Stroke Care', 'Epilepsy Treatment']
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert treatment for bone, joint, and musculoskeletal conditions.',
      features: ['Joint Replacement', 'Sports Medicine', 'Trauma Care']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      features: ['Cataract Surgery', 'Retinal Care', 'Vision Correction']
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents.',
      features: ['Newborn Care', 'Vaccinations', 'Growth Monitoring']
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for common medical conditions.',
      features: ['Health Checkups', 'Chronic Disease', 'Preventive Care']
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Medical
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Specialties
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by our team of experienced specialists
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
