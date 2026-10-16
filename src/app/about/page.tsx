"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { GES_INFO, LEADERSHIP } from "@/data/ges-data";
import { Award, Compass, Eye, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Page Hero Header */}
        <section className="bg-[#102D46] text-white py-20 lg:py-24 border-b border-[#C6A477]/30">
          <div className="editorial-container">
            <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-3">
              {t("Corporate Profile", "الملف التعريفي")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white max-w-3xl leading-tight">
              {t("About Global Education Services LLC", "عن شركة خدمات التعليم العالمية")}
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed font-light">
              {t(
                "Founded in 2012, GES Quality Education is committed to delivering world-class educational management and institutional excellence across the Sultanate of Oman.",
                "تأسست المجموعة عام 2012 بهدف تطوير وإدارة المنشآت التعليمية المتميزة وفق أعلى المعايير الدولية المعززة بالهوية العُمانية."
              )}
            </p>
          </div>
        </section>

        {/* Heritage & Founders Story */}
        <section className="py-20 lg:py-24 bg-white border-b border-[#102D46]/10">
          <div className="editorial-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-[#F7F6F2]">
                  <Image
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
                    alt="GES Educational Leadership Heritage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C6A477]">
                  <Award className="w-4 h-4" />
                  <span>{t("Visionary Foundation", "تأسيس أصيل ورؤية ثاقبة")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                  {t("A Heritage of Dedication to Omani Learning", "إرث من العطاء لمسيرة التعليم في عُمان")}
                </h2>

                <p className="text-base text-[#4B6375] leading-relaxed">
                  {t(
                    "Global Education Services LLC was established upon the lifelong visionary dedication of the late Honorable Sheikh Salim bin Hamood Al Hashmi and Sheikha Thuriya Mohamed Salim Al Rahbi. Their foundational belief—that high quality, globally rigorous education must remain deeply anchored in Omani values—continues to guide our educational journey.",
                    "قامت شركة خدمات التعليم العالمية على الرؤية النبيلة للمغفور له بإذن الله المكرم الشيخ سالم بن حمود الهاشمي والشيخة ثريا بنت محمد بن سالم الرحبية، واللذين آمنوا بأن الاستثمار في عقول الأجيال وفق أعلى المعايير الدولية مع ترسيخ قيم التراث العُماني هو أسمى غايات البناء الوطني."
                  )}
                </p>

                <p className="text-base text-[#4B6375] leading-relaxed">
                  {t(
                    "Today, GES operates as a specialized educational management organization. We oversee schools, early childhood centers, curriculum development, teacher training, and institutional compliance, creating environments where both students and educators thrive.",
                    "واليوم تمثل GES بيتاً للخبرة في الإدارة التعليمية، حيث تشرف على المدارس الدولية ومراكز الطفولة المبكرة وبرامج تأهيل المعلمين وشراكات التعليم، لتقديم نموذج تعليمي متكامل يرتقي بطلبتنا إلى مصاف العالمية."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Anchors */}
        <section className="py-20 lg:py-24 bg-[#F7F6F2]" id="vision">
          <div className="editorial-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-white p-8 md:p-10 rounded-sm border-t-4 border-[#C6A477] shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#DCEAF0]/50 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#102D46]" />
                </div>
                <h3 className="text-2xl font-serif text-[#102D46]">
                  {t("Our Vision", "رؤيتنا")}
                </h3>
                <p className="text-sm text-[#4B6375] leading-relaxed">
                  {t(GES_INFO.vision, GES_INFO.visionAr)}
                </p>
                <div className="pt-2 text-xs text-[#C6A477] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t("Aligned with Oman Vision 2040", "تحقيقاً لمستهدفات رؤية عُمان 2040")}</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-8 md:p-10 rounded-sm border-t-4 border-[#102D46] shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#DCEAF0]/50 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#102D46]" />
                </div>
                <h3 className="text-2xl font-serif text-[#102D46]">
                  {t("Our Mission", "رسالتنا")}
                </h3>
                <p className="text-sm text-[#4B6375] leading-relaxed">
                  {t(GES_INFO.mission, GES_INFO.missionAr)}
                </p>
                <div className="pt-2 text-xs text-[#102D46] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C6A477]" />
                  <span>{t("Excellence • Integrity • Innovation", "تميز • نزاهة • ابتكار")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Leadership Showcase */}
        <section className="py-20 lg:py-24 bg-white border-t border-[#102D46]/10" id="leadership">
          <div className="editorial-container">
            <div className="max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("Executive Stewardship", "مجلس الإدارة والقيادة التنفيذية")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                {t("GES Executive Leadership", "قيادة خدمات التعليم العالمية")}
              </h2>
              <p className="text-base text-[#4B6375] mt-3">
                {t(
                  "Experienced educational executives and visionary leaders steering our institutional trajectory with integrity and strategic foresight.",
                  "نخبة من القيادات ذات الخبرة والرؤية الاستراتيجية لتوجيه مسيرة المجموعة نحو المزيد من التميز والريادة."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEADERSHIP.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F6F2] p-8 rounded-sm border border-[#102D46]/10 hover:border-[#C6A477] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-[#102D46] text-[#C6A477] font-serif font-bold text-xl flex items-center justify-center mb-6 shadow-sm">
                      {leader.name.split(" ")[0][0]}
                    </div>
                    <h3 className="text-lg font-serif text-[#102D46] mb-1">
                      {t(leader.name, leader.nameAr)}
                    </h3>
                    <div className="text-xs font-semibold text-[#C6A477] uppercase tracking-wider mb-4">
                      {t(leader.title, leader.titleAr)}
                    </div>
                    <p className="text-xs text-[#4B6375] leading-relaxed">
                      {t(leader.bio, leader.bioAr)}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#102D46]/10 text-[11px] text-[#102D46]/60 font-medium uppercase tracking-wider">
                    {leader.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to Explore Institutions */}
        <section className="py-16 bg-[#102D46] text-white">
          <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif text-white">
                {t("Discover Our Educational Campuses", "اكتشف مؤسساتنا ومدارسنا")}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {t(
                  "Explore our accredited K-12 school and early childhood centers in Muscat.",
                  "تعرف على مدرسة الشموخ العالمية ومراكز الشموخ للتعليم المبكر."
                )}
              </p>
            </div>
            <Link
              href="/institutions"
              className="px-6 py-3 bg-[#C6A477] hover:bg-[#DFC4A1] text-[#102D46] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center gap-2 shrink-0"
            >
              <span>{t("View Institutions", "عرض المؤسسات")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
