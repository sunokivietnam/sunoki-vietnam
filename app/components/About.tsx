"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="bg-[#FBF8F2] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* PHILOSOPHY */}

        <div className="grid items-center gap-14 md:grid-cols-2 lg:gap-24">

          <div className="max-w-xl">

            <p className="mb-6 text-xs font-semibold tracking-[0.34em] text-[#B8895A]">
              {t.about.philosophy}
            </p>

            <h2 className="mb-10 text-4xl font-bold leading-tight tracking-[-0.02em] text-[#2B2520] md:text-5xl">
              {t.about.title}
            </h2>

            <p className="whitespace-pre-line text-base leading-[2.1] tracking-[0.04em] text-[#2B2520]/85 md:text-lg">
              {t.about.description}
            </p>

          </div>

          <div className="relative overflow-hidden rounded-[24px] shadow-[0_28px_80px_rgba(43,37,32,0.14)]">

            <Image
              src="/images/about.jpg"
              alt="KOKORO Living brand philosophy"
              width={760}
              height={560}
              className="h-auto w-full object-cover"
            />

          </div>

        </div>

        {/* KOKORO COLLECTION */}

        <div className="mt-28">

          <p className="text-xs font-semibold tracking-[0.34em] text-[#B8895A]">
            {t.about.collection}
          </p>

          <h3 className="mt-4 text-4xl font-bold text-[#2B2520]">
            {t.about.collectionTitle}
          </h3>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#666]">
            {t.about.collectionDescription}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {/* WOOD */}

            <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src="/images/wood.png"
                  alt="天然木材"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <p className="text-xs tracking-[0.28em] text-[#B8895A]">
                  WOOD
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#2B2520]">
                  {t.about.woodTitle}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#666]">
                  {t.about.woodDescription}
                </p>

              </div>

            </div>            {/* LATTICE */}

            <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src="/images/lattice.png"
                  alt="建具・格子"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <p className="text-xs tracking-[0.28em] text-[#B8895A]">
                  LATTICE
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#2B2520]">
                  {t.about.latticeTitle}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#666]">
                  {t.about.latticeDescription}
                </p>

              </div>

            </div>

            {/* LIGHTING */}

            <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src="/images/lighting.png"
                  alt="照明器具"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <p className="text-xs tracking-[0.28em] text-[#B8895A]">
                  LIGHTING
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#2B2520]">
                  {t.about.lightingTitle}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#666]">
                  {t.about.lightingDescription}
                </p>

              </div>

            </div>            {/* BONSAI */}

            <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src="/images/bonsai.png"
                  alt={t.about.bonsaiTitle}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <p className="text-xs tracking-[0.28em] text-[#B8895A]">
                  BONSAI
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#2B2520]">
                  {t.about.bonsaiTitle}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#666]">
                  {t.about.bonsaiDescription}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}