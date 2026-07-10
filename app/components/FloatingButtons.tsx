"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 md:right-6 bottom-6 md:bottom-8 z-[999] flex flex-col gap-4 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-90 pointer-events-none"
      }`}
    >
      {/* TEL */}
      <a
        href="tel:+84909888243"
        aria-label="Call"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B6B4A] text-white shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-0"
      >
        <Phone size={26} strokeWidth={2.3} />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0909888243"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zalo"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0180F7] text-white shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-0"
      >
        <span className="text-sm font-bold tracking-tight">
          Zalo
        </span>
      </a>
    </div>
  );
}