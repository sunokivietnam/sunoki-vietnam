"use client";

import Image from "next/image";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

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
      <div className="absolute inset-0 bg-black/40" />

      {/* SUNOKI Logo */}
<div className="absolute right-[80px] top-1/2 z-[1] hidden -translate-y-1/2 lg:block">
  <Image
    src="/images/SUNOKI LOGO.png"
    alt="SUNOKI VIETNAM"
    width={850}
    height={320}
    className="w-[780px] opacity-[0.20]"
  />
</div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[880px] items-center">
        <Container>
          <div className="max-w-[640px]">
            <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.42em] text-[#D8B07A]">
              {t.hero.brand}
            </p>

            <h1 className="text-[46px] font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-[58px] lg:text-[64px]">
              {t.hero.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index !== t.hero.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-[520px] text-[16px] leading-8 text-white/90">
              {t.hero.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index !== t.hero.description.split("\n").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
      </div>      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:flex flex-col items-center text-white/70">
        <span className="mb-3 text-[10px] font-semibold tracking-[0.45em]">
          {t.hero.scroll}
        </span>

        <span className="h-16 w-px bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 right-8 z-10 hidden text-right text-white/60 lg:block">
        <p className="text-xs font-semibold tracking-[0.28em]">
          {t.hero.brand}
        </p>

        <p className="mt-2 text-[10px] uppercase tracking-[0.32em]">
          {t.hero.copyright}
        </p>
      </div>
    </section>
  );
}