"use client";

import React, { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const inventoryData = [
  { warehouse: "North Warehouse", stock: 500, fill: "var(--color-north)" },
  { warehouse: "East Warehouse", stock: 320, fill: "var(--color-east)" },
  { warehouse: "West Warehouse", stock: 250, fill: "var(--color-west)" },
  { warehouse: "South Warehouse", stock: 430, fill: "var(--color-south)" },
  { warehouse: "Central Warehouse", stock: 300, fill: "var(--color-central)" },
];

const chartConfig = {
  stock: {
    label: "Stock",
  },
  north: {
    label: "North Warehouse",
    color: "hsl(var(--chart-1))",
  },
  east: {
    label: "East Warehouse",
    color: "hsl(var(--chart-2))",
  },
  west: {
    label: "West Warehouse",
    color: "hsl(var(--chart-3))",
  },
  south: {
    label: "South Warehouse",
    color: "hsl(var(--chart-4))",
  },
  central: {
    label: "Central Warehouse",
    color: "hsl(var(--chart-5))",
  },
};

function WarehouseDonutChart() {
  const totalStock = useMemo(() => {
    return inventoryData.reduce((acc, curr) => acc + curr.stock, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Inventory Distribution</CardTitle>
        <CardDescription>Across Warehouses</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={inventoryData}
              dataKey="stock"
              nameKey="warehouse"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalStock.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Stock
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 7.8% this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing inventory distribution across all warehouses.
        </div>
      </CardFooter>
    </Card>
  );
}

export default WarehouseDonutChart;
