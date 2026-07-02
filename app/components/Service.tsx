"use client";

import Image from "next/image";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { useLanguage } from "./LanguageContext";

const serviceImages = [
  "/images/about.jpg",
  "/images/work2.jpg",
  "/images/bathroom.jpg",
  "/images/work3.jpg",
];

export default function Service() {
  const { t } = useLanguage();

  return (
    <section
      id="service"
      className="bg-[#FAF7F3] py-16 md:py-20"
    >
      <Container>

        <SectionTitle
          subtitle={t.service.subtitle}
          title={t.service.title}
          description={t.service.description}
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {t.service.items.map((service, index) => (

            <article
              key={service.title}
              className="group"
            >

              <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(43,37,32,0.08)]">

                <div className="relative aspect-square bg-[#F5F3EF]">

                  <Image
                    src={serviceImages[index]}
                    alt={service.title}
                    fill
                    sizes="(min-width:768px) 50vw,100vw"
                    className="object-contain p-6 transition duration-700 group-hover:scale-[1.03]"
                  />

                </div>

              </div>

              <div className="mt-7">

                <p className="text-[11px] font-semibold tracking-[0.35em] text-[#B8895A]">
                  {service.category}
                </p>

                <h3 className="mt-3 text-[30px] font-bold text-[#2B2520]">
                  {service.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-base leading-8 text-[#555]">
                  {service.description}
                </p>

              </div>

            </article>

          ))}        </div>

        <div className="mt-20 flex justify-center">
          <Button href="#works">
            {t.service.worksButton}
          </Button>
        </div>

      </Container>
    </section>
  );
}