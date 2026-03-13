"use client";

import {
  Package,
  AlertTriangle,
  TrendingDown,
  RefreshCw,
  Plus,
} from "lucide-react";
import { StatsCard } from "@/components/layout/dashboard/statsCard";
import { InventoryTable } from "@/components/layout/dashboard/inventoryTable";
import { LowStockAlert } from "@/components/layout/dashboard/lowSotckAlert";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-muted/40 p-6 w-full">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Resumen general del estado de tu inventario.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 size-4" />
              Actualizar
            </Button>
            <Button size="sm">
              <Plus className="mr-2 size-4" />
              Nuevo Producto
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard
            title="Total Productos"
            value="1,284"
            description="En el inventario"
            icon={Package}
            trend={{ value: 12, isPositive: true }}
            variant="default"
          />
          <StatsCard
            title="Sin Stock"
            value="8"
            description="Productos agotados"
            icon={AlertTriangle}
            trend={{ value: 2, isPositive: false }}
            variant="danger"
          />
          <StatsCard
            title="Stock Bajo"
            value="23"
            description="Requieren reposición"
            icon={TrendingDown}
            trend={{ value: 5, isPositive: false }}
            variant="warning"
          />
        </div>

        {/* Inventory Table */}
        <InventoryTable />

        {/* Low Stock Alert */}
        <LowStockAlert />

        {/* Footer */}
        <div className="flex items-center justify-between rounded-lg border bg-card p-4">
          <div className="text-sm text-muted-foreground">
            Última actualización:{" "}
            <span className="font-medium text-foreground">Hace 5 minutos</span>
          </div>
          <Button>
            <RefreshCw className="mr-2 size-4" />
            Verificar Inventario
          </Button>
        </div>
      </div>
    </main>
  );
}
