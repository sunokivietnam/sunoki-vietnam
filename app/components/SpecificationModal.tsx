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

  const sections = [
    {
      title: "Kitchen",
      icon: ChefHat,
      items: [
        "Shoe Cabinet",
        "Refrigerator Cabinet",
        "Upper & Lower Cabinets",
        "Artificial Stone Countertop",
        "Glass Backsplash",
        "GARIS Storage System",
        "Range Hood",
        "IH Cooktop",
        "Sink & Faucet",
      ],
    },
    {
      title: "Living",
      icon: Sofa,
      items: [
        "Sofa",
        "Dining Table & Chairs",
        "TV Cabinet",
      ],
    },
    {
      title: "Bathroom",
      icon: Bath,
      items: [
        "Vanity Cabinet",
        "Wash Basin",
        "Faucet",
        "Shower Set",
        "Toilet",
        "Wall Tiles",
        "Glass Shower Partition",
      ],
    },
    {
      title: "Master Bedroom",
      icon: BedDouble,
      items: [
        "Bed",
        "Bedside Table",
        "Wardrobe",
        "Dressing Table",
        "Chair",
        "Decorative Wall Panels",
      ],
    },
    {
      title: "Second Bedroom",
      icon: BedDouble,
      items: [
        "Bed",
        "Bedside Table",
        "Decorative Wall Panel",
        "Wardrobe",
        "Dressing Table",
        "Chair",
      ],
    },
    {
      title: "Interior Finish",
      icon: Home,
      items: [
        "Flooring",
        "Skirting",
        "Wall Painting",
        "Electrical Wiring",
        "LED Strip Lighting",
        "LED Power Supply & Touch Sensors",
        "Downlights",
        "Interior Doors",
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-3 backdrop-blur-md md:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          flex
          max-h-[90vh]
          w-[96vw]
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-3xl
          bg-white/95
          shadow-[0_25px_80px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
        "
      >
        {/* Header */}
        <div className="relative shrink-0 border-b border-[#EFEAE4] px-8 py-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
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
              text-[#555]
              transition
              hover:bg-[#F5F1EC]
              hover:text-[#B8895A]
            "
          >
            <span className="text-[28px] leading-none">×</span>
          </button>

          <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8895A]">
            Condo A
          </p>

          <h2 className="text-center text-2xl font-bold tracking-tight text-[#2B2520] md:text-4xl">
            {t.modelPlans.specification}
          </h2>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 md:p-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.title}
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
                    hover:-translate-y-1
                    hover:bg-[#F8F4EF]
                    hover:shadow-md
                  "
                >
                  <h3
                    className="
                      mb-4
                      flex
                      items-center
                      gap-2
                      border-b
                      border-[#ECE4DA]
                      pb-3
                      text-lg
                      font-semibold
                      text-[#B8895A]
                    "
                  >
                    <Icon className="h-5 w-5" />
                    {section.title}
                  </h3>

                  <ul className="space-y-1">
                    {section.items.map((item) => (
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
                          text-[#4F4944]
                          transition-all
                          duration-200
                          hover:translate-x-1
                          hover:bg-[#F8F4EF]
                        "
                      >
                        <Check
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-[#B8895A]
                            transition-transform
                            duration-200
                            group-hover:scale-125
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Reference Price */}
          <div
            className="
              mt-7
              rounded-2xl
              border
              border-[#E8DDD1]
              bg-[#F7F3EE]
              px-6
              py-6
              text-center
            "
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B3A08D]">
              {languageLabel(t)}
            </p>

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B8895A]">
              Reference Price · FROM
            </p>

            <p className="mt-2 text-[30px] font-extrabold leading-none text-[#2B2520] md:text-[36px]">
              212.55M
            </p>

            <p className="mt-2 text-[12px] font-medium text-[#9B8C7D]">
              VNĐ · Excluding VAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function languageLabel(t: any) {
  return t?.modelPlans?.condoA ?? "Condo A";
}