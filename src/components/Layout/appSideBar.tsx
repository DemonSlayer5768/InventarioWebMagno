"use client";

import {
  Home,
  Package,
  Warehouse,
  ClipboardList,
  RefreshCw,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { useLocation } from "react-router-dom";

const menuItems = [
  { title: "Inicio", icon: Home, href: "/dashboard" },
  { title: "Productos", icon: Package, href: "/productos" },
  { title: "Inventario", icon: Warehouse, href: "/inventario" },
  { title: "Pedidos", icon: ClipboardList, href: "/pedidos" },
  { title: "Rellenar", icon: RefreshCw, href: "/rellenar" },
];

export function AppSidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  function handleLogout() {
    localStorage.removeItem("auth");
    window.location.href = "/";
  }

  return (
    <Sidebar className="bg-[#111827] text-[#F1F5F9] rounded-xl shadow-xl border border-[#334155] min-h-screen flex flex-col">
      <SidebarHeader className="border-b border-[#334155] px-8 py-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight">
            MagnoBolw Inventario
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-8 px-4">
        <SidebarGroup>
          {/* <SidebarGroupLabel className="text-lg font-bold text-[#94A3B8] mb-4">
            Menú Principal
          </SidebarGroupLabel> */}

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    size="lg"
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    className="mb-1 rounded-lg px-3 py-2 text-[15px] font-medium text-[#F1F5F9] hover:bg-[#1E293B] hover:text-white transition-colors"
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-[#94A3B8]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-[#334155] p-8 mt-auto flex flex-col items-center gap-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full rounded-xl bg-[#3B82F6] text-white py-3 px-6 font-semibold text-lg shadow-md hover:bg-[#2563EB] transition-all duration-200 mb-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Cerrar sesión</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
