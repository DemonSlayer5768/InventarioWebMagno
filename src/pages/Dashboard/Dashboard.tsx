import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/appSideBar";
import Dashboard from "@/components/layout/DashboardForm";

export default function DashboardPage() {
  return (
    <div className="w-full">
      <SidebarProvider>
        <AppSidebar />
        <Dashboard />
      </SidebarProvider>
    </div>
  );
}
