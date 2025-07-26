
import { motion } from 'framer-motion';
import { Heart, Users, Microscope, Zap, Truck, Trash2, Megaphone, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const StaffPortal = () => {
  const staffRoles = [
    { 
      id: 'nurse', 
      name: 'Nurse Portal', 
      icon: Heart, 
      color: 'bg-pink-500', 
      description: 'Patient care, vitals recording, and shift management',
      href: '/staff/nurse'
    },
    { 
      id: 'pharmacist', 
      name: 'Pharmacist Portal', 
      icon: Users, 
      color: 'bg-green-500', 
      description: 'Prescription management, inventory, and drug dispensing',
      href: '/staff/pharmacist'
    },
    { 
      id: 'lab-technician', 
      name: 'Lab Technician Portal', 
      icon: Microscope, 
      color: 'bg-blue-500', 
      description: 'Test processing, sample management, and result reporting',
      href: '/staff/lab-technician'
    },
    { 
      id: 'xray-technician', 
      name: 'X-Ray & Scans Unit', 
      icon: Zap, 
      color: 'bg-purple-500', 
      description: 'Imaging services, equipment management, and scan reporting',
      href: '/staff/xray-technician'
    },
    { 
      id: 'logistics', 
      name: 'Logistics Portal', 
      icon: Truck, 
      color: 'bg-orange-500', 
      description: 'Supply chain, inventory management, and transportation',
      href: '/staff/logistics'
    },
    { 
      id: 'scavenger', 
      name: 'Sanitation Portal', 
      icon: Trash2, 
      color: 'bg-gray-500', 
      description: 'Waste management, cleaning schedules, and hygiene maintenance',
      href: '/staff/scavenger'
    },
    { 
      id: 'outreach', 
      name: 'Outreach Portal', 
      icon: Megaphone, 
      color: 'bg-teal-500', 
      description: 'Community programs, health education, and patient outreach',
      href: '/staff/outreach'
    },
    { 
      id: 'marketing', 
      name: 'Marketing Portal', 
      icon: DollarSign, 
      color: 'bg-indigo-500', 
      description: 'Campaigns, patient acquisition, and brand management',
      href: '/staff/marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Staff Portal</h1>
          <p className="text-xl text-gray-600">Select your department to access your personalized dashboard</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staffRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`${role.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className={`${role.color} rounded-full p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{role.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-6">{role.description}</p>
                <Link to={role.href} className="block">
                  <Button className="w-full group-hover:bg-gray-900 transition-colors duration-300">
                    Access Portal
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
