"use client";

import {
  ChefHat,
  Sofa,
  Tv,
  Archive,
  BedDouble,
  Baby,
  Bath,
  WashingMachine,
  Home,
} from "lucide-react";

type SpecificationModalVillaProps = {
  open: boolean;
  onClose: () => void;
  t: any;
};

export default function SpecificationModalVilla({
  open,
  onClose,
  t,
}: SpecificationModalVillaProps) {
  if (!open) return null;

  const villa = t.modelPlans.villa;

  const sections = [
    {
  title: villa.kitchenDining.title,
  icon: ChefHat,
  items: villa.kitchenDining.items,
  price: villa.kitchenDining.price,
},
   {
  title: villa.living.title,
  icon: Sofa,
  items: villa.living.items,
  price: villa.living.price,
},
    {
  title: villa.livingVipEntertainment.title,
  icon: Tv,
  items: villa.livingVipEntertainment.items,
  price: villa.livingVipEntertainment.price,
},
    {
  title: villa.decorativeStorage.title,
  icon: Archive,
  items: villa.decorativeStorage.items,
  price: villa.decorativeStorage.price,
},
    {
  title: villa.masterBedroom.title,
  icon: BedDouble,
  items: villa.masterBedroom.items,
  price: villa.masterBedroom.price,
},
    {
  title: villa.smallBedroom.title,
  icon: Baby,
  items: villa.smallBedroom.items,
  price: villa.smallBedroom.price,
},
    {
      title: villa.bathroomWc.title,
      icon: Bath,
      price: villa.bathroomWc.price,
    },
    {
      title: villa.laundry.title,
      icon: WashingMachine,
      price: villa.laundry.price,
    },
    {
      title: villa.roughCompletionFinishing.title,
      icon: Home,
      price: villa.roughCompletionFinishing.price,
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
          w-[96vw]
          max-w-6xl
          overflow-hidden
          rounded-3xl
          bg-white/95
          shadow-[0_25px_80px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
          animate-[zoomIn_.25s_ease]
        "
      >
        {/* Header */}
        <div className="relative border-b border-[#EFEAE4] px-6 py-6 md:px-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              transition
              hover:bg-[#F5F1EC]
              hover:text-[#B8895A]
              md:right-5
              md:top-5
            "
          >
            <span className="text-[28px] leading-none">×</span>
          </button>

          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8895A]">
            Villa Residence
          </p>

          <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-[#2B2520] md:text-4xl">
            {t.modelPlans.specification}
          </h2>
        </div>

        {/* Body */}
        <div className="max-h-[75vh] overflow-y-auto p-5 md:p-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.title}
                  className="
                    flex
                    min-h-[180px]
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

{section.items?.length > 0 && (
  <ul className="mt-5 space-y-2">
    {section.items.map((item: string) => (
      <li
        key={item}
        className="flex items-start gap-2 text-[13px] leading-relaxed text-[#555]"
      >
        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#B8895A]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)}

<div className="mt-auto border-t border-[#ECE4DA] pt-5 text-right">
                    <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B3A08D]">
                      {t.modelPlans.from}
                    </span>

                    <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                      {section.price.replace(" VNĐ", "")}
                    </span>

                    <span className="ml-1 text-[12px] font-medium text-[#A99B8D]">
                      VNĐ
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Reference Price */}
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-[#EFE7DE]
              bg-[#F7F3EE]
              px-6
              py-6
              text-center
            "
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8895A]">
              {t.modelPlans.referencePrice}
            </p>

            <div className="mt-3 flex items-end justify-center gap-2">
              <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                {t.modelPlans.from}
              </span>

              <span className="text-[30px] font-extrabold leading-none text-[#B8895A] md:text-[36px]">
                2,884.6M
              </span>

              <span className="pb-[3px] text-[13px] font-medium text-[#A99B8D]">
                VNĐ
              </span>
            </div>

            <p className="mt-3 text-[12px] text-[#999]">
              {t.modelPlans.excludingVat}
            </p>
          </div>

          {/* Close Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-full
                border
                border-[#B8895A]
                px-8
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
              {t.modelPlans.hideSpecification}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}