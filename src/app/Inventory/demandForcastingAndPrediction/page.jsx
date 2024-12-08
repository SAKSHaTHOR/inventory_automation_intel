"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { forecastData } from "@/data/forcast";

const ForecastingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Demand Forecasting</h1>
      <Tabs defaultValue="february" className="w-full">
        {/* Tabs Navigation */}
        <TabsList>
          <TabsTrigger value="february">February</TabsTrigger>
          <TabsTrigger value="march">March</TabsTrigger>
          <TabsTrigger value="spring">Spring</TabsTrigger>
        </TabsList>

        {/* February Forecast */}
        <TabsContent value="february">
          <h2 className="text-2xl font-semibold mt-4 mb-6">February Forecast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {forecastData.february.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-md mx-auto object-cover"
                />
                <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
                <p className="text-muted-foreground">
                  Forecasted Demand: <strong>{item.forecastedDemand}</strong>
                </p>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* March Forecast */}
        <TabsContent value="march">
          <h2 className="text-2xl font-semibold mt-4 mb-6">March Forecast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {forecastData.march.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-md mx-auto"
                />
                <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
                <p className="text-muted-foreground">
                  Forecasted Demand: <strong>{item.forecastedDemand}</strong>
                </p>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Spring Season Forecast */}
        <TabsContent value="spring">
          <h2 className="text-2xl font-semibold mt-4 mb-6">Spring Season Forecast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {forecastData.spring.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-md mx-auto"
                />
                <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
                <p className="text-muted-foreground">
                  Forecasted Demand: <strong>{item.forecastedDemand}</strong>
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ForecastingPage;
