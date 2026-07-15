"use client";

import Image from "next/image";
import Container from "./ui/Container";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navigation = [
    { label: t.nav.company, href: "#about" },
    { label: t.nav.service, href: "#service" },
    { label: t.nav.works, href: "#works" },
    { label: t.nav.process, href: "#process" },
    { label: t.reviews.title, href: "#testimonials" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2A1F18] to-[#1A120E] text-white">

      {/* Footerだけ少し狭くして全体バランスを合わせる */}
      <Container className="max-w-[1080px]">

        {/* Top */}
       <div className="grid gap-8 border-b border-white/10 py-5 lg:grid-cols-[1.8fr_1fr]">

          {/* Left */}
          <div>

            <Image
              src="/images/logo-kokoro.png"
              alt="KOKORO Living"
             width={160}
height={58}
className="h-auto w-[160px]"
            />

            <h2 className="mt-2 whitespace-pre-line text-[28px] font-bold leading-tight md:text-4xl">
  <span className="hidden md:inline">
    {t.footer.title}
  </span>

  <span className="md:hidden">
    {t.footer.titleMobile}
  </span>
</h2>

            <p className="mt-4 max-w-[560px] whitespace-pre-line text-[15px] leading-7 md:text-[16px] md:leading-7 text-white/70">
  <span className="hidden md:inline">
  {t.footer.description}
</span>

<span className="md:hidden">
  {t.footer.descriptionMobile}
</span>
</p>

          </div>

          {/* Right */}
          <div className="lg:pl-10 lg:pt-8">

            <p className="text-sm font-semibold tracking-[0.35em] text-[#B8895A]">
              {t.footer.menu}
            </p>

            <nav className="mt-6 flex flex-col gap-4">

              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition duration-300 hover:text-[#B8895A]"
                >
                  {item.label}
                </a>
              ))}

            </nav>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-col gap-3 text-sm text-white/60 lg:flex-row lg:gap-10">

            <p>
              📍 Số 146/19 Võ Thị Sáu, Phường Xuân Hòa,
              TP Hồ Chí Minh, Việt Nam
            </p>

            <p>✉ sunoki.vietnam@gmail.com</p>

            <p>☎ 0909888243</p>

          </div>

          <div className="text-sm text-white/50 lg:text-right">

            <p>
              © 2026 KOKORO Living by SUNOKI VIETNAM
            </p>

            <p className="mt-2 text-white/30">
              All Rights Reserved.
            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}