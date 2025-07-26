import {
  Users,
  Activity,
  TrendingUp,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import { DailyStats, DepartmentPerformance } from "@/types/adminTypes";

interface DashboardTabProps {
  dailyStats: DailyStats;
  departmentPerformance: DepartmentPerformance[];
}

const DashboardTab = ({
  dailyStats,
  departmentPerformance,
}: DashboardTabProps) => {
  return (
    <div className="space-y-6">
      {/* Daily Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Total Patients</p>
              <p className="text-2xl font-bold text-white">
                {dailyStats.totalPatients}
              </p>
            </div>
            <Users className="w-6 h-6 text-blue-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Admissions</p>
              <p className="text-2xl font-bold text-white">
                {dailyStats.newAdmissions}
              </p>
            </div>
            <Activity className="w-6 h-6 text-green-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Discharges</p>
              <p className="text-2xl font-bold text-white">
                {dailyStats.discharges}
              </p>
            </div>
            <TrendingUp className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Emergency</p>
              <p className="text-2xl font-bold text-white">
                {dailyStats.emergencyVisits}
              </p>
            </div>
            <AlertTriangle className="w-6 h-6 text-red-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Surgeries</p>
              <p className="text-2xl font-bold text-white">
                {dailyStats.surgeries}
              </p>
            </div>
            <Activity className="w-6 h-6 text-purple-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Revenue</p>
              <p className="text-2xl font-bold text-white">
                ${dailyStats.revenue.toLocaleString()}
              </p>
            </div>
            <DollarSign className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>

      {/* Department Performance */}
      <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
        <h3 className="text-xl font-semibold text-white mb-6">
          Department Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-500/30">
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Department
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Patients
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Revenue
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Satisfaction
                </th>
              </tr>
            </thead>
            <tbody>
              {departmentPerformance.map((dept, index) => (
                <tr
                  key={index}
                  className="border-b border-blue-500/20 hover:bg-blue-500/10"
                >
                  <td className="py-3 px-4 font-medium text-white">
                    {dept.name}
                  </td>
                  <td className="py-3 px-4 text-gray-300">{dept.patients}</td>
                  <td className="py-3 px-4 text-gray-300">
                    ${dept.revenue.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dept.satisfaction >= 95
                          ? "bg-green-500/20 text-green-300"
                          : dept.satisfaction >= 90
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
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
  );
};

export default DashboardTab;
