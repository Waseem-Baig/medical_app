import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  Users,
  Activity,
  Clock,
  AlertTriangle,
  Thermometer,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const NursePortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Activity },
    { id: "patients", label: "My Patients", icon: Users },
    { id: "vitals", label: "Vitals Recording", icon: Thermometer },
    { id: "medications", label: "Medications", icon: Heart },
  ];

  const todayStats = {
    assignedPatients: 12,
    vitalsRecorded: 28,
    medicationsAdministered: 24,
    alertsActive: 3,
  };

  const patientQueue = [
    {
      id: 1,
      name: "Sarah Johnson",
      room: "101A",
      priority: "high",
      lastVitals: "2 hours ago",
      condition: "Post-surgery monitoring",
    },
    {
      id: 2,
      name: "Mike Chen",
      room: "102B",
      priority: "normal",
      lastVitals: "4 hours ago",
      condition: "Recovery",
    },
    {
      id: 3,
      name: "Emma Wilson",
      room: "103A",
      priority: "urgent",
      lastVitals: "30 min ago",
      condition: "Chest pain observation",
    },
  ];

  const vitalsData = [
    {
      patient: "Sarah Johnson",
      room: "101A",
      temp: "98.6°F",
      bp: "120/80",
      pulse: "72",
      respiration: "16",
      status: "normal",
    },
    {
      patient: "Mike Chen",
      room: "102B",
      temp: "99.2°F",
      bp: "140/90",
      pulse: "88",
      respiration: "18",
      status: "attention",
    },
    {
      patient: "Emma Wilson",
      room: "103A",
      temp: "100.1°F",
      bp: "150/95",
      pulse: "95",
      respiration: "22",
      status: "critical",
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
          <h1 className="text-3xl font-bold text-white mb-2">
            AI Nurse Portal
          </h1>
          <p className="text-gray-300">
            Welcome, Nurse Jennifer - Floor 2 East Wing | AI-Powered Care
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
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
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
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">
                        AI-Assigned Patients
                      </p>
                      <p className="text-3xl font-bold text-blue-400">
                        {todayStats.assignedPatients}
                      </p>
                    </div>
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">
                        Smart Vitals Recorded
                      </p>
                      <p className="text-3xl font-bold text-green-400">
                        {todayStats.vitalsRecorded}
                      </p>
                    </div>
                    <Thermometer className="w-8 h-8 text-green-400" />
                  </div>
                </div>

                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">
                        AI-Verified Medications
                      </p>
                      <p className="text-3xl font-bold text-purple-400">
                        {todayStats.medicationsAdministered}
                      </p>
                    </div>
                    <Heart className="w-8 h-8 text-purple-400" />
                  </div>
                </div>

                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">
                        AI Priority Alerts
                      </p>
                      <p className="text-3xl font-bold text-red-400">
                        {todayStats.alertsActive}
                      </p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                </div>
              </div>

              {/* Patient Queue */}
              <div className="glassmorphism rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  AI Patient Queue
                </h3>
                <div className="space-y-4">
                  {patientQueue.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold text-white">
                            {patient.name}
                          </h4>
                          <span className="text-gray-300">
                            Room {patient.room}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              patient.priority === "urgent"
                                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                : patient.priority === "high"
                                ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                                : "bg-green-500/20 text-green-300 border border-green-500/30"
                            }`}
                          >
                            {patient.priority}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                          {patient.condition}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3 mr-1" />
                          Last vitals: {patient.lastVitals}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:border-blue-500/30 bg-transparent"
                        >
                          Record Vitals
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white bg-transparent hover:border-blue-500/30"
                        >
                          View Chart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "vitals" && (
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                AI Patient Vitals
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Patient
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Room
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Temperature
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Blood Pressure
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Pulse
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Respiration
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vitalsData.map((vital, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/5"
                      >
                        <td className="py-3 px-4 font-medium text-white">
                          {vital.patient}
                        </td>
                        <td className="py-3 px-4 text-gray-300">
                          {vital.room}
                        </td>
                        <td className="py-3 px-4 text-gray-300">
                          {vital.temp}
                        </td>
                        <td className="py-3 px-4 text-gray-300">{vital.bp}</td>
                        <td className="py-3 px-4 text-gray-300">
                          {vital.pulse}
                        </td>
                        <td className="py-3 px-4 text-gray-300">
                          {vital.respiration}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              vital.status === "normal"
                                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                : vital.status === "attention"
                                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                : "bg-red-500/20 text-red-300 border border-red-500/30"
                            }`}
                          >
                            {vital.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-white/20 text-white hover:border-blue-500 bg-transparent"
                          >
                            Update
                          </Button>
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
