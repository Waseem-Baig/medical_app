
import { motion } from 'framer-motion';
import { Activity, Shield, Users } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 z-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Logo with Pulsating Effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto">
            <img 
              src="/lovable-uploads/d7dd68d2-3397-4f22-a80e-c03e9dca8d60.png" 
              alt="Visishta Hospitals" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Brand Name with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
            VISISHTA
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-medium">
            HOSPITALS
          </p>
        </motion.div>

        {/* Loading Progress Bar with Gradient */}
        <div className="w-64 sm:w-80 h-3 bg-gray-200 rounded-full overflow-hidden mx-auto mb-8 shadow-inner">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"
          />
        </div>

        {/* Feature Icons Animation */}
        <div className="flex justify-center space-x-6 sm:space-x-8 mb-8">
          {[
            { icon: Activity, delay: 0.2, color: 'text-blue-500' },
            { icon: Shield, delay: 0.6, color: 'text-green-500' },
            { icon: Users, delay: 1.0, color: 'text-purple-500' }
          ].map(({ icon: Icon, delay, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0.3],
                scale: [0, 1, 0.8, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
              className={`${color}`}
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
          ))}
        </div>

        {/* Loading Text with Dots Animation */}
        <motion.div
          className="flex items-center justify-center space-x-1"
        >
          <span className="text-gray-700 font-medium text-lg sm:text-xl">Preparing your healthcare experience</span>
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
              className="text-blue-600 font-bold text-xl"
            >
              .
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
