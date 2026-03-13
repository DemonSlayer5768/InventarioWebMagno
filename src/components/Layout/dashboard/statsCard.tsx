import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "success" | "warning" | "danger";
}

const variantStyles = {
  default: {
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  success: {
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  warning: {
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  danger: {
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
  },
};

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = "default",
}: StatsCardProps) {
  const styles = variantStyles[variant];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold tracking-tight">{value}</p>
              {trend && (
                <span
                  className={cn(
                    "text-xs font-medium",
                    trend.isPositive ? "text-emerald-600" : "text-red-600",
                  )}
                >
                  {trend.isPositive ? "+" : ""}
                  {trend.value}%
                </span>
              )}
            </div>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          <div className={cn("rounded-lg p-3", styles.iconBg)}>
            <Icon className={cn("size-5", styles.iconColor)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
