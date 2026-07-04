"use client";

import { useLanguage } from "./LanguageContext";
import {
  BadgeCheck,
  Hammer,
  HeartHandshake,
  PencilRuler,
} from "lucide-react";

export default function WhyKokoro() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BadgeCheck,
      ...t.why.features[0],
    },
    {
      icon: PencilRuler,
      ...t.why.features[1],
    },
    {
      icon: Hammer,
      ...t.why.features[2],
    },
    {
      icon: HeartHandshake,
      ...t.why.features[3],
    },
  ];

  return (
    <section
      id="service"
      className="bg-[#FAF7F3] py-14 md:py-16"
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex h-full flex-col rounded-[18px] bg-white px-6 py-7 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                <Icon
                  size={30}
                  strokeWidth={1.7}
                  className="mb-6 text-[#B8895A]"
                  aria-hidden="true"
                />

                <h3 className="mb-3 text-lg font-bold tracking-[0.03em] text-[#2B2520]">
                  {feature.title}
                </h3>

                <p className="whitespace-pre-line text-[14px] leading-7 text-[#2B2520]/70">
                  {feature.description}
                </p>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}