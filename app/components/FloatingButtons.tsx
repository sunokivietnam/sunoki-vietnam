"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-5 bottom-8 z-50 flex flex-col gap-4 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      {/* TEL */}
      <a
        href="tel:+84909888243"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B6B4A] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Call"
      >
        <Phone size={26} />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0909888243"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0180F7] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Zalo"
      >
        <span className="text-sm font-bold">Zalo</span>
      </a>
    </div>
  );
}