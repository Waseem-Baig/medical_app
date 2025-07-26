import { motion } from 'framer-motion';
import { useState } from 'react';
import { BarChart, Users, Activity, TrendingUp, Calendar, DollarSign, Bed, AlertTriangle, UserCheck, Clock, Shield, Award, Settings, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'staff', label: 'Staff Management', icon: Users },
    { id: 'operations', label: 'Operations', icon: Activity },
  ];

  const kpiMetrics = {
    bedOccupancy: 85,
    patientSatisfaction: 92,
    averageStay: 3.2,
    readmissionRate: 8.5,
    revenuePerPatient: 2450,
    mortalityRate: 1.8,
    infectionRate: 2.1,
    medicationErrors: 0.3
  };

  const dailyStats = {
    totalPatients: 247,
    newAdmissions: 18,
    discharges: 15,
    emergencyVisits: 32,
    surgeries: 8,
    revenue: 125000
  };

  const departmentPerformance = [
    { name: 'Emergency', patients: 32, revenue: 18500, satisfaction: 89 },
    { name: 'Cardiology', patients: 24, revenue: 42000, satisfaction: 95 },
    { name: 'Pediatrics', patients: 19, revenue: 12800, satisfaction: 97 },
    { name: 'Surgery', patients: 8, revenue: 65000, satisfaction: 91 },
  ];

  const staffDetails = {
    doctors: {
      total: 45,
      onDuty: 28,
      offDuty: 17,
      avgWorkHours: 48.5,
      efficiency: 91,
      patientLoad: 12.3,
      departments: [
        { name: 'Cardiology', count: 8, efficiency: 92, avgExperience: 8.5, specializations: ['Interventional', 'Pediatric', 'Electrophysiology'], workload: 'High', satisfaction: 94 },
        { name: 'Emergency', count: 12, efficiency: 88, avgExperience: 6.2, specializations: ['Trauma', 'Critical Care', 'Toxicology'], workload: 'Very High', satisfaction: 87 },
        { name: 'Surgery', count: 10, efficiency: 95, avgExperience: 12.1, specializations: ['General', 'Orthopedic', 'Neurosurgery'], workload: 'High', satisfaction: 96 },
        { name: 'Pediatrics', count: 7, efficiency: 90, avgExperience: 9.8, specializations: ['Neonatology', 'General Pediatrics', 'Pediatric ICU'], workload: 'Medium', satisfaction: 98 },
        { name: 'Internal Medicine', count: 8, efficiency: 87, avgExperience: 7.3, specializations: ['Cardiology', 'Pulmonology', 'Gastroenterology'], workload: 'Medium', satisfaction: 89 }
      ]
    },
    nurses: {
      total: 120,
      onDuty: 67,
      offDuty: 53,
      avgWorkHours: 36.2,
      efficiency: 88,
      patientRatio: 4.2,
      shifts: [
        { shift: 'Morning (6AM-2PM)', count: 45, efficiency: 91, avgExperience: 5.8, certifications: 82, overtime: 12, satisfaction: 86 },
        { shift: 'Evening (2PM-10PM)', count: 42, efficiency: 89, avgExperience: 6.2, certifications: 78, overtime: 8, satisfaction: 88 },
        { shift: 'Night (10PM-6AM)', count: 33, efficiency: 85, avgExperience: 7.1, certifications: 85, overtime: 15, satisfaction: 84 }
      ]
    },
    support: {
      pharmacists: { 
        total: 12, 
        onDuty: 8, 
        efficiency: 94, 
        prescriptionsProcessed: 245, 
        errorRate: 0.02, 
        inventoryAccuracy: 99.8,
        clinicalConsultations: 34,
        drugInteractionAlerts: 18
      },
      labTechnicians: { 
        total: 18, 
        onDuty: 12, 
        efficiency: 88, 
        testsProcessed: 412, 
        avgTurnaroundTime: '2.4 hours', 
        accuracy: 99.6,
        equipmentUptime: 97,
        qualityScore: 96
      },
      xrayTechnicians: { 
        total: 8, 
        onDuty: 5, 
        efficiency: 92, 
        imagesProcessed: 89, 
        avgWaitTime: '18 minutes', 
        equipmentUtilization: 78,
        retakeRate: 2.1,
        patientSatisfaction: 94
      },
      logistics: { 
        total: 25, 
        onDuty: 18, 
        efficiency: 82, 
        deliveriesCompleted: 156, 
        onTimeDelivery: 94.2, 
        inventoryTurnover: 8.5,
        costSavings: 12.8,
        supplierRating: 4.6
      },
      scavengers: { 
        total: 15, 
        onDuty: 12, 
        efficiency: 78, 
        roomsCleaned: 234, 
        complianceScore: 96.8, 
        safetyIncidents: 0,
        timePerRoom: '22 minutes',
        qualityRating: 92
      },
      outreach: { 
        total: 6, 
        onDuty: 4, 
        efficiency: 87, 
        programsActive: 12, 
        patientsReached: 1247, 
        communityEvents: 8,
        healthScreenings: 156,
        educationSessions: 24
      },
      marketing: { 
        total: 4, 
        onDuty: 3, 
        efficiency: 90, 
        campaignsActive: 5, 
        leadGeneration: 89, 
        patientAcquisition: 34,
        digitalEngagement: 12.4,
        brandAwareness: 78
      }
    }
  };

  const operationsData = {
    equipmentStatus: [
      { 
        name: 'MRI Machine', 
        status: 'operational', 
        utilization: 85, 
        lastMaintenance: '2024-01-10',
        nextMaintenance: '2024-04-10',
        efficiency: 92,
        downtime: '2.1 hours',
        technician: 'John Smith'
      },
      { 
        name: 'CT Scanner', 
        status: 'operational', 
        utilization: 78, 
        lastMaintenance: '2024-01-08',
        nextMaintenance: '2024-04-08',
        efficiency: 89,
        downtime: '1.5 hours',
        technician: 'Sarah Johnson'
      },
      { 
        name: 'X-Ray Unit 1', 
        status: 'maintenance', 
        utilization: 0, 
        lastMaintenance: '2024-01-12',
        nextMaintenance: 'In Progress',
        efficiency: 0,
        downtime: '48 hours',
        technician: 'Mike Chen'
      },
      { 
        name: 'Ultrasound Unit', 
        status: 'operational', 
        utilization: 92, 
        lastMaintenance: '2024-01-05',
        nextMaintenance: '2024-04-05',
        efficiency: 96,
        downtime: '0.8 hours',
        technician: 'Lisa Wang'
      }
    ],
    resourceUtilization: {
      beds: { total: 200, occupied: 170, utilization: 85, available: 30, reserved: 15, maintenance: 5 },
      ors: { total: 8, occupied: 3, utilization: 38, scheduled: 5, available: 2, maintenance: 1 },
      icu: { total: 20, occupied: 18, utilization: 90, available: 2, reserved: 4, maintenance: 0 },
      emergency: { total: 15, occupied: 8, utilization: 53, available: 7, triage: 12, waiting: 5 }
    },
    inventory: [
      { 
        category: 'Medications', 
        stockLevel: 'Normal', 
        alertCount: 3, 
        totalItems: 1247, 
        lowStockItems: 23, 
        expiringSoon: 12,
        monthlyConsumption: '₹2.4L',
        reorderPoint: 89
      },
      { 
        category: 'Medical Supplies', 
        stockLevel: 'Low', 
        alertCount: 12, 
        totalItems: 892, 
        lowStockItems: 67, 
        expiringSoon: 5,
        monthlyConsumption: '₹1.8L',
        reorderPoint: 156
      },
      { 
        category: 'Surgical Equipment', 
        stockLevel: 'Normal', 
        alertCount: 1, 
        totalItems: 445, 
        lowStockItems: 8, 
        expiringSoon: 2,
        monthlyConsumption: '₹3.2L',
        reorderPoint: 34
      },
      { 
        category: 'PPE', 
        stockLevel: 'High', 
        alertCount: 0, 
        totalItems: 2156, 
        lowStockItems: 0, 
        expiringSoon: 0,
        monthlyConsumption: '₹0.9L',
        reorderPoint: 0
      }
    ],
    facilityManagement: {
      powerSystems: { status: 'Operational', backupPower: 'Available', efficiency: 94 },
      hvacSystems: { status: 'Operational', temperature: '22°C', humidity: '45%', efficiency: 89 },
      waterSystems: { status: 'Operational', pressure: 'Normal', quality: 'Excellent', efficiency: 92 },
      elevators: { total: 6, operational: 5, maintenance: 1, efficiency: 83 },
      security: { cameras: 'Online', accessControl: 'Active', incidents: 0, efficiency: 98 }
    }
  };

  const staffMetrics = {
    totalStaff: 340,
    doctorsOnDuty: 28,
    nursesOnDuty: 67,
    supportStaff: 45,
    staffUtilization: 78
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
          <p className="text-gray-600">Hospital Management Dashboard</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-md'
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
              {/* Daily Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Patients</p>
                      <p className="text-2xl font-bold text-blue-600">{dailyStats.totalPatients}</p>
                    </div>
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Admissions</p>
                      <p className="text-2xl font-bold text-green-600">{dailyStats.newAdmissions}</p>
                    </div>
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Discharges</p>
                      <p className="text-2xl font-bold text-yellow-600">{dailyStats.discharges}</p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Emergency</p>
                      <p className="text-2xl font-bold text-red-600">{dailyStats.emergencyVisits}</p>
                    </div>
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Surgeries</p>
                      <p className="text-2xl font-bold text-purple-600">{dailyStats.surgeries}</p>
                    </div>
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Revenue</p>
                      <p className="text-2xl font-bold text-green-600">${dailyStats.revenue.toLocaleString()}</p>
                    </div>
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Department Performance */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Department Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Patients</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Satisfaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentPerformance.map((dept, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{dept.name}</td>
                          <td className="py-3 px-4 text-gray-600">{dept.patients}</td>
                          <td className="py-3 px-4 text-gray-600">${dept.revenue.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              dept.satisfaction >= 95 ? 'bg-green-100 text-green-800' :
                              dept.satisfaction >= 90 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {dept.satisfaction}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* KPI Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Bed Occupancy</h4>
                    <Bed className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{kpiMetrics.bedOccupancy}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${kpiMetrics.bedOccupancy}%` }}></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Patient Satisfaction</h4>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{kpiMetrics.patientSatisfaction}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${kpiMetrics.patientSatisfaction}%` }}></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Avg Length of Stay</h4>
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{kpiMetrics.averageStay}</div>
                  <p className="text-gray-600 text-sm">days</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Readmission Rate</h4>
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{kpiMetrics.readmissionRate}%</div>
                  <p className="text-gray-600 text-sm">within 30 days</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Revenue/Patient</h4>
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">${kpiMetrics.revenuePerPatient}</div>
                  <p className="text-gray-600 text-sm">average</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Mortality Rate</h4>
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{kpiMetrics.mortalityRate}%</div>
                  <p className="text-gray-600 text-sm">hospital-wide</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Infection Rate</h4>
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{kpiMetrics.infectionRate}%</div>
                  <p className="text-gray-600 text-sm">HAI rate</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Medication Errors</h4>
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{kpiMetrics.medicationErrors}%</div>
                  <p className="text-gray-600 text-sm">error rate</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'staff' && (
            <div className="space-y-6">
              {/* Enhanced Staff Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Staff</p>
                      <p className="text-2xl font-bold text-blue-600">340</p>
                      <p className="text-xs text-gray-500 mt-1">+12 this month</p>
                    </div>
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Doctors On Duty</p>
                      <p className="text-2xl font-bold text-green-600">{staffDetails.doctors.onDuty}</p>
                      <p className="text-xs text-gray-500 mt-1">Avg: {staffDetails.doctors.avgWorkHours}h/week</p>
                    </div>
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Nurses On Duty</p>
                      <p className="text-2xl font-bold text-yellow-600">{staffDetails.nurses.onDuty}</p>
                      <p className="text-xs text-gray-500 mt-1">Ratio: 1:{staffDetails.nurses.patientRatio}</p>
                    </div>
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Support Staff</p>
                      <p className="text-2xl font-bold text-red-600">102</p>
                      <p className="text-xs text-gray-500 mt-1">All departments</p>
                    </div>
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Overall Efficiency</p>
                      <p className="text-2xl font-bold text-purple-600">89%</p>
                      <p className="text-xs text-gray-500 mt-1">+3% from last month</p>
                    </div>
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Enhanced Doctor Management */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Doctor Management - Detailed Analytics</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Doctors:</span>
                      <span className="font-semibold">{staffDetails.doctors.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Currently On Duty:</span>
                      <span className="text-green-600 font-semibold">{staffDetails.doctors.onDuty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Patient Load:</span>
                      <span className="font-semibold">{staffDetails.doctors.patientLoad} patients/doctor</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Overall Efficiency:</span>
                      <span className="font-semibold">{staffDetails.doctors.efficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Work Hours/Week:</span>
                      <span className="font-semibold">{staffDetails.doctors.avgWorkHours} hours</span>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Count</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Avg Experience</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Workload</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Efficiency</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Satisfaction</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Specializations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffDetails.doctors.departments.map((dept, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{dept.name}</td>
                          <td className="py-3 px-4 text-gray-600">{dept.count}</td>
                          <td className="py-3 px-4 text-gray-600">{dept.avgExperience} years</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              dept.workload === 'Very High' ? 'bg-red-100 text-red-800' :
                              dept.workload === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {dept.workload}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${dept.efficiency}%` }}></div>
                              </div>
                              <span className="text-sm font-medium">{dept.efficiency}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              dept.satisfaction >= 95 ? 'bg-green-100 text-green-800' :
                              dept.satisfaction >= 90 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {dept.satisfaction}%
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-wrap gap-1">
                              {dept.specializations.slice(0, 2).map((spec, idx) => (
                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                  {spec}
                                </span>
                              ))}
                              {dept.specializations.length > 2 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                                  +{dept.specializations.length - 2}
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Enhanced Support Staff */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Support Staff - Comprehensive Overview</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(staffDetails.support).map(([role, data]) => (
                    <div key={role} className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 capitalize mb-4 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        {role.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-gray-600 text-sm">Total:</span>
                            <p className="font-semibold">{data.total}</p>
                          </div>
                          <div>
                            <span className="text-gray-600 text-sm">On Duty:</span>
                            <p className="text-green-600 font-semibold">{data.onDuty}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {Object.entries(data).filter(([key]) => !['total', 'onDuty', 'efficiency'].includes(key)).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Efficiency</span>
                            <span>{data.efficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                data.efficiency >= 90 ? 'bg-green-600' :
                                data.efficiency >= 80 ? 'bg-blue-600' : 'bg-yellow-600'
                              }`}
                              style={{ width: `${data.efficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'operations' && (
            <div className="space-y-6">
              {/* Enhanced Resource Utilization */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(operationsData.resourceUtilization).map(([resource, data]) => (
                  <div key={resource} className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-semibold text-gray-900 capitalize mb-4 flex items-center">
                      <Bed className="w-4 h-4 mr-2" />
                      {resource}
                    </h4>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total:</span>
                          <span className="font-medium">{data.total}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Occupied:</span>
                          <span className="font-medium text-red-600">{data.occupied}</span>
                        </div>
                        {Object.entries(data).filter(([key]) => !['total', 'occupied', 'utilization'].includes(key)).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Utilization</span>
                          <span>{data.utilization}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full ${
                              data.utilization > 80 ? 'bg-red-600' : 
                              data.utilization > 60 ? 'bg-yellow-600' : 'bg-green-600'
                            }`}
                            style={{ width: `${data.utilization}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Equipment Status */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Wrench className="w-5 h-5 mr-2" />
                  Equipment Management - Detailed Status
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Equipment</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Utilization</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Efficiency</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Downtime</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Last Maintenance</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Next Due</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Technician</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {operationsData.equipmentStatus.map((equipment, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{equipment.name}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              equipment.status === 'operational' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {equipment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${equipment.utilization}%` }}></div>
                              </div>
                              <span className="text-sm">{equipment.utilization}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{equipment.efficiency}%</td>
                          <td className="py-3 px-4 text-gray-600">{equipment.downtime}</td>
                          <td className="py-3 px-4 text-gray-600">{equipment.lastMaintenance}</td>
                          <td className="py-3 px-4 text-gray-600">{equipment.nextMaintenance}</td>
                          <td className="py-3 px-4 text-gray-600">{equipment.technician}</td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">
                              {equipment.status === 'maintenance' ? 'Track Repair' : 'Schedule'}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Enhanced Inventory Management */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Advanced Inventory Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {operationsData.inventory.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">{item.category}</h4>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-gray-600 text-sm">Stock Level:</span>
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                              item.stockLevel === 'High' ? 'bg-green-100 text-green-800' :
                              item.stockLevel === 'Normal' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {item.stockLevel}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600 text-sm">Alerts:</span>
                            <span className={`ml-2 font-medium ${item.alertCount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                              {item.alertCount}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Items:</span>
                            <span className="font-medium">{item.totalItems}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Low Stock:</span>
                            <span className="font-medium text-orange-600">{item.lowStockItems}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Expiring Soon:</span>
                            <span className="font-medium text-red-600">{item.expiringSoon}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Monthly Consumption:</span>
                            <span className="font-medium">{item.monthlyConsumption}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Reorder Point:</span>
                            <span className="font-medium">{item.reorderPoint}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          {item.alertCount > 0 && (
                            <Button variant="outline" size="sm" className="flex-1">
                              View Alerts
                            </Button>
                          )}
                          <Button variant="outline" size="sm" className="flex-1">
                            Manage Stock
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facility Management */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Facility Management</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(operationsData.facilityManagement).map(([system, data]) => (
                    <div key={system} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 capitalize mb-3">
                        {system.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className="space-y-2 text-sm">
                        {Object.entries(data).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className={`font-medium ${
                              key === 'status' && value === 'Operational' ? 'text-green-600' :
                              key === 'incidents' && value === 0 ? 'text-green-600' : ''
                            }`}>
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Daily Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Patients</p>
                      <p className="text-2xl font-bold text-blue-600">{dailyStats.totalPatients}</p>
                    </div>
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Admissions</p>
                      <p className="text-2xl font-bold text-green-600">{dailyStats.newAdmissions}</p>
                    </div>
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Discharges</p>
                      <p className="text-2xl font-bold text-yellow-600">{dailyStats.discharges}</p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Emergency</p>
                      <p className="text-2xl font-bold text-red-600">{dailyStats.emergencyVisits}</p>
                    </div>
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Surgeries</p>
                      <p className="text-2xl font-bold text-purple-600">{dailyStats.surgeries}</p>
                    </div>
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Revenue</p>
                      <p className="text-2xl font-bold text-green-600">${dailyStats.revenue.toLocaleString()}</p>
                    </div>
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Department Performance */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Department Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Patients</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Satisfaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentPerformance.map((dept, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{dept.name}</td>
                          <td className="py-3 px-4 text-gray-600">{dept.patients}</td>
                          <td className="py-3 px-4 text-gray-600">${dept.revenue.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              dept.satisfaction >= 95 ? 'bg-green-100 text-green-800' :
                              dept.satisfaction >= 90 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {dept.satisfaction}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPortal;
