"use client";

import { useLanguage } from "./LanguageContext";
import {
  BadgeCheck,
  HardHat,
  GraduationCap,
  Languages,
  Hammer,
  HeartHandshake,
} from "lucide-react";

export default function WhyKokoro() {
  const { t } = useLanguage();

 const features = [
  {
    icon: BadgeCheck,
    ...t.why.features[0],
  },
  {
    icon: HardHat,
    ...t.why.features[1],
  },
  {
    icon: GraduationCap,
    ...t.why.features[2],
  },
  {
    icon: Languages,
    ...t.why.features[3],
  },
  {
    icon: Hammer,
    ...t.why.features[4],
  },
  {
    icon: HeartHandshake,
    ...t.why.features[5],
  },
];

  return (
    <section
      id="service"
      className="bg-[#FAF7F3] py-16 md:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* Title */}

        <div className="mb-10 max-w-3xl">

          <p className="mb-4 text-[11px] font-semibold tracking-[0.34em] text-[#B8895A]">
            {t.why.subtitle}
          </p>

          <h2 className="whitespace-pre-line text-[30px] font-bold leading-tight tracking-[-0.02em] text-[#2B2520] md:text-[42px]">
            {t.why.title}
          </h2>

          <p className="mt-5 max-w-lg whitespace-pre-line text-[15px] leading-7 tracking-[0.03em] text-[#2B2520]/75 md:text-base">
            {t.why.description}
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <article
                key={index}
                className="group flex h-full flex-col rounded-[18px] bg-white px-6 py-5 md:py-7 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                <Icon
  className="mb-5 h-6 w-6 md:h-[30px] md:w-[30px] text-[#B8895A]"
  strokeWidth={1.7}
  aria-hidden="true"
/>

                <h3 className="mb-3 text-base md:text-lg font-bold tracking-[0.03em] text-[#2B2520]">
                  {feature.title}
                </h3>

               <p className="whitespace-pre-line text-[13px] md:text-[14px] leading-6 md:leading-7 text-[#2B2520]/70">
  <span className="hidden md:inline">
    {feature.description}
  </span>

  <span className="md:hidden">
    {feature.descriptionMobile}
  </span>
</p>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}