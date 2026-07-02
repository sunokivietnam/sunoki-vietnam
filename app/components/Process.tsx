"use client";

import { useLanguage } from "./LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = t.process.steps;

  return (
    <section
      id="process"
      className="bg-[#FAF7F3] py-16 md:py-20"
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
            transform: translateY(40px);
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
          animation: fadeUp .8s ease forwards;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .delay1 { animation-delay: .1s; }
        .delay2 { animation-delay: .2s; }
        .delay3 { animation-delay: .3s; }
        .delay4 { animation-delay: .4s; }
        .delay5 { animation-delay: .5s; }
      `}</style>

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold tracking-[0.38em] text-[#B8895A]">
            {t.process.subtitle}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#2B2520] md:text-5xl">
            {t.process.title}
          </h2>

          <p className="mt-6 whitespace-pre-line leading-8 text-[#666]">
            {t.process.description}
          </p>

        </div>

        {/* Desktop */}

        <div className="relative mt-20 hidden lg:block">

          <div className="absolute left-[8%] right-[8%] top-11 h-[2px] bg-[#E8D8C7]" />

          <div className="process-line absolute left-[8%] right-[8%] top-11 h-[2px] bg-[#B8895A]" />

          <div className="grid grid-cols-5 gap-6">

            {steps.map((step, index) => (

              <div
                key={step.number}
                className={`process-item delay${index + 1} text-center`}
              >

                <div className="mx-auto flex h-22 w-22 items-center justify-center rounded-full border-[3px] border-[#B8895A] bg-white text-2xl font-bold text-[#B8895A] shadow-[0_10px_30px_rgba(184,137,90,0.15)] transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:bg-[#B8895A] hover:text-white hover:shadow-[0_20px_45px_rgba(184,137,90,0.35)]">

                  {step.number}

                </div>

                <h3 className="mt-8 text-3xl font-bold text-[#2B2520]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[210px] text-base leading-8 text-[#666]">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>        {/* Mobile */}

        <div className="mt-16 space-y-10 lg:hidden">

          {steps.map((step) => (

            <div
              key={step.number}
              className="relative flex gap-6"
            >

              <div className="flex flex-col items-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B8895A] text-lg font-bold text-white">

                  {step.number}

                </div>

                {step.number !== "05" && (
                  <div className="mt-2 h-full w-px bg-[#D9C6B1]" />
                )}

              </div>

              <div className="pb-10">

                <h3 className="text-2xl font-bold text-[#2B2520]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-8 text-[#666]">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}