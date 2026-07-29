"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { useLanguage } from "./LanguageContext";

export default function ModelPlans() {
  const { language } = useLanguage();

  const t =
    language === "ja"
      ? require("../messages/ja").default
      : require("../messages/vi").default;

  const [open, setOpen] = useState(false);

const [slides, setSlides] = useState<{ src: string }[]>([]);
const [showGallery, setShowGallery] = useState<number | null>(null);
const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (gallery: string[]) => {
    setSlides(gallery.map((src) => ({ src })));
    setOpen(true);
  };

  return (
    <section className="bg-[#FAF7F3] py-12 md:py-16">
      <Container>
        <SectionTitle
          subtitle={t.modelPlans.subtitle}
          title={t.modelPlans.title}
          description={t.modelPlans.description}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {t.modelPlans.plans.map((plan: any, index: number) => (
            <article
              key={index}
              className="overflow-hidden rounded-[18px] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-[11px] font-semibold tracking-[0.28em] text-[#B8895A]">
                  {plan.label}
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-[#2B2520]">
                  {plan.name}
                </h3>

                <div className="mt-6 space-y-3 text-[14px] text-[#555]">
                  <div className="flex items-center justify-between border-b border-[#ECE7E0] pb-2">
                    <span>{t.modelPlans.area}</span>
                    <span>{plan.area}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#ECE7E0] pb-2">
                    <span>{t.modelPlans.unitPrice}</span>
                    <span>{plan.unitPrice}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#ECE7E0] pb-2">
                    <span>{t.modelPlans.grade}</span>
                    <span>{plan.grade}</span>
                  </div>
                                    <div>
                    <p className="mb-2 font-semibold text-[#2B2520]">
                      {t.modelPlans.specification}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {plan.specifications.map(
                        (item: string, i: number) => (
                          <span
                            key={i}
                            className="rounded-full bg-[#F3EEE8] px-3 py-1 text-[12px]"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-[#F7F3EE] p-5 text-center">
                    <p className="text-[11px] font-semibold tracking-[0.28em] text-[#B8895A]">
                      {t.modelPlans.estimatedCost}
                    </p>

                    <p className="mt-2 text-[30px] font-bold text-[#2B2520]">
                      {plan.estimatedCost}
                    </p>
                  </div>

                 {plan.gallery && (
  <button
    type="button"
    onClick={() =>
      setShowGallery(showGallery === index ? null : index)
    }
    className="mt-6 w-full rounded-full border border-[#B8895A] py-3 text-[14px] font-medium text-[#B8895A] transition-all duration-300 hover:bg-[#B8895A] hover:text-white"
  >
    {showGallery === index
      ? "写真を閉じる ▲"
      : "写真を見る ▼"}
  </button>
)}
{plan.gallery && (
  <div
    className={`grid grid-cols-4 gap-2 overflow-hidden transition-all duration-300 ${
      showGallery === index
        ? "mt-5 max-h-[500px] opacity-100"
        : "max-h-0 opacity-0"
    }`}
  >
    {plan.gallery.map((image: string, i: number) => (
      <button
        key={i}
        type="button"
        onClick={() => {
          setSlides(
            plan.gallery.map((src: string) => ({
              src,
            }))
          );
          setCurrentIndex(i);
          setOpen(true);
        }}
        className="group relative aspect-square overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-110"
        />
      </button>
    ))}
  </div>
)}

                </div>
              </div>
            </article>
          ))}
        </div>
                <p className="mt-8 text-center text-[12px] leading-relaxed text-[#777]">
          <span className="hidden md:inline">
            {t.modelPlans.notice}
          </span>

          <span className="whitespace-pre-line md:hidden">
            {t.modelPlans.noticeMobile}
          </span>
        </p>

        <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={slides}
  index={currentIndex}
/>

      </Container>
    </section>
  );
}
