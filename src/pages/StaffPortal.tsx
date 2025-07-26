import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Microscope,
  Zap,
  Truck,
  Trash2,
  Megaphone,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const StaffPortal = () => {
  const staffRoles = [
    {
      id: "nurse",
      name: "AI Nurse Portal",
      icon: Heart,
      color: "bg-pink-500",
      description:
        "AI-assisted patient care, smart vitals monitoring, and intelligent shift management",
      href: "/staff/nurse",
    },
    {
      id: "pharmacist",
      name: "Smart Pharmacy Portal",
      icon: Users,
      color: "bg-green-500",
      description:
        "AI prescription management, predictive inventory, and automated drug dispensing",
      href: "/staff/pharmacist",
    },
    {
      id: "lab-technician",
      name: "AI Lab Portal",
      icon: Microscope,
      color: "bg-blue-500",
      description:
        "Intelligent test processing, automated analysis, and AI-powered result reporting",
      href: "/staff/lab-technician",
    },
    {
      id: "xray-technician",
      name: "AI Imaging Portal",
      icon: Zap,
      color: "bg-purple-500",
      description:
        "Smart imaging services, AI diagnostic assistance, and automated scan analysis",
      href: "/staff/xray-technician",
    },
    {
      id: "logistics",
      name: "Smart Logistics Portal",
      icon: Truck,
      color: "bg-orange-500",
      description:
        "AI supply chain optimization, predictive inventory, and smart transportation",
      href: "/staff/logistics",
    },
    {
      id: "scavenger",
      name: "AI Sanitation Portal",
      icon: Trash2,
      color: "bg-gray-500",
      description:
        "Smart waste management, automated cleaning schedules, and AI hygiene monitoring",
      href: "/staff/scavenger",
    },
    {
      id: "outreach",
      name: "AI Outreach Portal",
      icon: Megaphone,
      color: "bg-teal-500",
      description:
        "Intelligent community programs, AI health education, and targeted patient outreach",
      href: "/staff/outreach",
    },
    {
      id: "marketing",
      name: "AI Marketing Portal",
      icon: DollarSign,
      color: "bg-indigo-500",
      description:
        "Smart campaigns, AI patient acquisition, and intelligent brand management",
      href: "/staff/marketing",
    },
  ];

  return (
    <div className="min-h-screen bg-space-gradient">
      <Navigation />

      <div className="pt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4 font-dmsans">
            AI Staff Portal
          </h1>
          <p className="text-xl text-gray-300">
            Select your department to access your AI-powered dashboard
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staffRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism rounded-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className={`${role.color} h-2 opacity-80`}></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`${role.color} rounded-full p-4 group-hover:scale-110 transition-transform duration-300 cta-glow`}
                  >
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3 font-dmsans">
                  {role.name}
                </h3>
                <p className="text-gray-300 text-center text-sm mb-6">
                  {role.description}
                </p>
                <Link to={role.href} className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border-0 cta-glow">
                    Access AI Portal
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
