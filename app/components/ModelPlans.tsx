"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

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
  const [showSpecs, setShowSpecs] = useState<number | null>(null);
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
  <div className="pt-2">

    <button
      type="button"
      onClick={() => setShowSpecsModal(true)}

      className="flex w-full items-center justify-between rounded-full border border-[#B8895A] px-5 py-3 text-[14px] font-medium text-[#B8895A] transition-all duration-300 hover:bg-[#B8895A] hover:text-white"
    >
      <span>
        {showSpecs === index
          ? t.modelPlans.hideSpecification
          : t.modelPlans.viewSpecification}
      </span>

      {showSpecs === index ? (
        <ChevronUp size={18} />
      ) : (
        <ChevronDown size={18} />
      )}
    </button>

    <div
      className={`overflow-hidden transition-all duration-500 ${
        showSpecs === index
          ? "mt-5 max-h-[1500px] opacity-100"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="rounded-xl bg-[#F7F3EE] p-5">       
         {/* Kitchen */}
        <div className="mb-5">
          <h4 className="mb-2 font-semibold text-[#2B2520]">
            🍳 Kitchen
          </h4>

          <ul className="space-y-1 text-[13px] text-[#555]">
            <li>• Shoe Cabinet</li>
            <li>• Refrigerator Cabinet</li>
            <li>• Upper & Lower Cabinets</li>
            <li>• Artificial Stone Countertop</li>
            <li>• Glass Backsplash</li>
            <li>• GARIS Storage System</li>
            <li>• Range Hood</li>
            <li>• IH Cooktop</li>
            <li>• Sink & Faucet</li>
          </ul>
        </div>

        {/* Living */}
        <div className="mb-5">
          <h4 className="mb-2 font-semibold text-[#2B2520]">
            🛋 Living
          </h4>

          <ul className="space-y-1 text-[13px] text-[#555]">
            <li>• Sofa</li>
            <li>• TV Cabinet</li>
            <li>• Dining Table</li>
            <li>• Dining Chairs</li>
          </ul>
        </div>

        {/* Bathroom */}
        <div className="mb-5">
          <h4 className="mb-2 font-semibold text-[#2B2520]">
            🚿 Bathroom
          </h4>

          <ul className="space-y-1 text-[13px] text-[#555]">
            <li>• Vanity Cabinet</li>
            <li>• Wash Basin</li>
            <li>• Faucet</li>
            <li>• Shower Set</li>
            <li>• Toilet</li>
            <li>• Wall Tiles</li>
            <li>• Glass Shower Partition</li>
          </ul>
        </div>        {/* Master Bedroom */}
        <div className="mb-5">
          <h4 className="mb-2 font-semibold text-[#2B2520]">
            🛏 Master Bedroom
          </h4>

          <ul className="space-y-1 text-[13px] text-[#555]">
            <li>• Bed</li>
            <li>• Bedside Table</li>
            <li>• Wardrobe</li>
            <li>• Dressing Table</li>
            <li>• Chair</li>
            <li>• Decorative Wall Panel</li>
          </ul>
        </div>

        {/* Second Bedroom */}
        <div className="mb-5">
          <h4 className="mb-2 font-semibold text-[#2B2520]">
            🛏 Second Bedroom
          </h4>

          <ul className="space-y-1 text-[13px] text-[#555]">
            <li>• Bed</li>
            <li>• Bedside Table</li>
            <li>• Wardrobe</li>
            <li>• Dressing Table</li>
            <li>• Chair</li>
            <li>• Decorative Wall Panel</li>
          </ul>
        </div>

        {/* Interior Finish */}
        <div>
          <h4 className="mb-2 font-semibold text-[#2B2520]">
            🏠 Interior Finish
          </h4>

          <ul className="space-y-1 text-[13px] text-[#555]">
            <li>• Flooring</li>
            <li>• Skirting</li>
            <li>• Wall Painting</li>
            <li>• Electrical Wiring</li>
            <li>• LED Lighting</li>
            <li>• Downlights</li>
            <li>• Interior Doors</li>
          </ul>
        </div>

      </div>
    </div>

  </div>
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
    className="mt-6 w-full rounded-full border border-[#B8895A] py-3 text-[14px] font-medium text-[#B8895A] transition-all duration-300 hover:bg-[#B8895A] hover:text-white"
  >
    {showGallery === index
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
      className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl animate-[zoomIn_.25s_ease] overflow-hidden"
    >
      {/* Header */}
      <div className="relative border-b border-[#EFEAE4] px-8 py-6">

        <button
          onClick={() => setShowSpecsModal(false)}
          className="absolute right-6 top-5 text-3xl text-[#888] hover:text-black"
        >
          ×
        </button>

        <h2 className="text-center text-3xl font-bold text-[#2B2520]">
          Specifications
        </h2>
      </div>

      {/* Body */}
      <div className="max-h-[75vh] overflow-y-auto p-8">

        <div className="grid gap-8 md:grid-cols-2">

          {/* Kitchen */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#B8895A]">
              🍳 Kitchen
            </h3>

            <ul className="space-y-2">
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
                <li key={item} className="flex items-center gap-2 text-[14px]">
                  <Check className="h-4 w-4 text-[#B8895A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Living */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#B8895A]">
              🛋 Living
            </h3>

            <ul className="space-y-2">
              {[
                "Sofa",
                "TV Cabinet",
                "Dining Table",
                "Dining Chairs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px]">
                  <Check className="h-4 w-4 text-[#B8895A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bathroom */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#B8895A]">
              🚿 Bathroom
            </h3>

            <ul className="space-y-2">
              {[
                "Vanity Cabinet",
                "Wash Basin",
                "Faucet",
                "Shower Set",
                "Toilet",
                "Wall Tiles",
                "Glass Shower Partition",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px]">
                  <Check className="h-4 w-4 text-[#B8895A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Master Bedroom */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#B8895A]">
              🛏 Master Bedroom
            </h3>

            <ul className="space-y-2">
              {[
                "Bed",
                "Bedside Table",
                "Wardrobe",
                "Dressing Table",
                "Chair",
                "Decorative Wall Panel",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px]">
                  <Check className="h-4 w-4 text-[#B8895A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Second Bedroom */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#B8895A]">
              🛏 Second Bedroom
            </h3>

            <ul className="space-y-2">
              {[
                "Bed",
                "Bedside Table",
                "Wardrobe",
                "Dressing Table",
                "Chair",
                "Decorative Wall Panel",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px]">
                  <Check className="h-4 w-4 text-[#B8895A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interior */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#B8895A]">
              🏠 Interior Finish
            </h3>

            <ul className="space-y-2">
              {[
                "Flooring",
                "Skirting",
                "Wall Painting",
                "Electrical Wiring",
                "LED Lighting",
                "Downlights",
                "Interior Doors",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px]">
                  <Check className="h-4 w-4 text-[#B8895A]" />
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