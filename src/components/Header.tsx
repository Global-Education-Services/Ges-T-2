"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ChevronDown, Globe, ArrowUpRight } from "lucide-react";
import { INSTITUTIONS } from "@/data/ges-data";

export default function Header() {
  const { lang, setLang, isRTL, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileInstitutionsOpen, setMobileInstitutionsOpen] = useState(false);
  const [institutionsDropdown, setInstitutionsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileInstitutionsOpen(false);
  }, [pathname]);

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
          ? "bg-[#102D46]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C6A477]/30"
          : "bg-[#102D46] py-4 border-b border-white/10"
      }`}
    >
      <div className="editorial-container flex items-center justify-between gap-4">
        {/* Brand Logo with Official GES Quality Education Mark */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C6A477] rounded-sm py-1"
          aria-label="Global Education Services LLC Homepage"
        >
          <div className="bg-white px-2.5 py-1.5 rounded-sm shadow-sm flex items-center justify-center shrink-0 border border-white/20 group-hover:border-[#C6A477] transition-colors">
            <Image
              src="/ges-logo-internal.png"
              alt="GES Quality Education Logo"
              width={82}
              height={40}
              className="h-7 w-auto object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-serif tracking-wider text-base lg:text-lg font-normal text-white group-hover:text-[#DFC4A1] transition-colors leading-none">
              GLOBAL EDUCATION
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#C6A477] mt-1 font-sans font-medium">
              SERVICES • SULTANATE OF OMAN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
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
                    className={`flex items-center gap-1.5 text-[13px] uppercase tracking-wider font-medium hover:text-[#C6A477] transition-colors py-2 ${
                      isActive || pathname.startsWith("/institutions")
                        ? "text-[#C6A477] font-semibold"
                        : "text-white/90"
                    }`}
                  >
                    <span>{t(link.name, link.nameAr)}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#C6A477] ${
                        institutionsDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full ${
                      isRTL ? "right-0" : "left-0"
                    } w-80 bg-[#0A1C2C] border border-[#C6A477]/30 shadow-2xl rounded-sm p-3 transition-all duration-200 ${
                      institutionsDropdown
                        ? "opacity-100 visible translate-y-1"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-widest text-[#C6A477] px-3 py-1 font-semibold border-b border-white/10 mb-2">
                      {t("Educational Institutions", "المؤسسات التعليمية")}
                    </div>
                    {INSTITUTIONS.map((inst) => (
                      <Link
                        key={inst.id}
                        href={`/institutions/${inst.slug}`}
                        className="block px-3 py-2.5 rounded-sm hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="text-xs font-semibold text-white group-hover/item:text-[#C6A477] flex items-center justify-between">
                          <span className="line-clamp-1">{t(inst.name, inst.nameAr)}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#C6A477] shrink-0" />
                        </div>
                        <div className="text-[11px] text-white/60 mt-0.5 flex items-center gap-1.5">
                          <span className="text-[#C6A477]">•</span>
                          <span>{t(inst.location, inst.locationAr)}</span>
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
                className={`text-[13px] uppercase tracking-wider font-medium hover:text-[#C6A477] transition-colors py-2 relative ${
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
        <div className="hidden xl:flex items-center gap-3.5">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#C6A477] rounded-sm transition-colors focus:ring-2 focus:ring-[#C6A477]"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#C6A477]" />
            <span className="font-semibold">{lang === "en" ? "عربي" : "English"}</span>
          </button>

          {/* Primary CTA */}
          <Link
            href="/institutions"
            className="px-4.5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#C6A477] to-[#A58356] hover:from-[#DFC4A1] hover:to-[#C6A477] text-[#102D46] rounded-sm shadow-md transition-all duration-200 flex items-center gap-2 group shrink-0"
          >
            <span>{t("Explore Institutions", "استكشف مؤسساتنا")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile & Tablet Action Controls */}
        <div className="flex items-center gap-2.5 xl:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 text-xs border border-white/20 hover:border-[#C6A477] text-[#C6A477] rounded-sm bg-white/5"
            aria-label="Switch Language"
          >
            <Globe className="w-3 h-3" />
            <span className="font-bold">{lang === "en" ? "عربي" : "EN"}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#C6A477] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A477] rounded-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A1C2C] border-b border-[#C6A477]/30 px-6 py-6 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="border-b border-white/10 pb-2">
                    <button
                      onClick={() => setMobileInstitutionsOpen(!mobileInstitutionsOpen)}
                      className="w-full flex items-center justify-between py-2 text-base font-medium text-white hover:text-[#C6A477]"
                    >
                      <span>{t(link.name, link.nameAr)}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C6A477] transition-transform ${
                          mobileInstitutionsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileInstitutionsOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-2 bg-white/5 rounded-sm my-1">
                        {INSTITUTIONS.map((inst) => (
                          <Link
                            key={inst.id}
                            href={`/institutions/${inst.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs text-white/80 hover:text-[#C6A477]"
                          >
                            <div className="font-medium text-white">{t(inst.name, inst.nameAr)}</div>
                            <div className="text-[11px] text-[#C6A477]">{t(inst.location, inst.locationAr)}</div>
                          </Link>
                        ))}
                        <Link
                          href="/institutions"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block pt-2 text-xs text-[#DFC4A1] font-semibold underline"
                        >
                          {t("All Institutions Directory →", "دليل جميع المؤسسات ←")}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-white/10 transition-colors ${
                    pathname === link.href ? "text-[#C6A477]" : "text-white hover:text-[#C6A477]"
                  }`}
                >
                  {t(link.name, link.nameAr)}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/institutions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 bg-gradient-to-r from-[#C6A477] to-[#A58356] text-[#102D46] font-semibold text-xs uppercase tracking-widest rounded-sm shadow-md"
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
