"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="bg-[#FBF8F2] px-6 py-16 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* =========================
            PHILOSOPHY
        ========================= */}

        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">

          {/* Left */}

          <div className="max-w-full md:max-w-lg">

            <p className="mb-4 text-[11px] font-semibold tracking-[0.34em] text-[#B8895A]">
              {t.about.philosophy}
            </p>

            <h2 className="mb-5 text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#2B2520] md:text-[42px]">
  {t.about.title}
</h2>

            {/* PC */}
<p className="hidden md:block whitespace-pre-line text-[16px] leading-9 text-[#333]">
  {t.about.description}
</p>

{/* Mobile */}
<p className="block md:hidden whitespace-pre-line text-[15px] leading-[2] text-[#333]">
  {t.about.descriptionMobile}
</p>

          </div>

          {/* Right */}

          <div className="relative mx-auto w-[88%] overflow-hidden rounded-[18px] shadow-[0_18px_50px_rgba(43,37,32,0.12)]">

            <Image
              src="/images/about.jpg"
              alt="KOKORO Living brand philosophy"
              width={680}
              height={500}
              className="h-auto w-full object-cover"
            />

          </div>

        </div>

        {/* =========================
            KOKORO COLLECTION
        ========================= */}

        <div className="mt-20">

          <p className="text-[11px] font-semibold tracking-[0.34em] text-[#B8895A]">
            {t.about.collection}
          </p>

         <h3
  className="
    mt-3
    font-bold
    leading-[1.2]
    text-[#2B2520]
    max-w-[760px]
    whitespace-pre-line
    text-[22px] sm:text-[26px] md:text-[42px]
  "
>
  <span className="hidden md:inline">
    {t.about.collectionTitle}
  </span>

  <span className="md:hidden">
    {t.about.collectionTitleMobile}
  </span>
</h3>

          <p className="mt-4 max-w-2xl whitespace-pre-line text-[15px] leading-7 text-[#666]">
  <span className="hidden md:inline">
    {t.about.collectionDescription}
  </span>

  <span className="md:hidden">
    {t.about.collectionDescriptionMobile}
  </span>
</p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">            {/* =========================
                WOOD
            ========================= */}

            <div className="group overflow-hidden rounded-[18px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src="/images/wood.png"
                  alt="天然木材"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-4">

                <p className="text-[11px] tracking-[0.24em] text-[#B8895A]">
                  WOOD
                </p>

                <h4 className="mt-2 text-lg font-bold text-[#2B2520]">
                  {t.about.woodTitle}
                </h4>

                <p className="mt-2 text-[13px] leading-6 text-[#666]">
                  {t.about.woodDescription}
                </p>

              </div>

            </div>

            {/* =========================
                LATTICE
            ========================= */}

            <div className="group overflow-hidden rounded-[18px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src="/images/lattice.png"
                  alt="建具・格子"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-4">

                <p className="text-[11px] tracking-[0.24em] text-[#B8895A]">
                  LATTICE
                </p>

                <h4 className="mt-2 text-lg font-bold text-[#2B2520]">
                  {t.about.latticeTitle}
                </h4>

                <p className="mt-2 text-[13px] leading-6 text-[#666]">
                  {t.about.latticeDescription}
                </p>

              </div>

            </div>            {/* =========================
                LIGHTING
            ========================= */}

            <div className="group overflow-hidden rounded-[18px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src="/images/lighting.png"
                  alt="照明器具"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-4">

                <p className="text-[11px] tracking-[0.24em] text-[#B8895A]">
                  LIGHTING
                </p>

                <h4 className="mt-2 text-lg font-bold text-[#2B2520]">
                  {t.about.lightingTitle}
                </h4>

                <p className="hidden md:block mt-2 text-[13px] leading-6 text-[#666]">
  {t.about.lightingDescription}
</p>

<p className="block md:hidden mt-2 text-[13px] leading-6 whitespace-pre-line text-[#666]">
  {t.about.lightingDescriptionMobile}
</p>

              </div>

            </div>

            {/* =========================
                BONSAI
            ========================= */}

            <div className="group overflow-hidden rounded-[18px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src="/images/bonsai.png"
                  alt={t.about.bonsaiTitle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-4">

                <p className="text-[11px] tracking-[0.24em] text-[#B8895A]">
                  BONSAI
                </p>

                <h4 className="mt-2 text-lg font-bold text-[#2B2520]">
                  {t.about.bonsaiTitle}
                </h4>

                <p className="hidden md:block mt-2 text-[13px] leading-6 text-[#666]">
  {t.about.bonsaiDescription}
</p>

<p className="block md:hidden mt-2 text-[13px] leading-6 whitespace-pre-line text-[#666]">
  {t.about.bonsaiDescriptionMobile}
</p>

              </div>

            </div>          </div>

        </div>

      </div>

    </section>
  );
}