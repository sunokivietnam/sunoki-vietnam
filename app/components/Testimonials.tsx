"use client";

import { useLanguage } from "./LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = t.reviews.items;

  return (
  <section
    id="testimonials"
    className="max-w-7xl mx-auto px-8 py-24"
  >

      <h2 className="text-4xl font-bold text-center mb-3">
        {t.reviews.title}
      </h2>

      <p className="text-center text-gray-500 mb-16">
       {t.reviews.description}
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
          >

            <div className="text-amber-500 text-2xl mb-4">
              ★★★★★
            </div>

            <p className="text-gray-600 leading-8 mb-6">
              「{review.comment}」
            </p>

            <div className="border-t pt-4">

              <p className="font-bold">
                {review.name}
              </p>

              <p className="text-sm text-gray-500">
                {review.area}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}