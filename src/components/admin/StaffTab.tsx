import { Users, UserCheck, Shield, Activity, Settings } from "lucide-react";
import { StaffDetails } from "@/types/adminTypes";

interface StaffTabProps {
  staffDetails: StaffDetails;
}

const StaffTab = ({ staffDetails }: StaffTabProps) => {
  return (
    <div className="space-y-6">
      {/* Enhanced Staff Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Total Staff</p>
              <p className="text-2xl font-bold text-white">340</p>
              <p className="text-xs text-gray-400 mt-1">+12 this month</p>
            </div>
            <Users className="w-6 h-6 text-blue-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Doctors On Duty</p>
              <p className="text-2xl font-bold text-white">
                {staffDetails.doctors.onDuty}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Avg: {staffDetails.doctors.avgWorkHours}h/week
              </p>
            </div>
            <UserCheck className="w-6 h-6 text-green-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Nurses On Duty</p>
              <p className="text-2xl font-bold text-white">
                {staffDetails.nurses.onDuty}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Ratio: 1:{staffDetails.nurses.patientRatio}
              </p>
            </div>
            <Shield className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Support Staff</p>
              <p className="text-2xl font-bold text-white">102</p>
              <p className="text-xs text-gray-400 mt-1">All departments</p>
            </div>
            <Users className="w-6 h-6 text-red-400" />
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Overall Efficiency</p>
              <p className="text-2xl font-bold text-white">89%</p>
              <p className="text-xs text-gray-400 mt-1">+3% from last month</p>
            </div>
            <Activity className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Enhanced Doctor Management */}
      <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
        <h3 className="text-xl font-semibold text-white mb-6">
          Doctor Management - Detailed Analytics
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Total Doctors:</span>
              <span className="font-semibold text-white">
                {staffDetails.doctors.total}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Currently On Duty:</span>
              <span className="text-green-400 font-semibold">
                {staffDetails.doctors.onDuty}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Average Patient Load:</span>
              <span className="font-semibold text-white">
                {staffDetails.doctors.patientLoad} patients/doctor
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Overall Efficiency:</span>
              <span className="font-semibold text-white">
                {staffDetails.doctors.efficiency}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Avg Work Hours/Week:</span>
              <span className="font-semibold text-white">
                {staffDetails.doctors.avgWorkHours} hours
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-500/30">
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Department
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Count
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Avg Experience
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Workload
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Efficiency
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Satisfaction
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Specializations
                </th>
              </tr>
            </thead>
            <tbody>
              {staffDetails.doctors.departments.map((dept, index) => (
                <tr
                  key={index}
                  className="border-b border-blue-500/20 hover:bg-blue-500/10"
                >
                  <td className="py-3 px-4 font-medium text-white">
                    {dept.name}
                  </td>
                  <td className="py-3 px-4 text-gray-300">{dept.count}</td>
                  <td className="py-3 px-4 text-gray-300">
                    {dept.avgExperience} years
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dept.workload === "Very High"
                          ? "bg-red-500/20 text-red-300"
                          : dept.workload === "High"
                          ? "bg-orange-500/20 text-orange-300"
                          : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {dept.workload}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700/50 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full"
                          style={{ width: `${dept.efficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-white">
                        {dept.efficiency}%
                      </span>
                    </div>
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
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {dept.specializations.slice(0, 2).map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                        >
                          {spec}
                        </span>
                      ))}
                      {dept.specializations.length > 2 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
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
      <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
        <h3 className="text-xl font-semibold text-white mb-6">
          Support Staff - Comprehensive Overview
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(staffDetails.support).map(([role, data]) => (
            <div
              key={role}
              className="border border-blue-500/30 glassmorphism rounded-lg p-6"
            >
              <h4 className="font-semibold text-white capitalize mb-4 flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                {role.replace(/([A-Z])/g, " $1").trim()}
              </h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-300 text-sm">Total:</span>
                    <p className="font-semibold text-white">{data.total}</p>
                  </div>
                  <div>
                    <span className="text-gray-300 text-sm">On Duty:</span>
                    <p className="text-green-400 font-semibold">
                      {data.onDuty}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {Object.entries(data)
                    .filter(
                      ([key]) =>
                        !["total", "onDuty", "efficiency"].includes(key)
                    )
                    .map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="font-medium text-white">{value}</span>
                      </div>
                    ))}
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">Efficiency</span>
                    <span className="text-white">{data.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        data.efficiency >= 90
                          ? "bg-green-400"
                          : data.efficiency >= 80
                          ? "bg-blue-400"
                          : "bg-yellow-400"
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
  );
};

export default StaffTab;
