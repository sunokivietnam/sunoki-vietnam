"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const buildingTypes = [
  {
    value: "house",
    ja: "住宅",
    vi: "Nhà ở",
  },
  {
    value: "shop",
    ja: "店舗",
    vi: "Cửa hàng",
  },
  {
    value: "office",
    ja: "オフィス",
    vi: "Văn phòng",
  },
];

const grades = [
  "STANDARD",
  "PREMIUM",
  "LUXURY",
  "SIGNATURE",
];

const options = [
  {
    value: "furniture",
    ja: "家具",
    vi: "Nội thất",
  },
  {
    value: "lighting",
    ja: "照明",
    vi: "Chiếu sáng",
  },
  {
    value: "washitsu",
    ja: "和室",
    vi: "Phòng kiểu Nhật",
  },
  {
    value: "garden",
    ja: "日本庭園",
    vi: "Vườn Nhật",
  },
  {
    value: "smart",
    ja: "スマートホーム",
    vi: "Nhà thông minh",
  },
];

export default function Estimator() {
  const { language } = useLanguage();

  const [building, setBuilding] = useState("house");
  const [area, setArea] = useState(120);
  const [grade, setGrade] = useState("STANDARD");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <section
      id="estimator"
      className="bg-[#FAF7F3] py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="text-xs font-semibold tracking-[0.35em] text-[#B8895A]">
            ESTIMATOR
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#2B2520] md:text-5xl">
            {language === "ja"
              ? "仕様シミュレーター"
              : "Trình mô phỏng công trình"}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#666]">
            {language === "ja"
              ? "ご希望の仕様を選択して、そのまま無料相談へ進めます。"
              : "Chọn thông tin mong muốn và gửi yêu cầu tư vấn miễn phí."}
          </p>

        </div>

        <div className="mt-16 rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(43,37,32,0.08)] md:p-14">          {/* 建物タイプ */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-[#2B2520]">
              {language === "ja" ? "建物タイプ" : "Loại công trình"}
            </h3>

            <div className="grid gap-4 md:grid-cols-3">

              {buildingTypes.map((item) => {

                const active = building === item.value;

                return (

                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setBuilding(item.value)}
                    className={`rounded-2xl border p-6 transition ${
                      active
                        ? "border-[#B8895A] bg-[#B8895A] text-white"
                        : "border-[#E6DED2] bg-white hover:border-[#B8895A]"
                    }`}
                  >

                    <p className="text-lg font-bold">
                      {language === "ja" ? item.ja : item.vi}
                    </p>

                  </button>

                );

              })}

            </div>

          </div>

          {/* 建築面積 */}

          <div className="mt-16">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-bold text-[#2B2520]">
                {language === "ja" ? "建築面積" : "Diện tích"}
              </h3>

              <span className="text-3xl font-bold text-[#B8895A]">
                {area}㎡
              </span>

            </div>

            <input
              type="range"
              min={30}
              max={500}
              step={5}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-8 w-full accent-[#B8895A]"
            />

          </div>

          {/* グレード */}

          <div className="mt-16">

            <h3 className="mb-6 text-xl font-bold text-[#2B2520]">
              {language === "ja" ? "グレード" : "Cấp độ hoàn thiện"}
            </h3>

            <div className="grid gap-4 md:grid-cols-4">

              {grades.map((item) => {

                const active = grade === item;

                return (

                  <button
                    key={item}
                    type="button"
                    onClick={() => setGrade(item)}
                    className={`rounded-2xl border p-6 transition ${
                      active
                        ? "border-[#B8895A] bg-[#B8895A] text-white"
                        : "border-[#E6DED2] bg-white hover:border-[#B8895A]"
                    }`}
                  >

                    <p className="text-lg font-bold tracking-[0.08em]">
                      {item}
                    </p>

                  </button>

                );

              })}

            </div>

          </div>          {/* オプション */}

          <div className="mt-16">

            <h3 className="mb-6 text-xl font-bold text-[#2B2520]">
              {language === "ja" ? "オプション" : "Tùy chọn"}
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              {options.map((item) => {

                const active = selectedOptions.includes(item.value);

                return (

                  <button
                    key={item.value}
                    type="button"
                    onClick={() => toggleOption(item.value)}
                    className={`flex items-center justify-between rounded-2xl border p-5 transition ${
                      active
                        ? "border-[#B8895A] bg-[#B8895A] text-white"
                        : "border-[#E6DED2] bg-white hover:border-[#B8895A]"
                    }`}
                  >

                    <span className="font-semibold">
                      {language === "ja" ? item.ja : item.vi}
                    </span>

                    <span className="text-2xl font-bold">
                      {active ? "✓" : "+"}
                    </span>

                  </button>

                );

              })}

            </div>

          </div>

          {/* 選択内容 */}

          <div className="mt-20 rounded-[28px] bg-[#2B2520] p-10 text-white">

            <p className="text-sm font-semibold tracking-[0.35em] text-[#D8B07A]">
              {language === "ja"
                ? "SELECTED CONTENT"
                : "THÔNG TIN ĐÃ CHỌN"}
            </p>

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">

              <div className="flex items-center justify-between">

                <span className="text-white/70">
                  {language === "ja"
                    ? "建物タイプ"
                    : "Loại công trình"}
                </span>

                <span className="font-semibold">
                  {
                    buildingTypes.find(
                      (item) => item.value === building
                    )?.[language === "ja" ? "ja" : "vi"]
                  }
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-white/70">
                  {language === "ja"
                    ? "建築面積"
                    : "Diện tích"}
                </span>

                <span className="font-semibold">
                  {area}㎡
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-white/70">
                  {language === "ja"
                    ? "グレード"
                    : "Cấp độ"}
                </span>

                <span className="font-semibold">
                  {grade}
                </span>

              </div>              <div className="mt-6">

                <p className="mb-3 text-white/70">
                  {language === "ja"
                    ? "選択したオプション"
                    : "Tùy chọn đã chọn"}
                </p>

                <div className="flex flex-wrap gap-2">

                  {selectedOptions.length === 0 ? (

                    <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/60">

                      {language === "ja"
                        ? "選択なし"
                        : "Chưa chọn"}

                    </span>

                  ) : (

                    options
                      .filter((item) =>
                        selectedOptions.includes(item.value)
                      )
                      .map((item) => (
                        <span
                          key={item.value}
                          className="rounded-full bg-[#B8895A] px-4 py-2 text-sm font-semibold"
                        >
                          {language === "ja"
                            ? item.ja
                            : item.vi}
                        </span>
                      ))

                  )}

                </div>

              </div>

            </div>

          </div>

          {/* 注意書き */}

          <div className="mt-10 rounded-2xl bg-[#FAF7F3] p-6">

            <p className="whitespace-pre-line text-sm leading-8 text-[#666]">

              {language === "ja"
                ? `このシミュレーターはご希望の仕様を整理するためのものです。

正式なお見積りは、現地調査・ご要望・仕様を確認したうえでご案内いたします。`
                : `Công cụ này giúp tổng hợp yêu cầu của bạn.

Báo giá chính thức sẽ được gửi sau khi khảo sát và tư vấn chi tiết.`}

            </p>

          </div>

          {/* CTA */}

          <div className="mt-12 flex justify-center">

            <button
              type="button"
              onClick={() => {
                const estimate = {
                  building,
                  area,
                  grade,
                  options: selectedOptions,
                };

                localStorage.setItem(
                  "estimateData",
                  JSON.stringify(estimate)
                );

                window.location.href = "#contact";
              }}
              className="rounded-full bg-[#B8895A] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#A97A4C]"
            >
              {language === "ja"
                ? "この内容で無料相談する"
                : "Tư vấn miễn phí với nội dung này"}
            </button>

          </div>        </div>

      </div>

    </section>
  );
}