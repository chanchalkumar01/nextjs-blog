"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoaderComponent() {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);

        const timer = requestAnimationFrame(() => {
            setLoading(false);
        });

        return () => cancelAnimationFrame(timer);
    }, [pathname]); // ✅ remove searchParams

    if (!loading) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(3px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: 48,
                    height: 48,
                    border: "4px solid rgba(255,255,255,0.6)",
                    borderTopColor: "transparent",
                    borderRadius: "999px",
                    animation: "spin 0.8s linear infinite",
                }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}
