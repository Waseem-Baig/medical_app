import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  Users,
  FileText,
  Activity,
  Clock,
  AlertTriangle,
  TrendingUp,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const DoctorPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Activity },
    { id: "patients", label: "My Patients", icon: Users },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "reports", label: "Reports", icon: FileText },
  ];

  const todayStats = {
    totalPatients: 18,
    completedAppointments: 12,
    pendingAppointments: 6,
    criticalAlerts: 2,
  };

  const upcomingAppointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      time: "09:00 AM",
      condition: "Follow-up - Hypertension",
      priority: "normal",
    },
    {
      id: 2,
      patient: "Mike Chen",
      time: "10:30 AM",
      condition: "Chest Pain Assessment",
      priority: "urgent",
    },
    {
      id: 3,
      patient: "Emma Wilson",
      time: "02:00 PM",
      condition: "Routine Checkup",
      priority: "normal",
    },
  ];

  const patientAlerts = [
    {
      id: 1,
      patient: "Robert Davis",
      alert: "Blood pressure reading: 180/120",
      severity: "critical",
      time: "2 hours ago",
    },
    {
      id: 2,
      patient: "Lisa Brown",
      alert: "Lab results ready for review",
      severity: "normal",
      time: "4 hours ago",
    },
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Alice Cooper",
      lastVisit: "2024-01-12",
      condition: "Diabetes Management",
      status: "stable",
    },
    {
      id: 2,
      name: "John Smith",
      lastVisit: "2024-01-11",
      condition: "Post-surgery follow-up",
      status: "improving",
    },
    {
      id: 3,
      name: "Maria Garcia",
      lastVisit: "2024-01-10",
      condition: "Migraine Treatment",
      status: "needs attention",
    },
  ];

  return (
    <div className="min-h-screen bg-space-gradient">
      <Navigation />

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2 font-dmsans">
            AI Doctor Portal
          </h1>
          <p className="text-gray-300">
            Welcome, Dr. Sarah Johnson - AI-Enhanced Cardiology
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 glassmorphism rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white cta-glow"
                  : "text-gray-300 hover:text-white hover:bg-blue-500/20"
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
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Today's Patients</p>
                      <p className="text-3xl font-bold text-blue-400">
                        {todayStats.totalPatients}
                      </p>
                    </div>
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Completed</p>
                      <p className="text-3xl font-bold text-green-400">
                        {todayStats.completedAppointments}
                      </p>
                    </div>
                    <Activity className="w-8 h-8 text-green-400" />
                  </div>
                </div>

                <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Pending</p>
                      <p className="text-3xl font-bold text-yellow-400">
                        {todayStats.pendingAppointments}
                      </p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>

                <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Critical Alerts</p>
                      <p className="text-3xl font-bold text-red-400">
                        {todayStats.criticalAlerts}
                      </p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Today's AI-Enhanced Schedule
                  </h3>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-3 border border-blue-500/30 glassmorphism rounded-lg hover:border-blue-400/50 transition-all"
                      >
                        <div>
                          <h4 className="font-semibold text-white">
                            {appointment.patient}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {appointment.condition}
                          </p>
                          <div className="flex items-center mt-1">
                            <Clock className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-400">
                              {appointment.time}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.priority === "urgent"
                              ? "bg-red-500/20 text-red-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                        >
                          {appointment.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patient Alerts */}
                <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    AI Patient Alerts
                  </h3>
                  <div className="space-y-4">
                    {patientAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-4 rounded-lg border-l-4 glassmorphism ${
                          alert.severity === "critical"
                            ? "border-red-400 bg-red-500/10"
                            : "border-blue-400 bg-blue-500/10"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-white">
                              {alert.patient}
                            </h4>
                            <p className="text-gray-300 text-sm mt-1">
                              {alert.alert}
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                              {alert.time}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700"
                          >
                            Review
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "patients" && (
            <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                My AI-Monitored Patients
              </h3>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="border border-blue-500/30 glassmorphism rounded-lg p-4 hover:border-blue-400/50 transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-white">
                          {patient.name}
                        </h4>
                        <p className="text-gray-300">{patient.condition}</p>
                        <p className="text-gray-400 text-sm">
                          Last visit: {patient.lastVisit}
                        </p>
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                            patient.status === "stable"
                              ? "bg-green-500/20 text-green-300"
                              : patient.status === "improving"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {patient.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700"
                        >
                          View Chart
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-none hover:from-green-700 hover:to-blue-700"
                        >
                          Message
                        </Button>
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
