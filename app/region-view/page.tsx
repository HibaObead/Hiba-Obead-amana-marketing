<<<<<<< HEAD
"use client";

import { useEffect, useState } from "react";
import { Navbar } from '../../src/components/ui/navbar';
import { Footer } from '../../src/components/ui/footer';
import { BubbleMap } from "../../src/components/ui/bubble-map";

export default function RegionView() {
  const [regionData, setRegionData] = useState<{ city: string; lat: number; lng: number; value: number }[]>([]);

  // بيانات وهمية لمثال
  useEffect(() => {
    const data = [
      { city: "Gaza", lat: 31.5, lng: 34.45, value: 1200 },
      { city: "Ramallah", lat: 31.9, lng: 35.2, value: 1500 },
      { city: "Hebron", lat: 31.5, lng: 35.1, value: 900 },
    ];
    setRegionData(data);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      <Navbar />

      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
          <div className="px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Region View</h1>
=======
import { Navbar } from '../../src/components/ui/navbar';
import { Footer } from '../../src/components/ui/footer';

export default function RegionView() {
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
                Region View
              </h1>
            </div>
>>>>>>> 93b0803a5b78693c8e5a5cf1de49d5b42857f6e6
          </div>
        </section>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
<<<<<<< HEAD
          < BubbleMap data={regionData} />
        </div>

=======
          {/* Page content will go here */}
        </div>
        
>>>>>>> 93b0803a5b78693c8e5a5cf1de49d5b42857f6e6
        <Footer />
      </div>
    </div>
  );
}
