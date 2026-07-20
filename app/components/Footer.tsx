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
      <Container className="max-w-[1080px]">

        {/* Top */}
        <div className="grid gap-10 py-8 lg:grid-cols-[1.2fr_1fr]">

          {/* Left */}
          <div>

            <Image
              src="/images/logo-kokoro.png"
              alt="KOKORO Living"
              width={160}
              height={58}
              className="h-auto w-[160px]"
            />

            <h2 className="mt-3 whitespace-pre-line text-[24px] font-bold leading-tight md:text-4xl">
              <span className="hidden md:inline">
                {t.footer.title}
              </span>

              <span className="md:hidden">
                {t.footer.titleMobile}
              </span>
            </h2>

            <p className="mt-4 max-w-[520px] whitespace-pre-line text-[15px] leading-7 text-white/70 md:text-[16px]">
              <span className="hidden md:inline">
                {t.footer.description}
              </span>

              <span className="md:hidden">
                {t.footer.descriptionMobile}
              </span>
            </p>

          </div>
                    {/* Right */}
          <div className="flex flex-col justify-between pt-10">

            {/* Menu */}
            <div>

              <p className="text-sm font-semibold tracking-[0.35em] text-[#B8895A]">
                {t.footer.menu}
              </p>

              <nav className="mt-6 grid gap-4">

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

            {/* Access */}
            <div className="mt-12">

              <p className="mb-1 text-sm font-semibold tracking-[0.35em] text-[#B8895A]">
  ACCESS
</p>

<p className="mb-3 text-xs text-white/50">
  SUNOKI VIETNAM
</p>

              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3113403679454!2d106.68819007451735!3d10.78744935899135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f32fc8bbe1d%3A0xc96e50713a390253!2zMTQ2LzE5IFbDtSBUaOG7iyBTw6F1LCBYdcOibiBIw7JhLCBI4buTIENow60gTWluaCwg44OZ44OI44OK44Og!5e0!3m2!1sja!2s!4v1784530862606!5m2!1sja!2s"
                  className="h-[240px] w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />

              </div>

            </div>

          </div>

        </div>
                {/* Bottom */}
        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 py-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Contact Info */}
         <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/60">

  <p>
  <span className="hidden md:inline">
    📍 Số 146/19 Võ Thị Sáu, Phường Xuân Hòa, TP Hồ Chí Minh
  </span>

  <span className="md:hidden">
    📍 Số 146/19 Võ Thị Sáu, Phường Xuân Hòa,<br />
    TP Hồ Chí Minh
  </span>
</p>

  <p>✉ sunoki.vietnam@gmail.com</p>

  <p>☎ 0909888243</p>

</div>

          {/* Copyright */}
          <div className="text-sm text-white/40 lg:text-right">

            <p>
              © 2026 KOKORO Living by SUNOKI VIETNAM
            </p>

            <p className="mt-2 text-white/25">
              All Rights Reserved.
            </p>

          </div>

        </div>
              </Container>
    </footer>
  );
}