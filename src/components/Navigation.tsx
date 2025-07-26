
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Heart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ];

  const portals = [
    { name: 'Patient Portal', icon: User, color: 'bg-blue-500', href: '/patient-portal' },
    { name: 'Doctor Portal', icon: Heart, color: 'bg-green-500', href: '/doctor-portal' },
    { name: 'Staff Portal', icon: Users, color: 'bg-pink-500', href: '/staff-portal' },
    { name: 'Admin Portal', icon: Shield, color: 'bg-purple-500', href: '/admin-portal' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d7dd68d2-3397-4f22-a80e-c03e9dca8d60.png" 
                alt="Visishta Hospitals" 
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  VISISHTA
                </span>
                <span className="text-sm text-gray-600 -mt-1">
                  HOSPITALS
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
            
            {/* Portal Buttons */}
            <div className="flex items-center space-x-2">
              {portals.map((portal) => (
                <motion.div key={portal.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to={portal.href}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="relative overflow-hidden group"
                    >
                      <portal.icon className="w-4 h-4 mr-2" />
                      {portal.name}
                      <div className={`absolute inset-0 ${portal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-200`} />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-200">
              {portals.map((portal) => (
                <Link key={portal.name} to={portal.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mb-2 justify-start"
                  >
                    <portal.icon className="w-4 h-4 mr-2" />
                    {portal.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
