
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Award, Users, Heart, Shield, Clock, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, dignity, and respect.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Patient safety is our top priority in everything we do.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborative approach to healthcare delivery.'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Years of Service' },
    { number: '50,000+', label: 'Lives Touched' },
    { number: '100+', label: 'Medical Experts' },
    { number: '15+', label: 'Specialties' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Visishta Hospitals
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated to providing exceptional healthcare services with compassion, 
                innovation, and clinical excellence for over two decades.
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
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To provide world-class healthcare services that combine advanced medical 
                  technology with compassionate care, ensuring the best possible outcomes 
                  for our patients and their families.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe in treating not just the illness, but the whole person, 
                  with dignity, respect, and unwavering commitment to their wellbeing.
                </p>
                <div className="flex items-center space-x-4">
                  <Award className="w-12 h-12 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">JCI Accredited</h3>
                    <p className="text-gray-600">International standards of care</p>
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
                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-blue-100 mb-6">
                    To be the leading healthcare provider in the region, known for 
                    clinical excellence, innovative treatments, and exceptional patient experience.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-6 h-6" />
                    <span>Available 24/7 for emergencies</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
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
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced healthcare professionals leading our mission
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Dr. Rajesh Kumar</h3>
              <p className="text-xl text-blue-100 mb-4">Chief Medical Officer</p>
              <p className="text-blue-100 max-w-2xl mx-auto">
                "Our commitment to excellence in healthcare drives us to continuously 
                innovate and improve our services for the benefit of our patients and community."
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
