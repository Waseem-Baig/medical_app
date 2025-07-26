import {
  Bed,
  TrendingUp,
  Calendar,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import { KPIMetrics } from "@/types/adminTypes";

interface AnalyticsTabProps {
  kpiMetrics: KPIMetrics;
}

const AnalyticsTab = ({ kpiMetrics }: AnalyticsTabProps) => {
  return (
    <div className="space-y-6">
      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Bed Occupancy</h4>
            <Bed className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {kpiMetrics.bedOccupancy}%
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <div
              className="bg-blue-400 h-2 rounded-full"
              style={{ width: `${kpiMetrics.bedOccupancy}%` }}
            ></div>
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Patient Satisfaction</h4>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-green-400 mb-2">
            {kpiMetrics.patientSatisfaction}%
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <div
              className="bg-green-400 h-2 rounded-full"
              style={{ width: `${kpiMetrics.patientSatisfaction}%` }}
            ></div>
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Avg Length of Stay</h4>
            <Calendar className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-2">
            {kpiMetrics.averageStay}
          </div>
          <p className="text-gray-300 text-sm">days</p>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Readmission Rate</h4>
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div className="text-3xl font-bold text-red-400 mb-2">
            {kpiMetrics.readmissionRate}%
          </div>
          <p className="text-gray-300 text-sm">within 30 days</p>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Revenue/Patient</h4>
            <DollarSign className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-green-400 mb-2">
            ${kpiMetrics.revenuePerPatient}
          </div>
          <p className="text-gray-300 text-sm">average</p>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Mortality Rate</h4>
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div className="text-3xl font-bold text-red-400 mb-2">
            {kpiMetrics.mortalityRate}%
          </div>
          <p className="text-gray-300 text-sm">hospital-wide</p>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Infection Rate</h4>
            <AlertTriangle className="w-5 h-5 text-orange-400" />
          </div>
          <div className="text-3xl font-bold text-orange-400 mb-2">
            {kpiMetrics.infectionRate}%
          </div>
          <p className="text-gray-300 text-sm">HAI rate</p>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Medication Errors</h4>
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-2">
            {kpiMetrics.medicationErrors}%
          </div>
          <p className="text-gray-300 text-sm">error rate</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;
