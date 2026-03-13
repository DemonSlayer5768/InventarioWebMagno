"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, ExternalLink } from "lucide-react";

interface LowStockItem {
  id: string;
  name: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
}

const lowStockItems: LowStockItem[] = [
  {
    id: "1",
    name: "Webcam HD 1080p",
    currentStock: 12,
    minStock: 40,
    maxStock: 100,
  },
  {
    id: "2",
    name: "Hub USB-C 7 puertos",
    currentStock: 8,
    minStock: 25,
    maxStock: 80,
  },
  {
    id: "3",
    name: "Adaptador HDMI-VGA",
    currentStock: 5,
    minStock: 30,
    maxStock: 100,
  },
  {
    id: "4",
    name: "Soporte Monitor Dual",
    currentStock: 3,
    minStock: 15,
    maxStock: 50,
  },
];

export function LowStockAlert() {
  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertTriangle className="size-4 text-amber-500" />
            Productos con Stock Bajo
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-xs">
            Ver todos
            <ExternalLink className="ml-1 size-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {lowStockItems.map((item) => {
            const percentage = (item.currentStock / item.maxStock) * 100;
            const isVeryLow = item.currentStock <= item.minStock * 0.5;

            return (
              <div key={item.id} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span
                    className={
                      isVeryLow
                        ? "text-red-600 font-semibold"
                        : "text-amber-600"
                    }
                  >
                    {item.currentStock} / {item.maxStock}
                  </span>
                </div>
                <Progress
                  value={percentage}
                  className={
                    isVeryLow ? "[&>div]:bg-red-500" : "[&>div]:bg-amber-500"
                  }
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
