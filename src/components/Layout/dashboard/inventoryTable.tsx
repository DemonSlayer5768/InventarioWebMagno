"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Package, ExternalLink } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  status: "disponible" | "bajo" | "agotado";
}

const inventoryData: InventoryItem[] = [
  {
    id: "PRD-001",
    name: 'Monitor LED 24"',
    category: "Electrónica",
    stock: 45,
    minStock: 20,
    status: "disponible",
  },
  {
    id: "PRD-002",
    name: "Teclado Mecánico RGB",
    category: "Periféricos",
    stock: 12,
    minStock: 15,
    status: "bajo",
  },
  {
    id: "PRD-003",
    name: "Mouse Inalámbrico",
    category: "Periféricos",
    stock: 78,
    minStock: 30,
    status: "disponible",
  },
  {
    id: "PRD-004",
    name: "Webcam HD 1080p",
    category: "Accesorios",
    stock: 0,
    minStock: 10,
    status: "agotado",
  },
  {
    id: "PRD-005",
    name: "Hub USB-C 7 puertos",
    category: "Accesorios",
    stock: 8,
    minStock: 15,
    status: "bajo",
  },
];

const statusStyles = {
  disponible: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  bajo: "bg-amber-500/10 text-amber-600 border-amber-200",
  agotado: "bg-red-500/10 text-red-600 border-red-200",
};

const statusLabels = {
  disponible: "Disponible",
  bajo: "Stock Bajo",
  agotado: "Agotado",
};

export function InventoryTable() {
  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <Package className="size-4 text-primary" />
            Resumen de Inventario
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-xs">
            Ver todo
            <ExternalLink className="ml-1 size-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">ID</TableHead>
              <TableHead>Producto</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead className="text-center">Stock</TableHead>
              <TableHead className="text-center">Mínimo</TableHead>
              <TableHead className="text-right">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {item.id}
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.category}
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {item.stock}
                </TableCell>
                <TableCell className="text-center text-muted-foreground">
                  {item.minStock}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="outline"
                    className={statusStyles[item.status]}
                  >
                    {statusLabels[item.status]}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
