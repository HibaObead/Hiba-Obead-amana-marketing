"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface BubbleData {
    city: string;
    lat: number;
    lng: number;
    value: number;
}

interface BubbleMapProps {
    title?: string;
    data: BubbleData[];
    className?: string;
    height?: number;
}

export function BubbleMap({
    title,
    data,
    className = "",
    height = 400,
}: BubbleMapProps) {
    const mapRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        import("leaflet").then((L) => {
            // إذا الخريطة موجودة مسبقاً، لا نعيد إنشاءها
            if (mapRef.current) {
                mapRef.current.eachLayer((layer: any) => {
                    if (layer instanceof L.Circle) {
                        mapRef.current.removeLayer(layer);
                    }
                });

                // تحديث الدوائر فقط (بدون إعادة إنشاء الخريطة)
                data.forEach((region) => {
                    const radius = Math.sqrt(region.value) * 2000;
                    L.circle([region.lat, region.lng], {
                        color: "#3b82f6",
                        fillColor: "#3b82f6",
                        fillOpacity: 0.5,
                        radius,
                    })
                        .addTo(mapRef.current)
                        .bindPopup(`<b>${region.city}</b><br/>Value: ${region.value}`);
                });

                return;
            }

            // إنشاء الخريطة لأول مرة فقط
            const map = L.map("bubble-map").setView([31.5, 35], 7);
            mapRef.current = map;

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(map);

            data.forEach((region) => {
                const radius = Math.sqrt(region.value) * 2000;
                L.circle([region.lat, region.lng], {
                    color: "#3b82f6",
                    fillColor: "#3b82f6",
                    fillOpacity: 0.5,
                    radius,
                })
                    .addTo(map)
                    .bindPopup(`<b>${region.city}</b><br/>Value: ${region.value}`);
            });
        });
    }, [data]);

    return (
        <div className={`bg-gray-800 p-4 rounded-lg border border-gray-700 ${className}`}>
            {title && <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>}
            <div id="bubble-map" className="rounded-lg" style={{ height: `${height}px` }} />
        </div>
    );
}
