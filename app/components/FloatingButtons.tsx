"use client";

import { useEffect, useState } from "react";
import { Phone, ChevronUp } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 10秒ごとに軽くアニメーション
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-4 md:right-6 bottom-6 md:bottom-8 z-[999] flex flex-col gap-4 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-90 pointer-events-none"
      } ${animate ? "animate-bounce" : ""}`}
    >
      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
      >
        <ChevronUp size={22} />
      </button>

      {/* TEL */}
      <a
        href="tel:+84909888243"
        aria-label="Call"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B6B4A] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
      >
        <Phone size={26} strokeWidth={2.3} />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0909888243"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zalo"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0180F7] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
      >
        <span className="text-sm font-bold tracking-tight">
          Zalo
        </span>
      </a>
    </div>
  );
}