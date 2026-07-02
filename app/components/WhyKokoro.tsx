"use client";
import { useLanguage } from "./LanguageContext";
import { BadgeCheck, Hammer, HeartHandshake, PencilRuler } from "lucide-react";

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
  className="bg-[#FAF7F3] py-16 md:py-20"
>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl md:mb-20">
         <p className="mb-6 text-xs font-semibold tracking-[0.34em] text-[#B8895A]">
  {t.why.subtitle}
</p>

<h2 className="whitespace-pre-line text-4xl font-bold leading-tight tracking-[-0.02em] text-[#2B2520] md:text-5xl">
  {t.why.title}
</h2>

<p className="mt-8 max-w-xl whitespace-pre-line text-base leading-[2] tracking-[0.04em] text-[#2B2520]/75 md:text-lg">
  {t.why.description}
</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex h-full flex-col rounded-[24px] bg-white px-8 py-10 shadow-[0_24px_70px_rgba(43,37,32,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_90px_rgba(43,37,32,0.14)]"
              >
                <Icon
                  size={36}
                  strokeWidth={1.5}
                  className="mb-8 text-[#B8895A]"
                  aria-hidden="true"
                />                <h3 className="mb-4 text-xl font-bold tracking-[0.04em] text-[#2B2520]">
                  {feature.title}
                </h3>

                <p className="whitespace-pre-line text-sm leading-8 text-[#2B2520]/70">
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