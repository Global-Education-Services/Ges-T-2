"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { NEWS_STORIES } from "@/data/ges-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        <section className="bg-[#102D46] text-white py-20 lg:py-24 border-b border-[#C6A477]/30">
          <div className="editorial-container">
            <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-3">
              {t("Media & Communications", "المركز الإعلامي")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white max-w-3xl leading-tight">
              {t("News, Impact & Insights", "الأخبار والتقارير والمستجدات")}
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed font-light">
              {t(
                "Discover the latest academic achievements, institutional milestones, campus expansions, and educational viewpoints from across the GES network.",
                "تابع أحدث الإنجازات الأكاديمية والفعاليات التربوية والتوسعات المؤسسية في شبكة مدارس ومراكز GES."
              )}
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="editorial-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {NEWS_STORIES.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-sm overflow-hidden border border-[#102D46]/10 flex flex-col group hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#102D46] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      {t(news.category, news.categoryAr)}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-[#4B6375] mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C6A477]" />
                        {news.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C6A477]" />
                        {news.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-serif text-[#102D46] mb-3 group-hover:text-[#C6A477] transition-colors leading-snug">
                      {t(news.title, news.titleAr)}
                    </h2>

                    <p className="text-xs text-[#4B6375] line-clamp-3 mb-6 leading-relaxed">
                      {t(news.summary, news.summaryAr)}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#102D46]/10">
                      <Link
                        href={`/news/${news.slug}`}
                        className="text-xs uppercase tracking-widest font-semibold text-[#102D46] group-hover:text-[#C6A477] inline-flex items-center gap-1"
                      >
                        <span>{t("Read Full Story", "اقرأ الخبر كامل")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
