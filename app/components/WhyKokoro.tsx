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

<h2
  className="
    text-[30px] md:text-[42px]
    font-bold
    leading-[1.15]
    tracking-[-0.02em]
    text-[#2B2520]
    max-w-[760px]
    md:max-w-[760px]
  "
>
  {t.why.title}
</h2>

          <>
  {/* PC */}
  <p
    className="
      hidden md:block
      mt-5
      max-w-[620px]
      whitespace-pre-line
      text-base
      leading-8
      tracking-[0.03em]
      text-[#2B2520]/75
    "
  >
    {t.why.description}
  </p>

  {/* Mobile */}
  <p
    className="
      md:hidden
      mt-5
      max-w-[620px]
      whitespace-pre-line
      text-[15px]
      leading-7
      tracking-[0.03em]
      text-[#2B2520]/75
    "
  >
    {t.why.descriptionMobile}
  </p>
</>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <article
                key={index}
                className="group flex h-full flex-col rounded-[18px] bg-white p-5 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                <Icon
  className="mb-2 h-5 w-5 md:mb-4 md:h-[30px] md:w-[30px] text-[#B8895A]"
  strokeWidth={1.7}
  aria-hidden="true"
/>

                <h3 className="mb-1 text-base md:text-lg font-bold tracking-[0.03em] text-[#2B2520]">
                  {feature.title}
                </h3>

               <p
  className="
    text-[13px]
    md:text-[14px]
    leading-[1.7]
    md:leading-7
    text-[#2B2520]/70
  "
>
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