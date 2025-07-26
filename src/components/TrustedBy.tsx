import { motion } from "framer-motion";

const TrustedBy = () => {
  const companies = [
    { name: "AI Medical Center", logo: "🤖" },
    { name: "Smart Healthcare Hub", logo: "🧠" },
    { name: "Digital Wellness AI", logo: "💡" },
    { name: "Intelligent Care Systems", logo: "⚡" },
    { name: "Future Health AI", logo: "🚀" },
  ];

  return (
    <section className="py-20 bg-space-gradient relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-8 h-8 bg-purple-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-1/4 w-4 h-4 bg-cyan-500/20 rounded-full blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-300 uppercase tracking-wide mb-12">
            Trusted by leading AI-powered healthcare providers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="glassmorphism rounded-2xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-center space-y-4">
                  {/* Logo Background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <div className="text-3xl">{company.logo}</div>
                  </motion.div>

                  {/* Company Name */}
                  <span className="text-sm font-medium text-white group-hover:text-gray-100 transition-colors text-center leading-tight">
                    {company.name}
                  </span>

                  {/* Enhanced glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
