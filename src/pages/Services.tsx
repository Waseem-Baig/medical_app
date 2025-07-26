
import { motion } from 'framer-motion';
import { Heart, Calendar, Brain, Shield, Users, Phone, Zap, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive patient data management with secure cloud storage, real-time updates, and seamless integration across all departments.",
      features: ["Patient History Tracking", "Medical Record Management", "Lab Results Integration", "Prescription History"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Advanced scheduling system with automated reminders, waitlist management, and multi-channel notifications.",
      features: ["Online Booking", "SMS/Email Reminders", "Waitlist Management", "Resource Scheduling"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive analytics, treatment recommendations, and operational insights.",
      features: ["Predictive Diagnostics", "Treatment Suggestions", "Resource Optimization", "Risk Assessment"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Bank-level security with HIPAA compliance, role-based access control, and comprehensive audit trails.",
      features: ["HIPAA Compliance", "Data Encryption", "Access Control", "Audit Logging"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Multi-Department Integration",
      description: "Seamless workflow integration across all hospital departments with role-specific dashboards and permissions.",
      features: ["Department Workflows", "Role-Based Access", "Inter-department Communication", "Unified Dashboard"],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Phone,
      title: "Telehealth Platform",
      description: "Integrated video consultation platform with e-prescriptions, digital monitoring, and remote patient care.",
      features: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions", "Patient Portal"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50"
    },
    {
      icon: Zap,
      title: "Emergency Response System",
      description: "Real-time emergency management with automated alerts, resource allocation, and critical care coordination.",
      features: ["Emergency Alerts", "Resource Tracking", "Critical Care Protocols", "Response Automation"],
      color: "from-red-600 to-orange-500",
      bgColor: "bg-red-50"
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Advanced reporting and analytics for operational efficiency, financial management, and strategic planning.",
      features: ["Financial Reports", "Operational Metrics", "Performance Analytics", "Strategic Insights"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Comprehensive Healthcare
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Management Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your healthcare facility with our complete suite of integrated services. 
                From patient care to operational excellence, we provide everything you need to deliver exceptional healthcare.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3">
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Healthcare Facility?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of healthcare providers who trust our comprehensive HMS solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Schedule Demo
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
