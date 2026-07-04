"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { useLanguage } from "./LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { label: t.nav.company, href: "#about" },
    { label: t.nav.service, href: "#service" },
    { label: t.nav.works, href: "#works" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl shadow-[0_8px_30px_rgba(43,37,32,0.08)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-28 items-center justify-between">

          <a
            href="#home"
            aria-label="KOKORO Living"
            onClick={closeMenu}
            className="-ml-4 flex translate-y-1 items-center"
          >
            <Image
              src="/images/logo-kokoro.png"
              alt="KOKORO Living by SUNOKI VIETNAM"
              width={180}
              height={70}
              priority
              className="h-auto w-[130px] -translate-y-1 md:w-[150px] md:-translate-y-1"
            />
          </a>
          {/* Mobile SUNOKI Logo */}
<div className="ml-auto mr-6 md:hidden">
  <Image
    src="/images/SUNOKI LOGO.png"
    alt="SUNOKI VIETNAM"
    width={70}
    height={25}
    className="h-auto w-[60px]"
  />
</div>

          <div className="hidden items-center gap-12 md:flex">

            <nav
              aria-label="Main navigation"
              className={`flex items-center gap-12 text-[14px] font-medium tracking-[0.18em] transition-colors duration-500 ${
                scrolled ? "text-[#2B2520]" : "text-white"
              }`}
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative transition-colors duration-300 hover:text-[#C69A6A]"
                >
                  {item.label}
                </a>
              ))}
            </nav>            <div className="flex items-center gap-2 text-sm font-semibold">

              <button
                type="button"
                onClick={() => setLanguage("ja")}
                className={`transition-colors ${
                  language === "ja"
                    ? "text-[#B8895A]"
                    : scrolled
                    ? "text-[#2B2520]"
                    : "text-white"
                }`}
              >
                JP
              </button>

              <span
                className={scrolled ? "text-[#2B2520]" : "text-white"}
              >
                |
              </span>

              <button
                type="button"
                onClick={() => setLanguage("vi")}
                className={`transition-colors ${
                  language === "vi"
                    ? "text-[#B8895A]"
                    : scrolled
                    ? "text-[#2B2520]"
                    : "text-white"
                }`}
              >
                VI
              </button>

            </div>

          </div>

          <button
            type="button"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex h-11 w-11 items-center justify-center transition-colors duration-300 md:hidden ${
              scrolled || menuOpen
                ? "text-[#2B2520]"
                : "text-white"
            }`}
          >
            <span className="relative block h-5 w-7">

              <span
                className={`absolute left-0 top-1 h-px w-7 bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-px w-7 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute bottom-1 left-0 h-px w-7 bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />

            </span>

          </button>

        </div>

      </Container>      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen
            ? "max-h-[520px] border-t border-[#E8E0D4] bg-white/95 shadow-[0_20px_50px_rgba(43,37,32,0.08)] backdrop-blur-2xl"
            : "max-h-0 bg-white/90"
        }`}
      >
        <Container>
          <nav
            aria-label="Mobile navigation"
            className="py-6"
          >
            <div className="flex flex-col divide-y divide-[#E8E0D4]">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-4 text-sm font-medium tracking-[0.18em] text-[#2B2520] transition-colors duration-300 hover:text-[#C69A6A]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setLanguage("ja");
                  closeMenu();
                }}
                className={`text-sm font-semibold transition-colors ${
                  language === "ja"
                    ? "text-[#B8895A]"
                    : "text-[#2B2520]"
                }`}
              >
                JP
              </button>

              <span className="text-[#999]">|</span>

              <button
                type="button"
                onClick={() => {
                  setLanguage("vi");
                  closeMenu();
                }}
                className={`text-sm font-semibold transition-colors ${
                  language === "vi"
                    ? "text-[#B8895A]"
                    : "text-[#2B2520]"
                }`}
              >
                VI
              </button>
            </div>

            <div className="pt-6">
              <Button href="#contact">
                {t.buttons.estimate}
              </Button>
            </div>

          </nav>
        </Container>
      </div>    </header>
  );
}