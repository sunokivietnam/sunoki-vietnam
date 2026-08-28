"use client";

import {
  Check,
  ChefHat,
  Sofa,
  Bath,
  BedDouble,
  Home,
  WashingMachine,
} from "lucide-react";

type SpecificationModalProps = {
  open: boolean;
  onClose: () => void;
  t: any;
};

export default function SpecificationModalB({
  open,
  onClose,
  t,
}: SpecificationModalProps) {
  if (!open) return null;

  const sections = [
    {
      title: "Kitchen",
      icon: ChefHat,
      items: t.modelPlans.condoB.kitchen,
      price: t.modelPlans.condoB.kitchenPrice,
    },
    {
      title: "Living",
      icon: Sofa,
      items: t.modelPlans.condoB.living,
      price: t.modelPlans.condoB.livingPrice,
    },
    {
      title: "Bathroom",
      icon: Bath,
      items: t.modelPlans.condoB.bathroom,
      price: t.modelPlans.condoB.bathroomPrice,
    },
    {
      title: "Laundry",
      icon: WashingMachine,
      items: t.modelPlans.condoB.laundry,
      price: t.modelPlans.condoB.laundryPrice,
    },
    {
      title: "Master Bedroom",
      icon: BedDouble,
      items: t.modelPlans.condoB.masterBedroom,
      price: t.modelPlans.condoB.masterBedroomPrice,
    },
    {
      title: "Small Bedroom",
      icon: BedDouble,
      items: t.modelPlans.condoB.smallBedroom,
      price: t.modelPlans.condoB.smallBedroomPrice,
    },
    {
      title: "Interior Finish",
      icon: Home,
      items: t.modelPlans.condoB.interiorFinish,
      price: t.modelPlans.condoB.interiorFinishPrice,
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
          md:w-full
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
        <div className="relative border-b border-[#EFEAE4] px-8 py-6">
          <button
            type="button"
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

          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8895A]">
            Condo B
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
                  <h3
                    className="
                      mb-5
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
                    {section.items.map((item: string) => (
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
                          text-[#555]
                          transition-all
                          duration-200
                          hover:bg-[#F8F4EF]
                          hover:translate-x-1
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

                  {/* Category Price */}
                  <div
                    className="
                      mt-auto
                      flex
                      items-end
                      justify-end
                      gap-1
                      border-t
                      border-[#EFE7DE]
                      pt-4
                    "
                  >
                    <span className="text-[12px] uppercase tracking-[0.18em] text-[#B3A08D]">
                      {t.modelPlans.from}
                    </span>

                    <span className="text-[24px] font-extrabold leading-none text-[#B8895A]">
                      {section.price.replace(" VNĐ", "")}
                    </span>

                    <span className="pb-[2px] text-[13px] font-medium text-[#A99B8D]">
                      VNĐ
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reference Price */}
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
                859.381M
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