
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Globe, Lock, BarChart, Smartphone, Cloud, Shield, Users, Calendar, Bell, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Features = () => {
  const coreFeatures = [
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Sub-2 second load times with optimized cloud infrastructure and real-time synchronization across all devices."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption, multi-factor authentication, and comprehensive compliance with healthcare regulations."
    },
    {
      icon: Globe,
      title: "Multi-Platform Access",
      description: "Access from any device with responsive web design, native mobile apps, and offline capability."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Real-time dashboards, predictive insights, and customizable reports for data-driven decision making."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud hosting with 99.9% uptime guarantee, automated backups, and disaster recovery."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Intelligent alerts via SMS, email, and push notifications with customizable priority levels."
    }
  ];

  const detailedFeatures = [
    {
      category: "Patient Management",
      icon: Users,
      features: [
        "Complete EHR with medical history",
        "Patient portal for self-service",
        "Automated appointment reminders",
        "Insurance verification system",
        "Billing and payment processing",
        "Patient satisfaction surveys"
      ]
    },
    {
      category: "Clinical Operations",
      icon: Calendar,
      features: [
        "Smart scheduling algorithms",
        "Resource optimization",
        "Clinical decision support",
        "E-prescribing integration",
        "Lab results management",
        "Imaging study coordination"
      ]
    },
    {
      category: "Administrative Tools",
      icon: Database,
      features: [
        "Staff management system",
        "Inventory tracking",
        "Financial reporting",
        "Compliance monitoring",
        "Quality assurance metrics",
        "Vendor management"
      ]
    }
  ];

  const stats = [
    { number: "500K+", label: "Patients Managed" },
    { number: "1,000+", label: "Healthcare Providers" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Powerful Features
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Built for Healthcare
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover the comprehensive set of features that make our HMS the preferred choice 
                for healthcare providers worldwide. Built with cutting-edge technology and healthcare expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
              <p className="text-xl text-gray-600">Essential capabilities that power modern healthcare operations</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Feature Set</h2>
              <p className="text-xl text-gray-600">Everything you need to manage your healthcare facility efficiently</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {detailedFeatures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Healthcare Leaders</h2>
              <p className="text-xl text-purple-100">Join thousands of healthcare providers worldwide</p>
            </motion.div>

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
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Experience These Features Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how our comprehensive feature set can transform your healthcare operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
