import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/appSideBar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />

        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </div>
    </SidebarProvider>
  );
}
