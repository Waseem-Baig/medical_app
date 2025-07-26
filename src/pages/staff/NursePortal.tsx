
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Users, Activity, Clock, AlertTriangle, Thermometer, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const NursePortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'patients', label: 'My Patients', icon: Users },
    { id: 'vitals', label: 'Vitals Recording', icon: Thermometer },
    { id: 'medications', label: 'Medications', icon: Heart },
  ];

  const todayStats = {
    assignedPatients: 12,
    vitalsRecorded: 28,
    medicationsAdministered: 24,
    alertsActive: 3
  };

  const patientQueue = [
    { id: 1, name: 'Sarah Johnson', room: '101A', priority: 'high', lastVitals: '2 hours ago', condition: 'Post-surgery monitoring' },
    { id: 2, name: 'Mike Chen', room: '102B', priority: 'normal', lastVitals: '4 hours ago', condition: 'Recovery' },
    { id: 3, name: 'Emma Wilson', room: '103A', priority: 'urgent', lastVitals: '30 min ago', condition: 'Chest pain observation' },
  ];

  const vitalsData = [
    { patient: 'Sarah Johnson', room: '101A', temp: '98.6°F', bp: '120/80', pulse: '72', respiration: '16', status: 'normal' },
    { patient: 'Mike Chen', room: '102B', temp: '99.2°F', bp: '140/90', pulse: '88', respiration: '18', status: 'attention' },
    { patient: 'Emma Wilson', room: '103A', temp: '100.1°F', bp: '150/95', pulse: '95', respiration: '22', status: 'critical' },
  ];

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nurse Portal</h1>
          <p className="text-gray-600">Welcome, Nurse Jennifer - Floor 2 East Wing</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-pink-600 text-white shadow-md'
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
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Assigned Patients</p>
                      <p className="text-3xl font-bold text-blue-600">{todayStats.assignedPatients}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Vitals Recorded</p>
                      <p className="text-3xl font-bold text-green-600">{todayStats.vitalsRecorded}</p>
                    </div>
                    <Thermometer className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Medications Given</p>
                      <p className="text-3xl font-bold text-purple-600">{todayStats.medicationsAdministered}</p>
                    </div>
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Active Alerts</p>
                      <p className="text-3xl font-bold text-red-600">{todayStats.alertsActive}</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Patient Queue */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Queue</h3>
                <div className="space-y-4">
                  {patientQueue.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                          <span className="text-gray-500">Room {patient.room}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            patient.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                            patient.priority === 'high' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {patient.priority}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{patient.condition}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          Last vitals: {patient.lastVitals}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Record Vitals</Button>
                        <Button variant="outline" size="sm">View Chart</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Patient Vitals</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Patient</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Room</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Temperature</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Blood Pressure</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Pulse</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Respiration</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vitalsData.map((vital, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{vital.patient}</td>
                        <td className="py-3 px-4 text-gray-600">{vital.room}</td>
                        <td className="py-3 px-4 text-gray-600">{vital.temp}</td>
                        <td className="py-3 px-4 text-gray-600">{vital.bp}</td>
                        <td className="py-3 px-4 text-gray-600">{vital.pulse}</td>
                        <td className="py-3 px-4 text-gray-600">{vital.respiration}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            vital.status === 'normal' ? 'bg-green-100 text-green-800' :
                            vital.status === 'attention' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {vital.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">Update</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NursePortal;
