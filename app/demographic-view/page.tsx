<<<<<<< HEAD
"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../../src/components/ui/navbar";
import { CardMetric } from "../../src/components/ui/card-metric";
import { Footer } from "../../src/components/ui/footer";
import { BarChart } from "../../src/components/ui/bar-chart";
import { Table, TableColumn } from "../../src/components/ui/table";
import { Users, UserCheck, TrendingUp, Target } from "lucide-react";

interface ApiDataItem {
  name: string;
  status: string;
  value: number;
}

export default function DemographicView() {
  const [data, setData] = useState<ApiDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // ✅ استخدمي رابطك الأصلي بدون cors-anywhere
        const apiUrl =
          "https://www.amanabootcamp.org/api/fs-classwork-data/amana-transportation";

        const response = await fetch(apiUrl, {
          headers: {
            Accept: "application/json",
          },
        });

        // ✅ في حال السيرفر رفض (403 أو غيره)
        if (!response.ok) {
          console.warn(`⚠️ Server refused request: ${response.status}`);
          // نجرب نحط بيانات تجريبية بدل ما ينهار الموقع
          setData([
            { name: "Test User 1", status: "active", value: 20 },
            { name: "Test User 2", status: "inactive", value: 10 },
            { name: "Test User 3", status: "active", value: 15 },
          ]);
          setError("Server refused access (403). Using demo data instead.");
          return;
        }

        const result = await response.json();

        const cleanData = Array.isArray(result)
          ? result.map((item: any) => ({
            name: item.name ?? "Unknown",
            status: item.status ?? "inactive",
            value: Number(item.value) || 0,
          }))
          : [];

        setData(cleanData);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError("⚠️ Failed to fetch data. Please check your connection.");
        // لو فشل الطلب، نعرض بيانات مؤقتة بدل شاشة فاضية
        setData([
          { name: "Demo User A", status: "active", value: 30 },
          { name: "Demo User B", status: "inactive", value: 12 },
          { name: "Demo User C", status: "active", value: 45 },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-2xl">
        Loading data...
      </div>
    );
  }

  const columns: TableColumn[] = [
    { key: "name", header: "Name", sortable: true, sortType: "string" },
    { key: "status", header: "Status", sortable: true, sortType: "string" },
    { key: "value", header: "Value", sortable: true, sortType: "number" },
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
          <div className="px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Demographic View</h1>
            <p className="text-gray-400 mt-2">
              Data visualization and analytics dashboard
            </p>
            {error && (
              <p className="text-red-400 mt-2 text-sm">
                {error}
              </p>
            )}
          </div>
        </section>

        <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardMetric
              title="Total Users"
              value={data.length}
              icon={<Users className="h-6 w-6 text-blue-400" />}
            />
            <CardMetric
              title="Active Users"
              value={data.filter((item) => item.status === "active").length}
              icon={<UserCheck className="h-6 w-6 text-green-400" />}
            />
            <CardMetric
              title="Growth"
              value="12%"
              icon={<TrendingUp className="h-6 w-6 text-yellow-400" />}
            />
            <CardMetric
              title="Goal Completion"
              value="87%"
              icon={<Target className="h-6 w-6 text-purple-400" />}
            />
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">
              Performance Chart
            </h2>
            <BarChart
              title="Performance Chart"
              data={data.map((item, index) => ({
                label: item.name || `Item ${index + 1}`,
                value: item.value || 0,
              }))}
            />
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Data Table</h2>
            <Table
              title="Users Data"
              data={data}
              columns={columns}
              showIndex={true}
            />
          </div>
        </div>

=======
import { Navbar } from '../../src/components/ui/navbar';
import { CardMetric } from '../../src/components/ui/card-metric';
import { Footer } from '../../src/components/ui/footer';
import { Users, UserCheck, TrendingUp, Target } from 'lucide-react';

export default function DemographicView() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Navbar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
          <div className="px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Demographic View
              </h1>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {/* Page content will go here */}
        </div>
        
>>>>>>> 93b0803a5b78693c8e5a5cf1de49d5b42857f6e6
        <Footer />
      </div>
    </div>
  );
}
