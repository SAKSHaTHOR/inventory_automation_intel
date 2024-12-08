"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-01", shipped: 222, restocked: 150 },
  { date: "2024-04-02", shipped: 97, restocked: 180 },
  { date: "2024-04-03", shipped: 167, restocked: 120 },
  { date: "2024-04-04", shipped: 242, restocked: 260 },
  { date: "2024-04-05", shipped: 373, restocked: 290 },
  { date: "2024-04-06", shipped: 301, restocked: 340 },
  { date: "2024-04-07", shipped: 399, restocked: 400 },
  { date: "2024-04-08", shipped: 400, restocked: 350 },
  { date: "2024-04-09", shipped: 500, restocked: 420 },
  { date: "2024-04-10", shipped: 450, restocked: 380 },
  { date: "2024-04-11", shipped: 520, restocked: 400 },
  { date: "2024-04-12", shipped: 480, restocked: 350 },
  { date: "2024-04-13", shipped: 530, restocked: 370 },
  { date: "2024-04-14", shipped: 600, restocked: 420 },
  { date: "2024-04-15", shipped: 550, restocked: 480 },
  { date: "2024-04-16", shipped: 620, restocked: 500 },
  { date: "2024-04-17", shipped: 580, restocked: 450 },
  { date: "2024-04-18", shipped: 630, restocked: 470 },
  { date: "2024-04-19", shipped: 680, restocked: 520 },
  { date: "2024-04-20", shipped: 640, restocked: 480 },
  { date: "2024-04-21", shipped: 547, restocked: 466 },
  { date: "2024-04-22", shipped: 567, restocked: 466 },
  { date: "2024-04-23", shipped: 497, restocked: 655},
  { date: "2024-04-24", shipped: 567, restocked: 455},
  { date: "2024-04-25", shipped: 257, restocked: 655},
  { date: "2024-04-26", shipped: 567, restocked: 457},
  { date: "2024-04-27", shipped: 397, restocked: 545},
  { date: "2024-04-28", shipped: 567, restocked: 465},
  { date: "2024-04-29", shipped: 423, restocked: 235},
  { date: "2024-04-30", shipped: 367, restocked: 745},
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

function WarehouseBarChart() {
  const [activeChart, setActiveChart] = React.useState("shipped");

  const total = React.useMemo(
    () => ({
      shipped: chartData.reduce((acc, curr) => acc + curr.shipped, 0),
      restocked: chartData.reduce((acc, curr) => acc + curr.restocked, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Warehouse Activity Trends</CardTitle>
          <CardDescription>
            Showing total shipped and restocked items for the past month.
          </CardDescription>
        </div>
        <div className="flex">
          {["shipped", "restocked"].map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="activity"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey={activeChart}
              radius={[4, 4, 0, 0]}
              barSize={12}
              fill={chartConfig[activeChart].color}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default WarehouseBarChart;
