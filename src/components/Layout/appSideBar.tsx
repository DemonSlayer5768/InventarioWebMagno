"use client";

import {
  Home,
  Package,
  Warehouse,
  ClipboardList,
  // MapPin,
  RefreshCw,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Inicio", icon: Home, href: "/dashboard" },
  { title: "Productos", icon: Package, href: "/productos" },
  { title: "Inventario", icon: Warehouse, href: "/inventario" },
  { title: "Pedidos", icon: ClipboardList, href: "/pedidos" },
  // { title: "Ubicaciones", icon: MapPin, href: "/ubicaciones" },
  { title: "Rellenar", icon: RefreshCw, href: "/rellenar" },
];

export function AppSidebar() {
  function handleLogout() {
    localStorage.removeItem("auth");
    window.location.href = "/";
  }

  return (
    <Sidebar className="bg-linear-to-br from-white via-[#e3e8f7] to-[#f5f7fa] text-[#23234a] rounded-xl shadow-xl border border-[#e0e0e0] min-h-screen flex flex-col">
      <SidebarHeader className="border-b border-[#e0e0e0] px-8 py-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight">
            MagnoBolw Inventario
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="py-8 px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-[#3a3a5c] mb-4">
            Menú Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="transition-all duration-200 rounded-2xl px-6 py-4 text-xl font-semibold flex items-center gap-5 bg-white shadow-sm mb-4 hover:bg-[#e3e8f7] hover:text-[#3a3a5c] focus:bg-[#e3e8f7] focus:text-[#3a3a5c] border border-[#e0e0e0]"
                  >
                    <a href={item.href} className="flex items-center gap-5">
                      <item.icon className="h-8 w-8 text-[#3a3a5c]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-[#e0e0e0] p-8 mt-auto flex flex-col items-center gap-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full rounded-xl bg-[#3a3a5c] text-white py-3 px-6 font-semibold text-lg shadow-md hover:bg-[#23234a] transition-all duration-200 mb-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Cerrar sesión</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
