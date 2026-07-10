"use client";

import { Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      {/* TEL */}
      <a
        href="tel:+84901234567"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B6B4A] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Call"
      >
        <Phone size={26} />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/xxxxxxxx"
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