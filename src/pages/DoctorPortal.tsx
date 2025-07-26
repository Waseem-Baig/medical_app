
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Users, FileText, Activity, Clock, AlertTriangle, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const DoctorPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'patients', label: 'My Patients', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const todayStats = {
    totalPatients: 18,
    completedAppointments: 12,
    pendingAppointments: 6,
    criticalAlerts: 2
  };

  const upcomingAppointments = [
    { id: 1, patient: 'Sarah Johnson', time: '09:00 AM', condition: 'Follow-up - Hypertension', priority: 'normal' },
    { id: 2, patient: 'Mike Chen', time: '10:30 AM', condition: 'Chest Pain Assessment', priority: 'urgent' },
    { id: 3, patient: 'Emma Wilson', time: '02:00 PM', condition: 'Routine Checkup', priority: 'normal' },
  ];

  const patientAlerts = [
    { id: 1, patient: 'Robert Davis', alert: 'Blood pressure reading: 180/120', severity: 'critical', time: '2 hours ago' },
    { id: 2, patient: 'Lisa Brown', alert: 'Lab results ready for review', severity: 'normal', time: '4 hours ago' },
  ];

  const recentPatients = [
    { id: 1, name: 'Alice Cooper', lastVisit: '2024-01-12', condition: 'Diabetes Management', status: 'stable' },
    { id: 2, name: 'John Smith', lastVisit: '2024-01-11', condition: 'Post-surgery follow-up', status: 'improving' },
    { id: 3, name: 'Maria Garcia', lastVisit: '2024-01-10', condition: 'Migraine Treatment', status: 'needs attention' },
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Doctor Portal</h1>
          <p className="text-gray-600">Welcome, Dr. Sarah Johnson - Cardiology</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-md'
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
                      <p className="text-gray-600 text-sm">Today's Patients</p>
                      <p className="text-3xl font-bold text-blue-600">{todayStats.totalPatients}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Completed</p>
                      <p className="text-3xl font-bold text-green-600">{todayStats.completedAppointments}</p>
                    </div>
                    <Activity className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Pending</p>
                      <p className="text-3xl font-bold text-yellow-600">{todayStats.pendingAppointments}</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Critical Alerts</p>
                      <p className="text-3xl font-bold text-red-600">{todayStats.criticalAlerts}</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Today's Schedule</h3>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                        <div>
                          <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                          <p className="text-gray-600 text-sm">{appointment.condition}</p>
                          <div className="flex items-center mt-1">
                            <Clock className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{appointment.time}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.priority === 'urgent' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {appointment.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patient Alerts */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Alerts</h3>
                  <div className="space-y-4">
                    {patientAlerts.map((alert) => (
                      <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                        alert.severity === 'critical' ? 'bg-red-50 border-red-400' : 'bg-blue-50 border-blue-400'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{alert.patient}</h4>
                            <p className="text-gray-700 text-sm mt-1">{alert.alert}</p>
                            <p className="text-gray-500 text-xs mt-2">{alert.time}</p>
                          </div>
                          <Button variant="outline" size="sm">Review</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'patients' && (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">My Patients</h3>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                        <p className="text-gray-600">{patient.condition}</p>
                        <p className="text-gray-500 text-sm">Last visit: {patient.lastVisit}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                          patient.status === 'stable' ? 'bg-green-100 text-green-800' : 
                          patient.status === 'improving' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {patient.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View Chart</Button>
                        <Button variant="outline" size="sm">Message</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorPortal;
