
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Features from "./pages/Features";
import About from "./pages/About";
import PatientPortal from "./pages/PatientPortal";
import DoctorPortal from "./pages/DoctorPortal";
import StaffPortal from "./pages/StaffPortal";
import AdminPortal from "./pages/AdminPortal";
import NursePortal from "./pages/staff/NursePortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/patient-portal" element={<PatientPortal />} />
          <Route path="/doctor-portal" element={<DoctorPortal />} />
          <Route path="/staff-portal" element={<StaffPortal />} />
          <Route path="/staff/nurse" element={<NursePortal />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
