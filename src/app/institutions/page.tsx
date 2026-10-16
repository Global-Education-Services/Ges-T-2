"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { INSTITUTIONS } from "@/data/ges-data";
import { MapPin, ArrowRight, ArrowUpRight, CheckCircle2, Filter } from "lucide-react";

export default function InstitutionsPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "school" | "early-childhood">("all");

  const filteredInstitutions = INSTITUTIONS.filter((inst) => {
    if (activeFilter === "all") return true;
    return inst.type === activeFilter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Page Header */}
        <section className="bg-[#102D46] text-white py-20 lg:py-24 border-b border-[#C6A477]/30">
          <div className="editorial-container">
            <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-3">
              {t("Educational Network", "الشبكة التعليمية")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white max-w-3xl leading-tight">
              {t("Our Educational Institutions", "مؤسساتنا التعليمية")}
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed font-light">
              {t(
                "A distinguished collective of private educational environments across Muscat, providing world-class Cambridge K-12 schooling and British EYFS early childhood development.",
                "منظومة تعليمية رائدة في مسقط تشمل مدرسة دولية بريطانية ومراكز متخصصة في الطفولة المبكرة بمعايير عالمية ورعاية متكاملة."
              )}
            </p>

            {/* Filter Controls */}
            <div className="pt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs text-white/50 flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5 text-[#C6A477]" />
                {t("Filter by Level:", "تصفية حسب المرحلة:")}
              </span>
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  activeFilter === "all"
                    ? "bg-[#C6A477] text-[#102D46]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {t("All Campuses (3)", "جميع المؤسسات (3)")}
              </button>
              <button
                onClick={() => setActiveFilter("school")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  activeFilter === "school"
                    ? "bg-[#C6A477] text-[#102D46]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {t("K-12 International Schools", "المدارس الدولية (K-12)")}
              </button>
              <button
                onClick={() => setActiveFilter("early-childhood")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  activeFilter === "early-childhood"
                    ? "bg-[#C6A477] text-[#102D46]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {t("Early Childhood Centers (EYFS)", "مراكز التعليم المبكر (EYFS)")}
              </button>
            </div>
          </div>
        </section>

        {/* Institutions Detailed Editorial Showcase */}
        <section className="py-20 lg:py-24">
          <div className="editorial-container space-y-16">
            {filteredInstitutions.map((inst, idx) => (
              <div
                key={inst.id}
                className="bg-white rounded-sm border border-[#102D46]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Visual Side */}
                  <div className={`lg:col-span-5 relative min-h-[340px] lg:min-h-full ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#102D46]/90 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-xs uppercase tracking-wider border border-[#C6A477]/40">
                      {inst.type === "school" ? t("K-12 School", "مدرسة K-12") : t("Early Years Centre", "مركز طفولة مبكرة")}
                    </div>
                  </div>

                  {/* Editorial Side */}
                  <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#C6A477] font-semibold uppercase tracking-wider mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{t(inst.location, inst.locationAr)}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-serif text-[#102D46] mb-3">
                        {t(inst.name, inst.nameAr)}
                      </h2>

                      <p className="text-sm text-[#4B6375] leading-relaxed mb-6">
                        {t(inst.fullOverview, inst.fullOverview)}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {inst.highlights.slice(0, 3).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#102D46]">
                            <CheckCircle2 className="w-4 h-4 text-[#C6A477] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specs Matrix */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-[#102D46]/10 mb-6 bg-[#F7F6F2] p-4 rounded-sm">
                        {inst.stats.map((stat, sIdx) => (
                          <div key={sIdx}>
                            <div className="text-[11px] uppercase tracking-wider text-[#4B6375]">
                              {stat.label}
                            </div>
                            <div className="text-sm font-serif font-bold text-[#102D46] mt-0.5">
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <Link
                        href={`/institutions/${inst.slug}`}
                        className="px-6 py-2.5 bg-[#102D46] hover:bg-[#1A3E5E] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center gap-2"
                      >
                        <span>{t("View Full Campus Profile", "عرض تفاصيل الحرم بالكامل")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={inst.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#C6A477] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>{t("Official Website", "الموقع الرسمي")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
