"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", shipped: 500, restocked: 300 },
  { month: "February", shipped: 450, restocked: 280 },
  { month: "March", shipped: 520, restocked: 400 },
  { month: "April", shipped: 480, restocked: 350 },
  { month: "May", shipped: 530, restocked: 370 },
  { month: "June", shipped: 600, restocked: 420 },
];

const chartConfig = {
  shipped: {
    label: "Shipped Items",
    color: "hsl(var(--chart-1))",
  },
  restocked: {
    label: "Restocked Items",
    color: "hsl(var(--chart-2))",
  },
};

function InventoryBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Trends</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="shipped" fill="var(--color-shipped)" radius={4} />
            <Bar dataKey="restocked" fill="var(--color-restocked)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 10% in shipping efficiency <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing shipping and restocking trends for the last 6 months.
        </div>
      </CardFooter>
    </Card>
  );
}

export default InventoryBarChart;
