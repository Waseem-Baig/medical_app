import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashboardTab from "@/components/admin/DashboardTab";
import AnalyticsTab from "@/components/admin/AnalyticsTab";
import StaffTab from "@/components/admin/StaffTab";
import OperationsTab from "@/components/admin/OperationsTab";
import {
  tabs,
  kpiMetrics,
  dailyStats,
  departmentPerformance,
  staffDetails,
  operationsData,
} from "@/data/adminData";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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
            AI Admin Portal
          </h1>
          <p className="text-gray-300">
            Intelligent Hospital Management Dashboard
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
            <DashboardTab
              dailyStats={dailyStats}
              departmentPerformance={departmentPerformance}
            />
          )}

          {activeTab === "analytics" && (
            <AnalyticsTab kpiMetrics={kpiMetrics} />
          )}

          {activeTab === "staff" && <StaffTab staffDetails={staffDetails} />}

          {activeTab === "operations" && (
            <OperationsTab operationsData={operationsData} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPortal;
