"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ChevronDown, Globe, ArrowUpRight } from "lucide-react";
import { INSTITUTIONS } from "@/data/ges-data";

export default function Header() {
  const { lang, setLang, isRTL, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [institutionsDropdown, setInstitutionsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", nameAr: "الرئيسية", href: "/" },
    { name: "About GES", nameAr: "عن المجموعة", href: "/about" },
    {
      name: "Our Institutions",
      nameAr: "مؤسساتنا التعليمية",
      href: "/institutions",
      dropdown: true,
    },
    { name: "Educational Approach", nameAr: "نهجنا التعليمي", href: "/philosophy" },
    { name: "News & Insights", nameAr: "الأخبار والمستجدات", href: "/news" },
    { name: "Careers", nameAr: "الوظائف", href: "/careers" },
    { name: "Contact", nameAr: "اتصل بنا", href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#102D46]/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-[#C6A477]/20"
          : "bg-[#102D46] text-white py-4.5 border-b border-white/10"
      }`}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C6A477]">
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C6A477] to-[#A58356] flex items-center justify-center font-serif text-white font-bold text-xl tracking-wider shadow-md">
            G
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-lg font-normal text-white group-hover:text-[#C6A477] transition-colors leading-none">
              GLOBAL EDUCATION
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A477] mt-1 font-sans font-medium">
              SERVICES • OMAN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setInstitutionsDropdown(true)}
                  onMouseLeave={() => setInstitutionsDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 text-[13.5px] uppercase tracking-wider font-medium hover:text-[#C6A477] transition-colors py-2 ${
                      isActive || pathname.startsWith("/institutions")
                        ? "text-[#C6A477] font-semibold"
                        : "text-white/90"
                    }`}
                  >
                    {t(link.name, link.nameAr)}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-[#C6A477]" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full ${
                      isRTL ? "right-0" : "left-0"
                    } w-72 bg-[#0A1C2C] border border-[#C6A477]/30 shadow-2xl rounded-sm p-3 transition-all duration-200 ${
                      institutionsDropdown
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="text-[11px] uppercase tracking-widest text-[#C6A477] px-3 py-1 font-semibold border-b border-white/10 mb-2">
                      {t("Educational Network", "الشبكة التعليمية")}
                    </div>
                    {INSTITUTIONS.map((inst) => (
                      <Link
                        key={inst.id}
                        href={`/institutions/${inst.slug}`}
                        className="block px-3 py-2.5 rounded-sm hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="text-sm font-medium text-white group-hover/item:text-[#C6A477] flex items-center justify-between">
                          <span>{t(inst.name, inst.nameAr)}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#C6A477]" />
                        </div>
                        <div className="text-xs text-white/60 mt-0.5">
                          {t(inst.location, inst.locationAr)}
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-white/10">
                      <Link
                        href="/institutions"
                        className="block text-center text-xs text-[#C6A477] hover:underline font-medium py-1"
                      >
                        {t("View All Institutions →", "عرض جميع المؤسسات ←")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13.5px] uppercase tracking-wider font-medium hover:text-[#C6A477] transition-colors py-2 relative ${
                  isActive ? "text-[#C6A477] font-semibold" : "text-white/90"
                }`}
              >
                {t(link.name, link.nameAr)}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A477]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider text-white/90 hover:text-white border border-white/20 hover:border-[#C6A477] rounded-sm transition-colors focus:ring-2 focus:ring-[#C6A477]"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#C6A477]" />
            <span className="font-semibold">{lang === "en" ? "عربي" : "English"}</span>
          </button>

          {/* Primary CTA */}
          <Link
            href="/institutions"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#C6A477] to-[#A58356] hover:from-[#DFC4A1] hover:to-[#C6A477] text-[#102D46] rounded-sm shadow-md transition-all duration-200 flex items-center gap-2 group"
          >
            <span>{t("Explore Institutions", "استكشف مؤسساتنا")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-xs border border-white/20 text-[#C6A477] rounded-sm"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#C6A477] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1C2C] border-b border-[#C6A477]/30 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 ${
                  pathname === link.href ? "text-[#C6A477]" : "text-white"
                }`}
              >
                {t(link.name, link.nameAr)}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/institutions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 bg-[#C6A477] text-[#102D46] font-semibold text-sm uppercase tracking-wider rounded-sm shadow-sm"
              >
                {t("Explore Our Institutions", "استكشف مؤسساتنا")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
