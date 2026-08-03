"use client";

import {
  Check,
  ChefHat,
  Sofa,
  Bath,
  BedDouble,
  Home,
} from "lucide-react";

type SpecificationModalProps = {
  open: boolean;
  onClose: () => void;
  t: any;
};

export default function SpecificationModal({
  open,
  onClose,
  t,
}: SpecificationModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md p-3 md:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[96vw] md:w-full max-w-6xl overflow-hidden rounded-3xl bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl animate-[zoomIn_.25s_ease]"
      >
        {/* Header */}
        <div className="relative border-b border-[#EFEAE4] px-8 py-6">

          <button
            onClick={onClose}
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

          <h2 className="text-center text-2xl md:text-4xl font-bold tracking-tight text-[#2B2520]">
            {t.modelPlans.specification}
          </h2>
        </div>

        {/* Body */}
        <div className="max-h-[75vh] overflow-y-auto p-5 md:p-12">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">

            {/* Kitchen */}
            <div
              className="
                flex
                h-full
                flex-col
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
              "
            >
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
                    key={item}
                    className="
                      group
                      flex
                      items-center
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

              <div className="mt-auto flex items-end justify-end gap-1 border-t border-[#EFE7DE] pt-4">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                  FROM
                </span>

                <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                  90M
                </span>

                <span className="pb-[2px] text-[13px] font-medium text-[#A99B8D]">
                  VNĐ
                </span>
              </div>
            </div>
                        {/* Living */}
            <div
              className="
                flex
                h-full
                flex-col
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
              "
            >
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
                    key={item}
                    className="
                      group
                      flex
                      items-center
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

              <div className="mt-auto flex items-end justify-end gap-1 border-t border-[#EFE7DE] pt-4">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                  FROM
                </span>

                <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                  90M
                </span>

                <span className="pb-[2px] text-[13px] font-medium text-[#A99B8D]">
                  VNĐ
                </span>
              </div>
            </div>

            {/* Bathroom */}
            <div
              className="
                flex
                h-full
                flex-col
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
              "
            >
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
                    key={item}
                    className="
                      group
                      flex
                      items-center
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

              <div className="mt-auto flex items-end justify-end gap-1 border-t border-[#EFE7DE] pt-4">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                  FROM
                </span>

                <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                  90M
                </span>

                <span className="pb-[2px] text-[13px] font-medium text-[#A99B8D]">
                  VNĐ
                </span>
              </div>
            </div>
                        {/* Master Bedroom */}
            <div
              className="
                flex
                h-full
                flex-col
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
              "
            >
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
                    key={item}
                    className="
                      group
                      flex
                      items-center
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

              <div className="mt-auto flex items-end justify-end gap-1 border-t border-[#EFE7DE] pt-4">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                  FROM
                </span>

                <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                  90M
                </span>

                <span className="pb-[2px] text-[13px] font-medium text-[#A99B8D]">
                  VNĐ
                </span>
              </div>
            </div>

            {/* Second Bedroom */}
            <div
              className="
                flex
                h-full
                flex-col
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
              "
            >
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
                    key={item}
                    className="
                      group
                      flex
                      items-center
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

              <div className="mt-auto flex items-end justify-end gap-1 border-t border-[#EFE7DE] pt-4">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                  FROM
                </span>

                <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                  90M
                </span>

                <span className="pb-[2px] text-[13px] font-medium text-[#A99B8D]">
                  VNĐ
                </span>
              </div>
            </div>
                        {/* Interior Finish */}
            <div
              className="
                flex
                h-full
                flex-col
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
              "
            >
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
                    key={item}
                    className="
                      group
                      flex
                      items-center
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

              <div className="mt-auto flex items-end justify-end gap-1 border-t border-[#EFE7DE] pt-4">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                  FROM
                </span>

                <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                  90M
                </span>

                <span className="pb-[2px] text-[13px] font-medium text-[#A99B8D]">
                  VNĐ
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}