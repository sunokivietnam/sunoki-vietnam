"use client";

import { useLanguage } from "./LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = t.reviews.items;

  return (
    <section
  id="testimonials"
  className="bg-white py-12 md:py-16"
>
  <div className="mx-auto max-w-7xl px-6">
      <h2 className="text-center text-[28px] leading-[1.15] font-bold text-[#2B2520] md:text-[36px]">
        {t.reviews.title}
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-center text-[14px] leading-7 md:text-[15px] text-[#666]">
        {t.reviews.description}
      </p>

      <div className="mt-8 grid gap-5 md:mt-10 md:gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-[18px] bg-white p-5 md:p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-3 text-[20px] tracking-[2px] text-[#D89A2B]">
              ★★★★★
            </div>

            <p className="min-h-[95px] text-[14px] leading-7 md:min-h-[110px] md:text-[15px] text-[#555]">
              「{review.comment}」
            </p>

            <div className="mt-5 border-t border-[#E8E1D7] pt-4">
              <p className="text-[15px] md:text-[16px] font-bold text-[#2B2520]">
                {review.name}
              </p>

              <p className="mt-1 text-[13px] text-[#888]">
                {review.area}
              </p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}