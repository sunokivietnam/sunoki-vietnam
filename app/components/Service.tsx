"use client";

import Image from "next/image";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { useLanguage } from "./LanguageContext";

const serviceImages = [
  "/images/home.png",
  "/images/work2.png",
];

export default function Service() {
  const { t } = useLanguage();

  return (
    <section
      id="service"
      className="bg-[#F3EEE8] py-12 md:py-16"
    >
      <Container>

        <SectionTitle
          subtitle={t.service.subtitle}
          title={t.service.title}
          description={t.service.description}
        />

        <div className="mt-10 grid gap-6 md:mt-14 md:gap-8 md:grid-cols-2">

          {t.service.items.map((service, index) => (

            <article
              key={service.title}
              className="group"
            >

              <div className="overflow-hidden rounded-[18px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#F5F3EF]">

                  {index === 2 ? (

                    <div className="grid h-full grid-cols-2 gap-3 p-4">

                      <div className="relative h-full overflow-hidden rounded-[14px]">

                        <Image
                          src="/images/bathroom.jpg"
                          alt="Bathroom"
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />

                      </div>

                      <div className="relative h-full overflow-hidden rounded-[14px]">

                        <Image
                          src="/images/toilet.jpg"
                          alt="Toilet"
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />

                      </div>

                    </div>

                  ) : index === 3 ? (

                    <div className="grid h-full grid-cols-2 gap-3 p-4">

                      <div className="relative h-full overflow-hidden rounded-[14px]">

                        <Image
                          src="/images/work3.jpg"
                          alt="Japanese Garden"
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />

                      </div>

                      <div className="relative h-full overflow-hidden rounded-[14px]">

                        <Image
  src="/images/zen.jpg"
  alt="Zen Space"
  fill
  className="object-cover object-[50%_55%] transition duration-700 group-hover:scale-105"
/>

                      </div>

                    </div>

                  ) : (

                    <Image
  src={serviceImages[index]}
  alt={service.title}
  fill
  sizes="(min-width:768px) 50vw,100vw"
  className={
    index === 1
      ? "object-cover object-[50%_25%] transition duration-700 group-hover:scale-105"
      : "object-cover transition duration-700 group-hover:scale-105"
  }
/>

                  )}

                </div>

              </div>

              <div className="mt-5">

                <p className="text-[10px] font-semibold tracking-[0.32em] text-[#B8895A]">
                  {service.category}
                </p>

                <h3 className="mt-2 text-[22px] md:text-[24px] font-bold text-[#2B2520]">
                  {service.title}
                </h3>                <p className="mt-2 whitespace-pre-line text-[14px] leading-7 md:text-[15px] text-[#555]">
                  {service.description}
                </p>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          
          <Button href="#works">
            {t.service.worksButton}
          </Button>

        </div>

      </Container>

    </section>
  );
}