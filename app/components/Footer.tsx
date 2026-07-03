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
      <Container className="max-w-[1180px]">

        {/* Top */}
        <div className="grid gap-16 border-b border-white/10 py-12 lg:grid-cols-[1.8fr_1fr]">

          {/* Left */}
          <div>

            <Image
              src="/images/logo-kokoro.png"
              alt="KOKORO Living"
              width={220}
              height={80}
              className="h-auto w-[220px]"
            />

            <h2 className="mt-10 text-4xl font-bold leading-tight md:text-5xl">
              {t.footer.title}
            </h2>

            <p className="mt-8 max-w-[560px] whitespace-pre-line text-lg leading-9 text-white/70">
              {t.footer.description}
            </p>

          </div>

          {/* Right */}
          <div className="lg:pl-16 lg:pt-20">

            <p className="text-sm font-semibold tracking-[0.35em] text-[#B8895A]">
              {t.footer.menu}
            </p>

            <nav className="mt-8 flex flex-col gap-5">

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
        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">

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