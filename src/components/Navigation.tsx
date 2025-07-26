import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  const portals = [
    {
      name: "AI Patient Portal",
      icon: User,
      color: "bg-blue-500",
      href: "/patient-portal",
    },
    {
      name: "AI Doctor Portal",
      icon: Heart,
      color: "bg-purple-500",
      href: "/doctor-portal",
    },
    {
      name: "AI Staff Portal",
      icon: Users,
      color: "bg-blue-600",
      href: "/staff-portal",
    },
    {
      name: "AI Admin Portal",
      icon: Shield,
      color: "bg-purple-600",
      href: "/admin-portal",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full glassmorphism backdrop-blur-xl border-b border-white/20 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 glassmorphism rounded-full p-1 border border-white/20">
                <img
                  src="/lovable-uploads/d7dd68d2-3397-4f22-a80e-c03e9dca8d60.png"
                  alt="AI Medical Hub"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white">
                  AI MEDICAL HUB
                </span>
                <span className="text-xs sm:text-sm text-gray-300 -mt-1 hidden sm:block">
                  INTELLIGENT HEALTHCARE
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}

            {/* Portal Buttons */}
            <div className="flex items-center space-x-1 xl:space-x-2">
              {portals.map((portal) => (
                <motion.div
                  key={portal.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={portal.href}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="relative overflow-hidden group border-white/30 text-white hover:border-white/50 text-xs xl:text-sm px-2 xl:px-3 h-8 xl:h-9 bg-transparent"
                    >
                      <portal.icon className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                      <span className="hidden xl:inline">{portal.name}</span>
                      <span className="xl:hidden">
                        {portal.name.split(" ")[1]}
                      </span>
                      <div
                        className={`absolute inset-0 ${portal.color} opacity-0 group-hover:opacity-20 transition-opacity duration-200`}
                      />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 glassmorphism mt-2 rounded-lg border border-white/20">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className="block px-4 py-3 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-white/20 mx-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {portals.map((portal) => (
                  <Link
                    key={portal.name}
                    to={portal.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-white/30 text-white bg-transparent hover:border-white/50 text-xs h-10"
                    >
                      <portal.icon className="w-4 h-4 mr-2" />
                      <span className="truncate">{portal.name}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
