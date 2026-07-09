"use client";

import Image from "next/image";
import {
  Building2,
  Globe2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function SunokiGroup() {
  return (
    <section
      id="group"
      className="bg-[#FAF7F3] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* =========================
            Title
        ========================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="text-[11px] font-semibold tracking-[0.34em] text-[#B8895A]">
            SUNOKI GROUP
          </p>

          <h2 className="mt-3 text-[30px] font-bold leading-tight text-[#2B2520] md:text-[42px]">
            1963年から受け継ぐ
            <br />
            技術と品質を、ベトナムへ。
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#666]">
            日本で60年以上培ってきた施工技術と品質管理を受け継ぎ、
            ベトナムでも安心して任せられる空間づくりをご提供します。
          </p>

        </div>

        {/* =========================
            Group Cards
        ========================= */}

        <div className="relative grid gap-6 lg:grid-cols-2">

          {/* Arrow */}

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">

            <ArrowRight
              size={42}
              strokeWidth={1.6}
              className="text-[#B8895A]/80"
            />

          </div>

          {/* =========================
              JAPAN
          ========================= */}

          <article className="overflow-hidden rounded-[22px] border border-[#E8DED2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="relative aspect-[16/10]">

              <Image
                src="/images/sunoki-japan.jpg"
                alt="SUNOKI JAPAN"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            <div className="p-8">

              <div className="flex items-center gap-2">

                <Building2
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#B8895A]"
                />

                <p className="text-[11px] font-semibold tracking-[0.28em] text-[#B8895A]">
                  JAPAN
                </p>

              </div>

              <h3 className="mt-3 text-[30px] font-bold text-[#2B2520]">
                SUNOKI JAPAN
              </h3>

              <p className="mt-2 text-[12px] font-semibold tracking-[0.18em] text-[#B8895A]">
                SINCE 1963
              </p>

              <ul className="mt-8 space-y-4 text-[15px] leading-7 text-[#555]">

                <li>✓ 軽鉄・ボード工事専門</li>

                <li>✓ 日本全国で豊富な施工実績</li>

                <li>✓ 60年以上の技術と品質管理</li>

                <li>✓ 日本品質をベトナムへ継承</li>

              </ul>

            </div>

          </article>

          {/* =========================
              VIETNAM
          ========================= */}

          <article className="overflow-hidden rounded-[22px] border border-[#E8DED2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="relative aspect-[16/10]">

              <Image
                src="/images/sunoki-vietnam.jpg"
                alt="SUNOKI VIETNAM"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            <div className="p-8">

              <div className="flex items-center gap-2">

                <Globe2
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#B8895A]"
                />

                <p className="text-[11px] font-semibold tracking-[0.28em] text-[#B8895A]">
                  VIETNAM
                </p>

              </div>

              <h3 className="mt-3 text-[30px] font-bold text-[#2B2520]">
                SUNOKI VIETNAM
              </h3>

              <p className="mt-2 text-[12px] font-semibold tracking-[0.18em] text-[#B8895A]">
                SINCE 2018
              </p>

              <ul className="mt-8 space-y-4 text-[15px] leading-7 text-[#555]">

                <li>✓ 住宅・店舗・オフィス内装</li>

                <li>✓ 設計・施工をワンストップ対応</li>

                <li>✓ 日本品質の空間づくり</li>

                <li>✓ ベトナムで安心の施工体制</li>

              </ul>

            </div>

          </article>

        </div>        {/* =========================
            Official Website
        ========================= */}

        <div className="mt-12 rounded-[22px] border border-[#E8DED2] bg-white px-8 py-8 text-center shadow-sm">

          <p className="text-[18px] font-bold text-[#2B2520]">
            日本本社について
          </p>

          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-7 text-[#666]">
            1963年創業。
            軽鉄・ボード工事を専門とし、日本全国で豊富な施工実績を
            積み重ねてきたSUNOKI JAPANの詳細をご覧いただけます。
          </p>

          <a
            href="https://www.sun-oki.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-[#B8895A] px-8 text-sm font-semibold tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A77749] hover:shadow-lg"
          >
            日本本社サイトを見る

            <ExternalLink
              size={18}
              strokeWidth={2}
            />

          </a>

        </div>

      </div>
    </section>
  );
}