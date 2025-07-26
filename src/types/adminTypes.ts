export interface Tab {
  id: string;
  label: string;
  icon: any;
}

export interface KPIMetrics {
  bedOccupancy: number;
  patientSatisfaction: number;
  averageStay: number;
  readmissionRate: number;
  revenuePerPatient: number;
  mortalityRate: number;
  infectionRate: number;
  medicationErrors: number;
}

export interface DailyStats {
  totalPatients: number;
  newAdmissions: number;
  discharges: number;
  emergencyVisits: number;
  surgeries: number;
  revenue: number;
}

export interface DepartmentPerformance {
  name: string;
  patients: number;
  revenue: number;
  satisfaction: number;
}

export interface StaffDepartment {
  name: string;
  count: number;
  efficiency: number;
  avgExperience: number;
  specializations: string[];
  workload: string;
  satisfaction: number;
}

export interface NurseShift {
  shift: string;
  count: number;
  efficiency: number;
  avgExperience: number;
  certifications: number;
  overtime: number;
  satisfaction: number;
}

export interface SupportStaff {
  total: number;
  onDuty: number;
  efficiency: number;
  [key: string]: any;
}

export interface StaffDetails {
  doctors: {
    total: number;
    onDuty: number;
    offDuty: number;
    avgWorkHours: number;
    efficiency: number;
    patientLoad: number;
    departments: StaffDepartment[];
  };
  nurses: {
    total: number;
    onDuty: number;
    offDuty: number;
    avgWorkHours: number;
    efficiency: number;
    patientRatio: number;
    shifts: NurseShift[];
  };
  support: {
    [key: string]: SupportStaff;
  };
}

export interface Equipment {
  name: string;
  status: string;
  utilization: number;
  lastMaintenance: string;
  nextMaintenance: string;
  efficiency: number;
  downtime: string;
  technician: string;
}

export interface ResourceData {
  total: number;
  occupied: number;
  utilization: number;
  [key: string]: any;
}

export interface InventoryItem {
  category: string;
  stockLevel: string;
  alertCount: number;
  totalItems: number;
  lowStockItems: number;
  expiringSoon: number;
  monthlyConsumption: string;
  reorderPoint: number;
}

export interface FacilitySystem {
  [key: string]: any;
}

export interface OperationsData {
  equipmentStatus: Equipment[];
  resourceUtilization: {
    [key: string]: ResourceData;
  };
  inventory: InventoryItem[];
  facilityManagement: {
    [key: string]: FacilitySystem;
  };
}
