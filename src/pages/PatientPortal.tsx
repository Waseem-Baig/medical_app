
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, FileText, CreditCard, User, Heart, Activity, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'records', label: 'Medical Records', icon: FileText },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Sarah Johnson', specialty: 'Cardiology', date: '2024-01-15', time: '10:00 AM', status: 'confirmed' },
    { id: 2, doctor: 'Dr. Michael Chen', specialty: 'General Medicine', date: '2024-01-22', time: '2:30 PM', status: 'pending' },
  ];

  const recentTests = [
    { id: 1, test: 'Blood Test', date: '2024-01-05', result: 'Normal', status: 'completed' },
    { id: 2, test: 'X-Ray Chest', date: '2024-01-03', result: 'Normal', status: 'completed' },
    { id: 3, test: 'ECG', date: '2023-12-28', result: 'Abnormal', status: 'completed' },
  ];

  const vitalSigns = {
    bloodPressure: '120/80',
    heartRate: '72 bpm',
    temperature: '98.6°F',
    weight: '150 lbs',
    lastUpdated: '2024-01-10'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Patient Portal</h1>
          <p className="text-gray-600">Welcome back, John Doe</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Vital Signs */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Vital Signs</h3>
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blood Pressure:</span>
                    <span className="font-medium">{vitalSigns.bloodPressure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Heart Rate:</span>
                    <span className="font-medium">{vitalSigns.heartRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temperature:</span>
                    <span className="font-medium">{vitalSigns.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">{vitalSigns.weight}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Last updated: {vitalSigns.lastUpdated}</p>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Next Appointment</h3>
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">{upcomingAppointments[0].doctor}</p>
                      <p className="text-sm text-gray-600">{upcomingAppointments[0].specialty}</p>
                      <p className="text-sm text-gray-600">{upcomingAppointments[0].date} at {upcomingAppointments[0].time}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                        upcomingAppointments[0].status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {upcomingAppointments[0].status}
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">No upcoming appointments</p>
                )}
              </div>

              {/* Recent Test Results */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Tests</h3>
                  <Activity className="w-6 h-6 text-green-500" />
                </div>
                <div className="space-y-3">
                  {recentTests.slice(0, 3).map((test) => (
                    <div key={test.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{test.test}</p>
                        <p className="text-xs text-gray-500">{test.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        test.result === 'Normal' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {test.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">My Appointments</h3>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                  Book New Appointment
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                        <p className="text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center text-gray-500 mt-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{appointment.date}</span>
                          <Clock className="w-4 h-4 ml-4 mr-1" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button variant="outline" size="sm">Cancel</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'records' && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Medical Records</h3>
              <div className="space-y-4">
                {recentTests.map((test) => (
                  <div key={test.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{test.test}</h4>
                        <p className="text-gray-600">Date: {test.date}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                          test.result === 'Normal' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {test.result}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Billing & Payments</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Outstanding Balance</h4>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-2xl font-bold text-red-600">$2,450.00</span>
                    </div>
                    <p className="text-red-600 text-sm mt-1">Payment due by January 20, 2024</p>
                    <Button className="mt-3 bg-red-600 hover:bg-red-700">Pay Now</Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Payment History</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Dec 15, 2023</span>
                      <span className="font-medium">$180.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Nov 22, 2023</span>
                      <span className="font-medium">$95.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Oct 18, 2023</span>
                      <span className="font-medium">$220.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PatientPortal;
