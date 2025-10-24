"use client";

import { useEffect, useState } from "react";
import { Navbar } from '../../src/components/ui/navbar';
import { Footer } from '../../src/components/ui/footer';
import { LineChartComponent } from '../../src/components/ui/line-chart';

export default function WeeklyView() {
  const [weeklyData, setWeeklyData] = useState<{ week: string; revenue: number; spend: number }[]>([]);

  useEffect(() => {
    const data = [
      { week: "Week 1", revenue: 1200, spend: 800 },
      { week: "Week 2", revenue: 1500, spend: 700 },
      { week: "Week 3", revenue: 1800, spend: 900 },
      { week: "Week 4", revenue: 2000, spend: 1100 },
    ];
    setWeeklyData(data);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      <Navbar />

      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-gray-800 to-gray-700 text-white py-12">
          <div className="px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Weekly View</h1>
          </div>
        </section>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-6">
          <LineChartComponent
            title="Weekly Revenue & Spend"
            data={weeklyData}
            dataKeys={["revenue", "spend"]}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
