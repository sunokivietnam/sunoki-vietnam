"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { useLanguage } from "./LanguageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const residenceImages = [
  "/images/work1.jpg",
  "/images/work4.jpg",
  "/images/work5.jpg",
  "/images/work6.jpg",
  "/images/work7.jpg",
  "/images/work8.jpg",
];

const commercialImages = [
  "/images/gf-seating.jpg",
  "/images/engawa.jpg",
  "/images/drink-bar.jpg",
  "/images/sake-display-new.jpg",
  "/images/kamakura-seat.jpg",
  "/images/private-room.jpg",
  "/images/sushi-counter.jpg",
];

function WorkCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[16px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[18px]">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/20" />

      </div>

      <div className="p-3">

        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B8895A]">
          {subtitle}
        </p>

        <h3 className="mt-2 text-[18px] font-bold text-[#2B2520]">
          {title}
        </h3>

      </div>

    </article>
  );
}

export default function Works() {
  const { t } = useLanguage();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState<{ src: string }[]>([]);  return (
    <section
      id="works"
      className="bg-[#FAF7F3] py-12 md:py-14"
    >
      <Container>

        <SectionTitle
          subtitle={t.works.subtitle}
          title={t.works.title}
          description={t.works.description}
        />

        {/* =========================
            Residence
        ========================= */}

        <div className="mt-12">

          <div className="mb-8">

            <p className="text-[11px] font-semibold tracking-[0.32em] text-[#B8895A]">
              {t.works.residence.subtitle}
            </p>

            <h3 className="mt-2 text-[30px] font-bold text-[#2B2520] md:text-[34px]">
              {t.works.residence.title}
            </h3>

            <p className="mt-3 max-w-lg text-[15px] leading-7 whitespace-pre-line text-[#666]">
              {t.works.residence.description}
            </p>

          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3.25,
              },
            }}
            className="pb-8"
          >

            {t.works.residence.items.map((work, i) => (

              <SwiperSlide
                key={work.title}
                className="py-2"
              >

                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSlides(
                      residenceImages.map((image) => ({
                        src: image,
                      }))
                    );
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <WorkCard
                    image={residenceImages[i]}
                    title={work.title}
                    subtitle={work.subtitle}
                  />
                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>        {/* =========================
            Commercial
        ========================= */}

        <div className="mt-16">

          <div className="mb-8">

            <p className="text-[11px] font-semibold tracking-[0.32em] text-[#B8895A]">
              {t.works.commercial.subtitle}
            </p>

            <h3 className="mt-2 text-[30px] font-bold text-[#2B2520] md:text-[34px]">
              {t.works.commercial.title}
            </h3>

            <p className="mt-3 max-w-lg text-[15px] leading-7 whitespace-pre-line text-[#666]">
              {t.works.commercial.description}
            </p>

          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3.25,
              },
            }}
            className="pb-8"
          >

            {t.works.commercial.items.map((work, i) => (

              <SwiperSlide
                key={work.title}
                className="py-2"
              >

                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSlides(
                      commercialImages.map((image) => ({
                        src: image,
                      }))
                    );
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <WorkCard
                    image={commercialImages[i]}
                    title={work.title}
                    subtitle={work.subtitle}
                  />
                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

        {/* =========================
            3D MODEL ROOM
        ========================= */}

        <section className="mt-16">

          <h3 className="text-center text-[28px] font-bold text-[#2B2520] md:text-[32px]">
            {t.works.model.title}
          </h3>

          <p className="mt-3 text-center text-[15px] leading-7 text-[#666]">
            {t.works.model.description}
          </p>

          <div className="mx-auto mt-6 max-w-[700px] overflow-hidden rounded-[18px] shadow-[0_12px_36px_rgba(43,37,32,0.12)]">

            <video
              src="/videos/kokoro.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full"
            />

          </div>

        </section>        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />

      </Container>
    </section>
  );
}