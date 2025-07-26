import { Bed, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OperationsData } from "@/types/adminTypes";

interface OperationsTabProps {
  operationsData: OperationsData;
}

const OperationsTab = ({ operationsData }: OperationsTabProps) => {
  return (
    <div className="space-y-6">
      {/* Enhanced Resource Utilization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(operationsData.resourceUtilization).map(
          ([resource, data]) => (
            <div
              key={resource}
              className="glassmorphism rounded-xl p-6 border border-blue-500/20"
            >
              <h4 className="font-semibold text-white capitalize mb-4 flex items-center">
                <Bed className="w-4 h-4 mr-2" />
                {resource}
              </h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total:</span>
                    <span className="font-medium text-white">{data.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Occupied:</span>
                    <span className="font-medium text-red-400">
                      {data.occupied}
                    </span>
                  </div>
                  {Object.entries(data)
                    .filter(
                      ([key]) =>
                        !["total", "occupied", "utilization"].includes(key)
                    )
                    .map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-300 capitalize">{key}:</span>
                        <span className="font-medium text-white">{value}</span>
                      </div>
                    ))}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Utilization</span>
                    <span className="text-white">{data.utilization}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        data.utilization > 80
                          ? "bg-red-400"
                          : data.utilization > 60
                          ? "bg-yellow-400"
                          : "bg-green-400"
                      }`}
                      style={{ width: `${data.utilization}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Enhanced Equipment Status */}
      <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Wrench className="w-5 h-5 mr-2" />
          Equipment Management - Detailed Status
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-500/30">
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Equipment
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Utilization
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Efficiency
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Downtime
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Last Maintenance
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Next Due
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Technician
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {operationsData.equipmentStatus.map((equipment, index) => (
                <tr
                  key={index}
                  className="border-b border-blue-500/20 hover:bg-blue-500/10"
                >
                  <td className="py-3 px-4 font-medium text-white">
                    {equipment.name}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        equipment.status === "operational"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {equipment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700/50 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full"
                          style={{
                            width: `${equipment.utilization}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-white">
                        {equipment.utilization}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {equipment.efficiency}%
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {equipment.downtime}
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {equipment.lastMaintenance}
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {equipment.nextMaintenance}
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {equipment.technician}
                  </td>
                  <td className="py-3 px-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700"
                    >
                      {equipment.status === "maintenance"
                        ? "Track Repair"
                        : "Schedule"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Enhanced Inventory Management */}
      <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
        <h3 className="text-xl font-semibold text-white mb-6">
          Advanced Inventory Management
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {operationsData.inventory.map((item, index) => (
            <div
              key={index}
              className="border border-blue-500/30 glassmorphism rounded-lg p-6"
            >
              <h4 className="font-semibold text-white mb-4">{item.category}</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-300 text-sm">Stock Level:</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                        item.stockLevel === "High"
                          ? "bg-green-500/20 text-green-300"
                          : item.stockLevel === "Normal"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {item.stockLevel}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-300 text-sm">Alerts:</span>
                    <span
                      className={`ml-2 font-medium ${
                        item.alertCount > 0 ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {item.alertCount}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Items:</span>
                    <span className="font-medium text-white">
                      {item.totalItems}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Low Stock:</span>
                    <span className="font-medium text-orange-400">
                      {item.lowStockItems}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Expiring Soon:</span>
                    <span className="font-medium text-red-400">
                      {item.expiringSoon}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly Consumption:</span>
                    <span className="font-medium text-white">
                      {item.monthlyConsumption}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Reorder Point:</span>
                    <span className="font-medium text-white">
                      {item.reorderPoint}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {item.alertCount > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white border-none hover:from-orange-700 hover:to-red-700"
                    >
                      View Alerts
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700"
                  >
                    Manage Stock
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Management */}
      <div className="glassmorphism rounded-xl p-6 border border-blue-500/20">
        <h3 className="text-xl font-semibold text-white mb-6">
          Facility Management
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(operationsData.facilityManagement).map(
            ([system, data]) => (
              <div
                key={system}
                className="border border-blue-500/30 glassmorphism rounded-lg p-4"
              >
                <h4 className="font-medium text-white capitalize mb-3">
                  {system.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <div className="space-y-2 text-sm">
                  {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span
                        className={`font-medium ${
                          key === "status" && value === "Operational"
                            ? "text-green-400"
                            : key === "incidents" && value === 0
                            ? "text-green-400"
                            : "text-white"
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OperationsTab;
