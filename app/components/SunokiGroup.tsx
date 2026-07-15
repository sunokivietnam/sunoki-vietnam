"use client";

import Image from "next/image";
import {
  Building2,
  Globe2,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function SunokiGroup() {
  const { t } = useLanguage();

  return (
    <section
      id="group"
      className="bg-[#FAF7F3] py-16 md:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* =========================
            Title
        ========================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="text-[11px] font-semibold tracking-[0.34em] text-[#B8895A]">
            {t.group.subtitle}
          </p>

         <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#2B2520] whitespace-pre-line">
  <span className="hidden md:inline">
    {t.group.title}
  </span>

  <span className="md:hidden">
    {t.group.titleMobile}
  </span>
</h2>

          <p className="mx-auto mt-5 max-w-[720px] whitespace-pre-line text-[15px] leading-8 text-[#666]">
  <span className="hidden md:inline">
    {t.group.description}
  </span>

  <span className="md:hidden">
    {t.group.descriptionMobile}
  </span>
</p>

        </div>

        {/* =========================
            Group Cards
        ========================= */}

        <div className="relative grid gap-6 lg:grid-cols-2">

          {/* Center Line */}

          <div className="absolute left-1/2 top-1/2 hidden w-20 -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B8895A] to-transparent opacity-70" />
          </div>

          {/* =========================
              JAPAN
          ========================= */}

          <article className="overflow-hidden rounded-[22px] border border-[#E8DED2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="relative aspect-[16/10]">

              <Image
                src="/images/sunoki-japan.jpg"
                alt="サンオキ株式会社"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            <div className="p-5 md:p-6">

              <div className="flex items-center gap-2">

                <Building2
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#B8895A]"
                />

                <p className="text-[11px] font-semibold tracking-[0.28em] text-[#B8895A]">
                  JAPAN
                </p>

              </div>

              <h3 className="mt-2 text-[24px] md:mt-3 md:text-[30px] font-bold text-[#2B2520]">
  {t.group.japan.title}
</h3>

              <p className="mt-1 text-[11px] md:text-[12px] font-semibold tracking-[0.18em] text-[#B8895A]">
                {t.group.japan.since}
              </p>

              <ul className="mt-5 md:mt-8 space-y-3 md:space-y-4 text-[14px] md:text-[15px] leading-6 md:leading-7 text-[#555]">

                {t.group.japan.items.map((item: string) => (
                  <li key={item}>✓ {item}</li>
                ))}

              </ul>

            </div>

          </article>

          {/* =========================
              VIETNAM
          ========================= */}

          <article className="overflow-hidden rounded-[22px] border border-[#E8DED2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="relative aspect-[16/10]">

              <Image
                src="/images/sunoki-vietnam.jpg"
                alt="SUNOKI VIETNAM"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            <div className="p-5 md:p-6">

              <div className="flex items-center gap-2">

                <Globe2
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#B8895A]"
                />

                <p className="text-[11px] font-semibold tracking-[0.28em] text-[#B8895A]">
                  VIETNAM
                </p>

              </div>

              <h3 className="mt-2 text-[24px] md:mt-3 md:text-[30px] font-bold text-[#2B2520]">
                {t.group.vietnam.title}
              </h3>

              <p className="mt-1 text-[11px] md:text-[12px] font-semibold tracking-[0.18em] text-[#B8895A]">
                {t.group.vietnam.since}
              </p>

              <ul className="mt-5 md:mt-8 space-y-3 md:space-y-4 text-[14px] md:text-[15px] leading-6 md:leading-7 text-[#555]">

                {t.group.vietnam.items.map((item: string) => (
                  <li key={item}>✓ {item}</li>
                ))}

              </ul>

            </div>

          </article>

        </div>        {/* =========================
            Official Website
        ========================= */}

        <div className="mt-12 rounded-[22px] border border-[#E8DED2] bg-white px-8 py-8 text-center shadow-sm">

          <p className="text-[18px] font-bold text-[#2B2520]">
            {t.group.websiteTitle}
          </p>

          <p className="mx-auto mt-3 max-w-xl whitespace-pre-line text-[14px] leading-7 text-[#666]">
  <span className="hidden md:inline">
    {t.group.websiteDescription}
  </span>

  <span className="md:hidden">
    {t.group.websiteDescriptionMobile}
  </span>
</p>

          <a
            href="https://www.sun-oki.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-[#B8895A] px-8 text-sm font-semibold tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A77749] hover:shadow-lg"
          >
            {t.group.button}

            <ExternalLink
              size={18}
              strokeWidth={2}
            />

          </a>

        </div>

      </div>
    </section>
  );
}