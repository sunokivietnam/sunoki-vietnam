"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { useLanguage } from "./LanguageContext";
import {
  Check,
  ChefHat,
  Sofa,
  Bath,
  BedDouble,
  Home,
} from "lucide-react";

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
  const [showSpecsModal, setShowSpecsModal] = useState(false);
 
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
                  {plan.name === "Condo A" && (
  <button
  type="button"
  onClick={() => setShowSpecsModal(true)}
  className="
    mt-4
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-full
    bg-[#B8895A]
    py-3
    text-[14px]
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-[#A97A48]
    hover:shadow-lg
    hover:-translate-y-0.5
  "
>
  📋 {t.modelPlans.viewSpecification}
</button>
)}

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
    className="
  mt-6
  flex
  w-full
  items-center
  justify-center
  gap-2
  rounded-full
  border
  border-[#B8895A]
  py-3
  text-[14px]
  font-medium
  text-[#B8895A]
  transition-all
  duration-300
  hover:bg-[#FAF5F0]
  hover:shadow
"
  >
    🖼 {showGallery === index
  ? t.modelPlans.closeGallery
  : t.modelPlans.viewGallery}
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
{showSpecsModal && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md p-6"
    onClick={() => setShowSpecsModal(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-6xl rounded-3xl bg-white/95
backdrop-blur-xl
shadow-[0_25px_80px_rgba(0,0,0,0.18)] animate-[zoomIn_.25s_ease] overflow-hidden"
    >
      {/* Header */}
      <div className="relative border-b border-[#EFEAE4] px-8 py-6">

        <button
  onClick={() => setShowSpecsModal(false)}
  className="
    absolute
    right-5
    top-5
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    transition
    hover:bg-[#F5F1EC]
    hover:text-[#B8895A]
  "
>
  <span className="text-[28px] leading-none">×</span>
</button>

        <h2 className="text-center text-4xl font-bold tracking-tight text-[#2B2520]">
  {t.modelPlans.specification}
</h2>
      </div>

      {/* Body */}
      <div className="max-h-[75vh] overflow-y-auto p-10 md:p-12">

        <div className="grid gap-8 md:grid-cols-2">

          {/* Kitchen */}
          <div className="
rounded-2xl
border
border-[#EFE7DE]
bg-[#FCFAF8]
p-6
transition-all
duration-300
hover:bg-[#F8F4EF]
hover:shadow-md
hover:-translate-y-1
">
            <h3 className="mb-5 flex items-center gap-2 border-b border-[#ECE4DA] pb-3 text-lg font-semibold text-[#B8895A]">
  <ChefHat className="h-5 w-5" />
  Kitchen
</h3>

            <ul className="space-y-1">
              {[
                "Shoe Cabinet",
                "Refrigerator Cabinet",
                "Upper & Lower Cabinets",
                "Artificial Stone Countertop",
                "Glass Backsplash",
                "GARIS Storage System",
                "Range Hood",
                "IH Cooktop",
                "Sink & Faucet",
              ].map((item) => (
               <li
  className="
   group
    flex items-center
    gap-3
    rounded-lg
    px-2
    py-1.5
    text-[14px]
    transition-all
    duration-200
    hover:bg-[#F8F4EF]
    hover:translate-x-1
  "
>
  <Check className="h-4 w-4 text-[#B8895A] transition-transform duration-200 group-hover:scale-125" />
  {item}
</li>
              ))}
            </ul>
          </div>

          {/* Living */}
          <div className="
rounded-2xl
border
border-[#EFE7DE]
bg-[#FCFAF8]
p-6
transition-all
duration-300
hover:bg-[#F8F4EF]
hover:shadow-md
hover:-translate-y-1
">
            <h3 className="mb-5 flex items-center gap-2 border-b border-[#ECE4DA] pb-3 text-lg font-semibold text-[#B8895A]">
  <Sofa className="h-5 w-5" />
  Living
</h3>

            <ul className="space-y-1">
              {[
                "Sofa",
                "TV Cabinet",
                "Dining Table",
                "Dining Chairs",
              ].map((item) => (
                <li
  className="
    group
    flex items-center
    gap-3
    rounded-lg
    px-2
    py-1.5
    text-[14px]
    transition-all
    duration-200
    hover:bg-[#F8F4EF]
    hover:translate-x-1
  "
>
  <Check className="h-4 w-4 text-[#B8895A] transition-transform duration-200 group-hover:scale-125" />
  {item}
</li>
              ))}
            </ul>
          </div>

          {/* Bathroom */}
          <div className="
rounded-2xl
border
border-[#EFE7DE]
bg-[#FCFAF8]
p-6
transition-all
duration-300
hover:bg-[#F8F4EF]
hover:shadow-md
hover:-translate-y-1
">
            <h3 className="mb-5 flex items-center gap-2 border-b border-[#ECE4DA] pb-3 text-lg font-semibold text-[#B8895A]">
  <Bath className="h-5 w-5" />
  Bathroom
</h3>

            <ul className="space-y-1">
              {[
                "Vanity Cabinet",
                "Wash Basin",
                "Faucet",
                "Shower Set",
                "Toilet",
                "Wall Tiles",
                "Glass Shower Partition",
              ].map((item) => (
               <li
  className="
    group
    flex items-center
    gap-3
    rounded-lg
    px-2
    py-1.5
    text-[14px]
    transition-all
    duration-200
    hover:bg-[#F8F4EF]
    hover:translate-x-1
  "
>
  <Check className="h-4 w-4 text-[#B8895A] transition-transform duration-200 group-hover:scale-125" />
  {item}
</li>
              ))}
            </ul>
          </div>

          {/* Master Bedroom */}
         <div className="
rounded-2xl
border
border-[#EFE7DE]
bg-[#FCFAF8]
p-6
transition-all
duration-300
hover:bg-[#F8F4EF]
hover:shadow-md
hover:-translate-y-1
">
           <h3 className="mb-5 flex items-center gap-2 border-b border-[#ECE4DA] pb-3 text-lg font-semibold text-[#B8895A]">
  <BedDouble className="h-5 w-5" />
  Master Bedroom
</h3>

            <ul className="space-y-1">
              {[
                "Bed",
                "Bedside Table",
                "Wardrobe",
                "Dressing Table",
                "Chair",
                "Decorative Wall Panel",
              ].map((item) => (
               <li
  className="
    group
    flex items-center
    gap-3
    rounded-lg
    px-2
    py-1.5
    text-[14px]
    transition-all
    duration-200
    hover:bg-[#F8F4EF]
    hover:translate-x-1
  "
>
  <Check className="h-4 w-4 text-[#B8895A] transition-transform duration-200 group-hover:scale-125" />
  {item}
</li>
              ))}
            </ul>
          </div>

          {/* Second Bedroom */}
          <div className="
rounded-2xl
border
border-[#EFE7DE]
bg-[#FCFAF8]
p-6
transition-all
duration-300
hover:bg-[#F8F4EF]
hover:shadow-md
hover:-translate-y-1
">
            <h3 className="mb-5 flex items-center gap-2 border-b border-[#ECE4DA] pb-3 text-lg font-semibold text-[#B8895A]">
  <BedDouble className="h-5 w-5" />
  Second Bedroom
</h3>

            <ul className="space-y-1">
              {[
                "Bed",
                "Bedside Table",
                "Wardrobe",
                "Dressing Table",
                "Chair",
                "Decorative Wall Panel",
              ].map((item) => (
               <li
  className="
    group
    flex items-center
    gap-3
    rounded-lg
    px-2
    py-1.5
    text-[14px]
    transition-all
    duration-200
    hover:bg-[#F8F4EF]
    hover:translate-x-1
  "
>
  <Check className="h-4 w-4 text-[#B8895A] transition-transform duration-200 group-hover:scale-125" />
  {item}
</li>
              ))}
            </ul>
          </div>

          {/* Interior */}
          <div  className="
rounded-2xl
border
border-[#EFE7DE]
bg-[#FCFAF8]
p-6
transition-all
duration-300
hover:bg-[#F8F4EF]
hover:shadow-md
hover:-translate-y-1
">
           <h3 className="mb-5 flex items-center gap-2 border-b border-[#ECE4DA] pb-3 text-lg font-semibold text-[#B8895A]">
  <Home className="h-5 w-5" />
  Interior Finish
</h3>

            <ul className="space-y-1">
              {[
                "Flooring",
                "Skirting",
                "Wall Painting",
                "Electrical Wiring",
                "LED Lighting",
                "Downlights",
                "Interior Doors",
              ].map((item) => (
               <li
  className="
    group
    flex items-center
    gap-3
    rounded-lg
    px-2
    py-1.5
    text-[14px]
    transition-all
    duration-200
    hover:bg-[#F8F4EF]
    hover:translate-x-1
  "
>
  <Check className="h-4 w-4 text-[#B8895A] transition-transform duration-200 group-hover:scale-125" />
  {item}
</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
)}
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