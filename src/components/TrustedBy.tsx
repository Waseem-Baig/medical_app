
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const companies = [
    { name: 'Hospital A', logo: '🏥' },
    { name: 'Clinic B', logo: '🏥' },
    { name: 'Medical Center C', logo: '🏥' },
    { name: 'Healthcare D', logo: '🏥' },
    { name: 'Wellness E', logo: '🏥' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted by leading healthcare providers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="text-4xl">{company.logo}</div>
                <span className="text-sm text-gray-600">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
