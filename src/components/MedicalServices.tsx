import { motion } from "framer-motion";
import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from "lucide-react";

const MedicalServices = () => {
  const services = [
    {
      icon: Heart,
      title: "AI Cardiology",
      description:
        "AI-enhanced heart care with intelligent diagnostic and predictive treatment options.",
      features: [
        "AI-ECG Analysis",
        "Smart Cardiac Surgery",
        "AI Preventive Care",
      ],
    },
    {
      icon: Brain,
      title: "AI Neurology",
      description:
        "AI-powered neurological care for brain and nervous system with intelligent monitoring.",
      features: [
        "AI Brain Imaging",
        "Smart Stroke Care",
        "AI Epilepsy Treatment",
      ],
    },
    {
      icon: Bone,
      title: "AI Orthopedics",
      description:
        "Intelligent treatment for bone, joint, and musculoskeletal conditions with AI precision.",
      features: [
        "AI Joint Replacement",
        "Smart Sports Medicine",
        "AI Trauma Care",
      ],
    },
    {
      icon: Eye,
      title: "AI Ophthalmology",
      description:
        "AI-assisted eye care services from intelligent exams to precision surgeries.",
      features: [
        "AI Cataract Surgery",
        "Smart Retinal Care",
        "AI Vision Correction",
      ],
    },
    {
      icon: Baby,
      title: "AI Pediatrics",
      description:
        "AI-enhanced medical care for infants, children, and adolescents with smart monitoring.",
      features: [
        "AI Newborn Care",
        "Smart Vaccinations",
        "AI Growth Monitoring",
      ],
    },
    {
      icon: Stethoscope,
      title: "AI General Medicine",
      description:
        "AI-powered primary healthcare services with intelligent diagnosis and treatment.",
      features: [
        "AI Health Checkups",
        "Smart Chronic Disease",
        "AI Preventive Care",
      ],
    },
  ];

  return (
    <section className="py-20 bg-space-gradient relative z-10 overflow-hidden">
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
            Our AI Medical
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Specialties
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI-powered healthcare services delivered by our team
            of intelligent specialists
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
              className="glassmorphism rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
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
