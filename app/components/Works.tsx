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
  "/images/sake-display.jpg",
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
    <article className="group overflow-hidden rounded-[24px] bg-white shadow-lg">

      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[24px]">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-105 contrast-105 transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30" />

      </div>

      <div className="p-6">

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B8895A]">
          {subtitle}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#2B2520]">
          {title}
        </h3>

      </div>

    </article>
  );
}

export default function Works() {
  const { t } = useLanguage();
 console.log("t =", t);
console.log("keys =", Object.keys(t));
console.log("works =", t.works);

const [open, setOpen] = useState(false);
const [index, setIndex] = useState(0);
const [slides, setSlides] = useState<{ src: string }[]>([]);

  return (
    <section
  id="works"
  className="bg-[#FAF7F3] py-16 md:py-20"
>
      <Container>

       <SectionTitle
  subtitle={t.works.subtitle}
  title={t.works.title}
  description={t.works.description}
/>{/* =========================
    住宅
========================= */}

<div className="mt-20">

  <div className="mb-10 flex items-end justify-between">

    <div>

      <p className="text-xs font-semibold tracking-[0.35em] text-[#B8895A]">
  {t.works.residence.subtitle}
</p>

<h3 className="mt-3 text-4xl font-bold text-[#2B2520]">
  {t.works.residence.title}
</h3>

<p className="mt-4 max-w-xl leading-8 whitespace-pre-line text-[#666]">
  {t.works.residence.description}
</p>

    </div>

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
        slidesPerView: 1.2,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    className="pb-14"
  >

    {t.works.residence.items.map((work, i) => (

      <SwiperSlide key={work.title}>

       <div
  onClick={() => {
  setSlides(
  residenceImages.map((image) => ({
    src: image,
  }))
);
  setIndex(i);
  setOpen(true);
}}
  className="cursor-pointer"
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

</div>{/* =========================
    店舗
========================= */}

<div className="mt-28">

  <div className="mb-10 flex items-end justify-between">

    <div>

      <p className="text-xs font-semibold tracking-[0.35em] text-[#B8895A]">
  {t.works.commercial.subtitle}
</p>

<h3 className="mt-3 text-4xl font-bold text-[#2B2520]">
  {t.works.commercial.title}
</h3>

<p className="mt-4 max-w-xl leading-8 whitespace-pre-line text-[#666]">
  {t.works.commercial.description}
</p>

    </div>

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
        slidesPerView: 1.2,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    className="pb-14"
  >

   {t.works.commercial.items.map((work, i) => (

      <SwiperSlide key={work.title}>

        <div
  onClick={() => {
  setSlides(
  commercialImages.map((image) => ({
    src: image,
  }))
);
  setIndex(i);
  setOpen(true);
}}
  className="cursor-pointer"
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

<section className="mt-28">

 <h3 className="text-center text-3xl font-bold text-[#2B2520]">
  {t.works.model.title}
</h3>

<p className="mt-4 text-center text-[#666]">
  {t.works.model.description}
</p>

  <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(43,37,32,0.12)]">

    <video
  src="/videos/kokoro.mp4"
  controls
  autoPlay
  muted
  loop
  className="w-full"
/>

  </div>

</section>
<Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  slides={slides}
/>

      </Container>
    </section>
  );
}