"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { useLanguage } from "./LanguageContext";

const buildingLabels = {
  house: {
    ja: "住宅",
    vi: "Nhà ở",
  },
  shop: {
    ja: "店舗",
    vi: "Cửa hàng",
  },
  office: {
    ja: "オフィス",
    vi: "Văn phòng",
  },
};

const optionLabels = {
  furniture: {
    ja: "家具",
    vi: "Nội thất",
  },
  lighting: {
    ja: "照明",
    vi: "Chiếu sáng",
  },
  washitsu: {
    ja: "和室",
    vi: "Phòng kiểu Nhật",
  },
  garden: {
    ja: "日本庭園",
    vi: "Vườn Nhật",
  },
  smart: {
    ja: "スマートホーム",
    vi: "Nhà thông minh",
  },
};

export default function Contact() {
  const { language } = useLanguage();

  const form = useRef<HTMLFormElement>(null);

  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("estimateData");

    if (!saved) return;

    const estimate = JSON.parse(saved);

    const text =
      language === "ja"
        ? `【仕様シミュレーター】

建物タイプ：${estimate.building}

建築面積：${estimate.area}㎡

グレード：${estimate.grade}

オプション
${
  estimate.options.length > 0
    ? estimate.options.map((v: string) => `✓ ${v}`).join("\n")
    : "なし"
}

----------------------------

追加で相談したい内容をご記入ください。

`
        : `【Thông tin mô phỏng】

Loại công trình: ${
  buildingLabels[
    estimate.building as keyof typeof buildingLabels
  ]?.[language]
}

Diện tích: ${estimate.area}㎡

Cấp độ: ${estimate.grade}

Tùy chọn
${
  estimate.options.length > 0
    ? estimate.options
        .map(
          (v: string) =>
            `✓ ${
              optionLabels[
                v as keyof typeof optionLabels
              ]?.[language]
            }`
        )
        .join("\n")
    : "Không có"
}

----------------------------

Vui lòng nhập thêm yêu cầu của bạn.

`;

    setMessage(text);
  }, [language]);  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
  setSent(true);
  form.current?.reset();
  localStorage.removeItem("estimateData");
})
.catch((error) => {
  console.log("EmailJS Error:", error);
  console.log("Status:", error?.status);
  console.log("Text:", error?.text);

  alert(
    `Status: ${error?.status}\nText: ${error?.text}`
  );
});

  return (
    <section
      id="contact"
      className="bg-[#FAF7F3] py-10 md:py-12"
    >
      <Container>

        <SectionTitle
          subtitle="CONTACT"
          title={
            language === "ja"
              ? "お問い合わせ"
              : "Liên hệ"
          }
          description={
            language === "ja"
              ? "住まいづくりのご相談からお見積りまで、お気軽にお問い合わせください。"
              : "Liên hệ với chúng tôi để được tư vấn và báo giá."
          }
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <div>

            <h3 className="text-[22px] md:text-[30px] font-bold leading-tight whitespace-pre-line text-[#2B2520]">

              {language === "ja"
                ? "理想の空間づくりを、\n一緒にはじめませんか。"
                : "Hãy cùng chúng tôi\nkiến tạo không gian lý tưởng."}

            </h3>

            <p className="mt-4 whitespace-pre-line text-[14px] leading-7 text-[#666]">

              {language === "ja"
                ? `新築・リフォーム・店舗設計・水まわりなど、
小さなご相談から大規模な施工まで承ります。

日本品質の設計・施工で、
ベトナムで安心して暮らせる空間をご提案します。`
                : `Từ nhà ở, cải tạo, cửa hàng đến văn phòng,
chúng tôi luôn sẵn sàng hỗ trợ.

Mang đến không gian sống chất lượng Nhật Bản
ngay tại Việt Nam.`}

            </p>

            <div className="mt-8 space-y-4">

              <div>

                <p className="text-[11px] font-semibold tracking-[0.30em] text-[#B8895A]">
                  PHONE
                </p>

                <p className="mt-2 text-lg font-semibold text-[#2B2520]">
                  0909888243
                </p>

              </div>

              <div>

                <p className="text-[11px] font-semibold tracking-[0.30em] text-[#B8895A]">
                  EMAIL
                </p>

                <p className="mt-2 text-base text-[#2B2520] break-all">
                  sunoki.vietnam@gmail.com
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[18px] bg-white p-5 shadow-md md:p-6">

            {sent ? (            

              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B8895A]/10 text-4xl text-[#B8895A]">
                  ✓
                </div>

                <h3 className="text-[22px] font-bold text-[#2B2520]">

                  {language === "ja"
                    ? "お問い合わせありがとうございます"
                    : "Cảm ơn bạn đã liên hệ"}

                </h3>

                <p className="mt-5 max-w-md whitespace-pre-line text-[15px] leading-7 text-[#666]">

                  {language === "ja"
                    ? `内容を確認のうえ、
通常1〜2営業日以内に
担当者よりご返信いたします。

お急ぎの場合は、
お電話でもお気軽にご連絡ください。`
                    : `Chúng tôi sẽ kiểm tra nội dung
và phản hồi trong vòng 1–2 ngày làm việc.

Nếu cần gấp,
xin vui lòng liên hệ qua điện thoại.`}

                </p>

              </div>

            ) : (

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-3"
              >               <div className="grid gap-4 md:grid-cols-2">

  <div>

    <label className="mb-2 block text-[13px] font-medium text-[#2B2520]">
      {language === "ja" ? "お名前" : "Họ và tên"}
    </label>

    <input
      name="user_name"
      type="text"
      required
      className="w-full rounded-xl border border-[#DDD] px-4 py-2 text-[14px] outline-none transition focus:border-[#B8895A]"
    />

  </div>

  <div>

    <label className="mb-2 block text-[13px] font-medium text-[#2B2520]">
      {language === "ja" ? "メールアドレス" : "Email"}
    </label>

    <input
      name="user_email"
      type="email"
      required
      className="w-full rounded-xl border border-[#DDD] px-4 py-2 text-[14px] outline-none transition focus:border-[#B8895A]"
    />

  </div>

</div>

                <div>

  <label className="mb-2 block text-[13px] font-medium text-[#2B2520]">
    {language === "ja" ? "電話番号" : "Số điện thoại"}
  </label>

  <input
    name="user_phone"
    type="tel"
    className="w-full rounded-xl border border-[#DDD] px-4 py-2 text-[14px] outline-none transition focus:border-[#B8895A]"
  />

</div>
                <div>

                  <label className="mb-2 block text-[14px] font-medium text-[#2B2520]">
                    {language === "ja" ? "ご相談内容" : "Nội dung"}
                  </label>

                  <textarea
  name="message"
  rows={6}
  required
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="min-h-[180px] w-full resize-none rounded-xl border border-[#DDD] px-4 py-2 text-[14px] leading-6 outline-none transition focus:border-[#B8895A]"
/>

                </div>

                <div className="pt-2">

                  <Button type="submit">
                    {language === "ja"
                      ? "お問い合わせを送信"
                      : "Gửi yêu cầu"}
                  </Button>

                </div>

                            </form>

            )}

          </div>

        </div>

      </Container>

    </section>
  );
}