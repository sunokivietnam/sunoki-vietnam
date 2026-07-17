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
    vi: "Nhà hàng",
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
      className="bg-[#FAF7F3] py-10 md:py-12"
    >
      <div className="mx-auto max-w-[1050px] px-6">

        <div className="text-center">

          <p className="text-[10px] font-semibold tracking-[0.34em] text-[#B8895A]">
            ESTIMATOR
          </p>

          <h2 className="mt-2 text-[28px] font-bold text-[#2B2520] md:text-[36px]">
            {language === "ja"
              ? "仕様シミュレーター"
              : "Ước tính chi phí thi công"}
          </h2>

          <p className="mx-auto mt-3 max-w-lg whitespace-pre-line text-[14px] leading-6 text-[#666]">
  {language === "ja"
    ? `ご希望の仕様を選択して、
そのまま無料相談へ進めます。`
    : `Vui lòng lựa chọn các thông tin bên dưới
để nhận báo giá miễn phí.`}
</p>

        </div>

        <div className="mt-8 rounded-[18px] bg-white p-5 shadow-md md:p-7">

          {/* ===== 上段 ===== */}

          <div className="grid gap-6 lg:grid-cols-2">            {/* 建物タイプ */}

            <div>

              <h3 className="mb-4 text-base font-bold text-[#2B2520]">
                {language === "ja" ? "建物タイプ" : "Loại công trình"}
              </h3>

              <div className="grid gap-2 grid-cols-3">

                {buildingTypes.map((item) => {

                  const active = building === item.value;

                  return (

                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setBuilding(item.value)}
                      className={`rounded-[14px] border px-3 py-3 transition-all duration-300 ${
                        active
                          ? "border-[#B8895A] bg-[#B8895A] text-white shadow-md"
                          : "border-[#E6DED2] bg-white hover:border-[#B8895A]"
                      }`}
                    >

                      <p className="text-[15px] font-semibold">
                        {language === "ja" ? item.ja : item.vi}
                      </p>

                    </button>

                  );

                })}

              </div>

            </div>

            {/* 建築面積 */}

            <div>

              <div className="flex items-center justify-between">

                <h3 className="text-base font-bold text-[#2B2520]">
                  {language === "ja" ? "建築面積" : "Diện tích"}
                </h3>

                <span className="text-xl font-bold text-[#B8895A]">
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
                className="mt-4 w-full accent-[#B8895A]"
              />

            </div>

          </div>

          {/* ===== 下段 ===== */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">            {/* グレード */}

            <div>

              <h3 className="mb-4 text-base font-bold text-[#2B2520]">
                {language === "ja"
                  ? "グレード"
                  : "Cấp độ hoàn thiện"}
              </h3>

              <div className="grid gap-2 grid-cols-2">

                {grades.map((item) => {

                  const active = grade === item;

                  return (

                    <button
                      key={item}
                      type="button"
                      onClick={() => setGrade(item)}
                      className={`rounded-[14px] border px-3 py-3 transition-all duration-300 ${
                        active
                          ? "border-[#B8895A] bg-[#B8895A] text-white shadow-md"
                          : "border-[#E6DED2] bg-white hover:border-[#B8895A]"
                      }`}
                    >

                      <p className="text-[14px] font-semibold tracking-[0.04em]">
                        {item}
                      </p>

                    </button>

                  );

                })}

              </div>

            </div>

            {/* オプション */}

            <div>

              <h3 className="mb-4 text-base font-bold text-[#2B2520]">
                {language === "ja"
                  ? "オプション"
                  : "Tùy chọn"}
              </h3>

              <div className="grid gap-2 grid-cols-2">

                {options.map((item) => {

                  const active = selectedOptions.includes(item.value);

                  return (

                    <button
                      key={item.value}
                      type="button"
                      onClick={() => toggleOption(item.value)}
                      className={`flex items-center justify-between rounded-[14px] border px-3 py-3 transition-all duration-300 ${
                        active
                          ? "border-[#B8895A] bg-[#B8895A] text-white shadow-md"
                          : "border-[#E6DED2] bg-white hover:border-[#B8895A]"
                      }`}
                    >

                      <span className="text-[14px] font-semibold">
                        {language === "ja"
                          ? item.ja
                          : item.vi}
                      </span>

                      <span className="text-base font-bold">
                        {active ? "✓" : "+"}
                      </span>

                    </button>

                  );

                })}

              </div>

            </div>

          </div>

          {/* ===== 選択内容 ===== */}

          <div className="mt-8 rounded-[16px] bg-[#2B2520] p-5 text-white">

            <p className="text-[11px] font-semibold tracking-[0.30em] text-[#D8B07A]">
              {language === "ja"
                ? "SELECTED CONTENT"
                : "THÔNG TIN ĐÃ LỰA CHỌN"}
            </p>

            <div className="mt-4 rounded-[12px] border border-white/10 bg-white/5 p-4">

              <div className="flex items-center justify-between">

                <span className="text-[14px] text-white/70">
                  {language === "ja"
                    ? "建物タイプ"
                    : "Loại công trình"}
                </span>

                <span className="text-[14px] font-semibold">
                  {
                    buildingTypes.find(
                      (item) => item.value === building
                    )?.[language === "ja" ? "ja" : "vi"]
                  }
                </span>

              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-[14px] text-white/70">
                  {language === "ja"
                    ? "建築面積"
                    : "Diện tích"}
                </span>

                <span className="text-[14px] font-semibold">
                  {area}㎡
                </span>

              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-[14px] text-white/70">
                  {language === "ja"
                    ? "グレード"
                    : "Cấp độ"}
                </span>

                <span className="text-[14px] font-semibold">
                  {grade}
                </span>

              </div>              <div className="mt-4">

                <p className="mb-2 text-[14px] text-white/70">
                  {language === "ja"
                    ? "選択したオプション"
                    : "Tùy chọn đã chọn"}
                </p>

                <div className="flex flex-wrap gap-2">

                  {selectedOptions.length === 0 ? (

                    <span className="rounded-full border border-white/20 px-3 py-1 text-[12px] text-white/60">

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
                          className="rounded-full bg-[#B8895A] px-3 py-1 text-[12px] font-semibold"
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

          <div className="mt-5 rounded-[12px] bg-[#FAF7F3] p-4">

            <p className="whitespace-pre-line text-[13px] leading-6 text-[#666]">

              {language === "ja"
                ? `このシミュレーターはご希望の仕様を整理するためのものです。
正式なお見積りは、現地調査・ご要望・仕様を確認したうえでご案内いたします。`
                : `Công cụ này chỉ mang tính tham khảo.
Báo giá chính thức sẽ được gửi sau khi khảo sát thực tế và trao đổi chi tiết về yêu cầu của bạn.`}

            </p>
s
          </div>

          {/* CTA */}

          <div className="mt-6 flex justify-center">

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
              className="rounded-full bg-[#B8895A] px-6 py-2 text-[14px] font-semibold text-white transition duration-300 hover:bg-[#A97A4C]"
            >
              {language === "ja"
                ? "この内容で無料相談する"
                : "Gửi yêu cầu tư vấn miễn phí"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}