"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { GES_INFO, INSTITUTIONS } from "@/data/ges-data";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  const { isRTL, t } = useLanguage();

  return (
    <footer className="bg-[#0A1C2C] text-white border-t border-[#C6A477]/30 pt-16 pb-12">
      <div className="editorial-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C6A477] to-[#A58356] flex items-center justify-center font-serif text-white font-bold text-xl tracking-wider shadow">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-lg font-normal text-white">
                  GLOBAL EDUCATION
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A477]">
                  SERVICES • OMAN
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {t(
                "Global Education Services LLC is Oman's premier private education management group. We establish and operate leading international schools and early childhood sanctuaries dedicated to academic excellence and cultural integrity.",
                "شركة خدمات التعليم العالمية ش.م.م هي المجموعة التعليمية الرائدة في سلطنة عُمان لإدارة المدارس ومراكز التعليم المبكر ذات المعايير الدولية المعززة بالهوية الوطنية الأصيلة."
              )}
            </p>
            <div className="pt-2 text-xs text-[#C6A477] font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{t("Aligned with Oman Vision 2040", "متوافق مع رؤية عُمان 2040")}</span>
            </div>
          </div>

          {/* Institutions Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold">
              {t("Our Institutions", "مؤسساتنا")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {INSTITUTIONS.map((inst) => (
                <li key={inst.id}>
                  <Link
                    href={`/institutions/${inst.slug}`}
                    className="hover:text-[#C6A477] transition-colors block"
                  >
                    {t(inst.name, inst.nameAr)}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/institutions"
                  className="text-xs text-[#C6A477] hover:underline font-medium"
                >
                  {t("Institution Directory →", "دليل المؤسسات ←")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold">
              {t("Corporate", "روابط الشركة")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-[#C6A477] transition-colors">
                  {t("About GES", "عن المجموعة")}
                </Link>
              </li>
              <li>
                <Link href="/about#vision" className="hover:text-[#C6A477] transition-colors">
                  {t("Vision & Mission", "الرؤية والرسالة")}
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-[#C6A477] transition-colors">
                  {t("Executive Leadership", "القيادة التنفيذية")}
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="hover:text-[#C6A477] transition-colors">
                  {t("Educational Philosophy", "الفلسفة التعليمية")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#C6A477] transition-colors">
                  {t("News & Impact", "الأخبار والمستجدات")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#C6A477] transition-colors">
                  {t("Career Opportunities", "الفرص الوظيفية")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold">
              {t("Head Office", "المقر الرئيسي")}
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A477] shrink-0 mt-0.5" />
                <span>{t(GES_INFO.contact.address, GES_INFO.contact.addressAr)}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A477] shrink-0" />
                <a href={`tel:${GES_INFO.contact.phone}`} className="hover:text-[#C6A477] transition-colors">
                  {GES_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A477] shrink-0" />
                <a href={`mailto:${GES_INFO.contact.email}`} className="hover:text-[#C6A477] transition-colors">
                  {GES_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="block text-[11px] text-white/50">
                  {t(GES_INFO.contact.workingHours, GES_INFO.contact.workingHoursAr)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © 2024 Global Education Services L.L.C. (GES Quality Education). {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#C6A477] transition-colors">
              {t("Privacy Policy", "سياسة الخصوصية")}
            </Link>
            <Link href="/contact" className="hover:text-[#C6A477] transition-colors">
              {t("Enquiry Portal", "بوابة الاستفسارات")}
            </Link>
            <a
              href="https://ges.om"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6A477] transition-colors flex items-center gap-1"
            >
              <span>ges.om</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
