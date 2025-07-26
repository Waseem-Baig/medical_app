import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Award, Users, Heart, Shield, Clock, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "AI-Powered Care",
      description:
        "Intelligent algorithms enhance patient care with precision and empathy.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "HIPAA-compliant systems protect patient data with enterprise-grade security.",
    },
    {
      icon: Star,
      title: "Innovation Excellence",
      description:
        "Cutting-edge technology meets the highest standards in medical care.",
    },
    {
      icon: Users,
      title: "Connected Ecosystem",
      description:
        "Seamless integration across all healthcare stakeholders and systems.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Hospitals Connected" },
    { number: "1M+", label: "Patients Served" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "AI Monitoring" },
  ];

  return (
    <div className="min-h-screen bg-space-gradient">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-space-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-dmsans">
                About
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MedCare HMS
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation hospital management system powered by AI,
                delivering exceptional healthcare services with innovation and
                clinical excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 font-dmsans">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-space-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-2xl p-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dmsans">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To revolutionize healthcare delivery through cutting-edge
                  technology, AI-powered solutions, and compassionate care,
                  ensuring optimal outcomes for patients in the digital age.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We integrate advanced medical technology with human touch,
                  creating seamless healthcare experiences with dignity,
                  respect, and unwavering commitment to patient wellbeing.
                </p>
                <div className="flex items-center space-x-4">
                  <Award className="w-12 h-12 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white font-dmsans">
                      HIPAA Compliant
                    </h3>
                    <p className="text-gray-300">
                      Secure & compliant healthcare solutions
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glassmorphism rounded-2xl p-8 text-white border border-blue-500/30 cta-glow">
                  <h3 className="text-2xl font-bold mb-4 font-dmsans">
                    Our Vision
                  </h3>
                  <p className="text-gray-300 mb-6">
                    To be the global leader in AI-powered healthcare management
                    systems, transforming how hospitals operate and deliver
                    patient care through innovative technology solutions.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">
                      24/7 AI-powered monitoring
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-space-gradient relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dmsans">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our AI-powered healthcare revolution
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 cta-glow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-dmsans">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-space-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dmsans">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visionary leaders driving healthcare innovation
              </p>
            </motion.div>

            <div className="glassmorphism rounded-2xl p-12 text-white text-center border border-purple-500/30 cta-glow">
              <h3 className="text-2xl font-bold mb-4 font-dmsans">
                Dr. Alex Chen
              </h3>
              <p className="text-xl text-blue-300 mb-4">
                Chief Technology Officer & AI Lead
              </p>
              <p className="text-gray-300 max-w-2xl mx-auto">
                "Our commitment to AI-driven healthcare innovation pushes us to
                continuously evolve and create solutions that transform patient
                care and hospital operations for the digital future."
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
