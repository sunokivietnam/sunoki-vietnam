"use client";

import { useLanguage } from "./LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = t.reviews.items;

  return (
    <section
  id="testimonials"
  className="bg-white py-10 md:py-14"
>
  <div className="mx-auto max-w-6xl px-6">
      <p className="mb-3 text-center text-[11px] font-semibold tracking-[0.34em] text-[#B8895A]">
  {t.reviews.subtitle}
</p>

<h2 className="text-center text-[28px] leading-[1.15] font-bold text-[#2B2520] md:text-[36px]">
  {t.reviews.title}
</h2>

      <p className="mx-auto mt-3 max-w-2xl text-center whitespace-pre-line text-[14px] leading-8 md:text-[14px] text-[#666]">
  <span className="hidden md:inline">
    {t.reviews.description}
  </span>

  <span className="md:hidden">
    {t.reviews.descriptionMobile}
  </span>
</p>

      <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-[18px] bg-white p-4 md:p-5 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="mb-2 md:mb-3 text-[18px] tracking-[2px] text-[#D89A2B]">
              ★★★★★
            </div>

            <p className="min-h-[72px] md:min-h-[76px] text-[14px] leading-8 md:text-[14px] text-[#555]">
              「{review.comment}」
            </p>

            <div className="mt-3 md:mt-4 border-t border-[#E8E1D7] pt-3 md:pt-4">
              <p className="text-[14px] md:text-[16px] font-bold text-[#2B2520]">
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