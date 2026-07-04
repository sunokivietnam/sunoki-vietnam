"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[680px] overflow-hidden bg-[#120E0B]"
    >
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="KOKORO Living"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* SUNOKI Logo */}
     <div className="absolute right-[12%] top-1/2 z-[1] hidden lg:block -translate-y-1/2">
  <Image
    src="/images/SUNOKI LOGO.png"
    alt="SUNOKI VIETNAM"
    width={1100}
    height={400}
   className={`w-[140px] md:w-[420px] lg:w-[780px] transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
  showLogo
    ? "translate-y-0 scale-100 opacity-15 md:opacity-20 lg:opacity-30"
    : "translate-y-10 scale-75 opacity-0"
}`}
  />
</div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[680px] items-center">
        <Container>
          <div
  className={`max-w-[520px] transition-all duration-[1800ms] delay-[1200ms] ease-out ${
    showLogo
      ? "translate-y-0 opacity-100"
      : "translate-y-6 opacity-0"
  }`}
  
>{/* Mobile Logo */}
<div className="mb-4 flex lg:hidden">
  <Image
    src="/images/SUNOKI LOGO.png"
    alt="SUNOKI VIETNAM"
    width={120}
    height={44}
    className="h-auto w-[110px]"
  />
</div>
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.38em] text-[#D8B07A]">
              {t.hero.brand}
            </p>

            <h1 className="text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px] lg:text-[52px]">
              {t.hero.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index !== t.hero.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[460px] text-[15px] leading-7 text-white/90">
              {t.hero.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index !== t.hero.description.split("\n").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#works">
                {t.hero.works}
              </Button>

              <Button
                href="#contact"
                variant="secondary"
              >
                {t.hero.consultation}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:flex flex-col items-center text-white/70">
        <span className="mb-2 text-[10px] font-semibold tracking-[0.42em]">
          {t.hero.scroll}
        </span>

        <span className="h-14 w-px bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 right-6 z-10 hidden text-right text-white/55 lg:block">
        <p className="text-[11px] font-semibold tracking-[0.25em]">
          {t.hero.brand}
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-[0.28em]">
          {t.hero.copyright}
        </p>
      </div>
    </section>
  );
}