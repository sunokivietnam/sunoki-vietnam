"use client";

import { useLanguage } from "./LanguageContext";
import {
  PhoneCall,
  ClipboardList,
  FileCheck,
  Hammer,
  KeyRound,
} from "lucide-react";

export default function Process() {
  const { t } = useLanguage();

  const steps = t.process.steps;

  const icons = [
    PhoneCall,
    ClipboardList,
    FileCheck,
    Hammer,
    KeyRound,
  ];

  return (
    <section
      id="process"
      className="bg-[#F8F5F1] py-12 md:py-16"
    >
      <style>{`
        @keyframes lineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .process-line {
          transform-origin: left;
          animation: lineGrow 1.2s ease forwards;
          animation-timeline: view();
          animation-range: entry 15% cover 35%;
        }

        .process-item {
          opacity: 0;
          animation: fadeUp .7s ease forwards;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .delay1 { animation-delay: .1s; }
        .delay2 { animation-delay: .2s; }
        .delay3 { animation-delay: .3s; }
        .delay4 { animation-delay: .4s; }
        .delay5 { animation-delay: .5s; }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-6">

        {/* Title */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[11px] font-semibold tracking-[0.34em] text-[#B8895A]">
            {t.process.subtitle}
          </p>

          <h2 className="mt-3 text-[30px] font-bold leading-tight text-[#2B2520] md:text-[40px]">
            {t.process.title}
          </h2>

          <p className="mt-4 whitespace-pre-line text-[15px] leading-7 text-[#666]">
            {t.process.description}
          </p>

        </div>

        {/* Desktop */}

        <div className="relative mt-16 hidden lg:block">

          <div className="absolute left-[8%] right-[8%] top-9 h-[2px] bg-[#E8D8C7]" />

          <div className="process-line absolute left-[8%] right-[8%] top-9 h-[2px] bg-[#B8895A]" />

          <div className="grid grid-cols-5 gap-5">{steps.map((step, index) => {

  const Icon = icons[index];

  return (

    <div
      key={step.number}
      className={`process-item delay${index + 1} text-center`}
    >

      {/* Number */}

      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-[#B8895A] bg-white text-[22px] font-bold text-[#B8895A] shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:bg-[#B8895A] hover:text-white hover:shadow-xl">

        {step.number}

      </div>

      {/* Icon */}

      <div className="mt-6 flex justify-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F2EC] shadow-sm transition-all duration-300 group-hover:scale-110">

          <Icon
            size={28}
            strokeWidth={1.8}
            className="text-[#B8895A]"
          />

        </div>

      </div>

      {/* Title */}

      <h3 className="mt-5 min-h-[64px] whitespace-pre-line text-[22px] font-bold leading-tight text-[#2B2520]">

        {step.title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i !== step.title.split("\n").length - 1 && <br />}
          </span>
        ))}

      </h3>

      {/* Description */}

      <p className="mx-auto mt-3 min-h-[96px] max-w-[190px] whitespace-pre-line text-[14px] leading-7 text-[#666]">

        {step.description.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i !== step.description.split("\n").length - 1 && <br />}
          </span>
        ))}

      </p>

    </div>

  );

})}        </div>

      </div>

      {/* Mobile */}

      <div className="mt-10 space-y-7 lg:hidden">

        {steps.map((step, index) => {

          const Icon = icons[index];

          return (

            <div
              key={step.number}
              className="relative flex gap-5"
            >

              {/* Number & Line */}

              <div className="flex flex-col items-center">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B8895A] text-[15px] font-bold text-white">

                  {step.number}

                </div>

                {step.number !== "05" && (
                  <div className="mt-2 h-full w-px bg-[#D9C6B1]" />
                )}

              </div>

              {/* Content */}

              <div className="flex-1 pb-8">

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F2EC]">

                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-[#B8895A]"
                  />

                </div>

                <h3 className="whitespace-pre-line text-[19px] font-bold leading-tight text-[#2B2520]">

                  {step.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i !== step.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}

                </h3>

                <p className="mt-2 whitespace-pre-line text-[14px] leading-7 text-[#666]">

                  {step.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i !== step.description.split("\n").length - 1 && <br />}
                    </span>
                  ))}

                </p>

              </div>

            </div>

          );

        })}

      </div>    </div>

  </section>
);
}