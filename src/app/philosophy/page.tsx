"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { PHILOSOPHY_PILLARS, LEARNING_JOURNEY_STAGES } from "@/data/ges-data";
import { GraduationCap, HeartHandshake, Baby, Sparkles, BookOpen, Compass, Award } from "lucide-react";

export default function PhilosophyPage() {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-8 h-8 text-[#C6A477]" />,
    HeartHandshake: <HeartHandshake className="w-8 h-8 text-[#C6A477]" />,
    Baby: <Baby className="w-8 h-8 text-[#C6A477]" />,
    Sparkles: <Sparkles className="w-8 h-8 text-[#C6A477]" />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Hero Header */}
        <section className="bg-[#102D46] text-white py-20 lg:py-24 border-b border-[#C6A477]/30">
          <div className="editorial-container">
            <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-3">
              {t("Pedagogical Framework", "الإطار التربوي")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white max-w-3xl leading-tight">
              {t("Our Educational Approach & Philosophy", "نهجنا وفلسفتنا التعليمية")}
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed font-light">
              {t(
                "Cultivating intellectual curiosity, cultural grounding, and moral character through evidence-based international curricula and child-centered environments.",
                "بناء العقول المفكرة وغرس القيم الأصيلة من خلال المناهج الدولية الرائدة والبيئات التعليمية المرتكزة حول الطفل."
              )}
            </p>
          </div>
        </section>

        {/* The 4 Pillars Detailed */}
        <section className="py-20 lg:py-24">
          <div className="editorial-container">
            <div className="max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("Core Foundational Pillars", "الركائز الأساسية")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                {t("Four Pillars of Educational Excellence", "أربع ركائز للتميز الأكاديمي والتربوي")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PHILOSOPHY_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white p-8 md:p-10 rounded-sm border-t-4 border-[#C6A477] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-sm bg-[#DCEAF0]/50 flex items-center justify-center mb-6">
                      {iconMap[pillar.icon]}
                    </div>
                    <h3 className="text-2xl font-serif text-[#102D46] mb-2">
                      {t(pillar.title, pillar.titleAr)}
                    </h3>
                    <div className="text-xs text-[#C6A477] font-semibold uppercase tracking-wider mb-4">
                      {t(pillar.subtitle, pillar.subtitleAr)}
                    </div>
                    <p className="text-sm text-[#4B6375] leading-relaxed">
                      {t(pillar.description, pillar.descriptionAr)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The RISE Values Framework */}
        <section className="py-20 lg:py-24 bg-white border-y border-[#102D46]/10">
          <div className="editorial-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("Character & Ethical Foundation", "بناء الشخصية والقيم")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                {t("The RISE Values Framework", "منظومة قيم (RISE)")}
              </h2>
              <p className="text-base text-[#4B6375] mt-3">
                {t(
                  "Embedded across our schools and early childhood centers, the RISE principles define daily life and student interaction.",
                  "مبادئ وقيم أصيلة تحكم بيئتنا المدرسية وتصقل شخصيات أبنائنا في كافة مراحلهم الدراسية."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  letter: "R",
                  title: "Respect",
                  titleAr: "الاحترام",
                  desc: "Cultivating mutual empathy, cross-cultural courtesy, and profound reverence for Omani national heritage.",
                  descAr: "غرس مشاعر التقدير المتبادل، واحترام الثقافات، والاعتزاز بالهوية والتراث العُماني.",
                },
                {
                  letter: "I",
                  title: "Integrity",
                  titleAr: "النزاهة",
                  desc: "Instilling uncompromising honesty, personal accountability, and ethical moral agency in every action.",
                  descAr: "ترسيخ الصدق والأمانة وتحمل المسؤولية الفردية والأخلاقية في جميع التعاملات.",
                },
                {
                  letter: "S",
                  title: "Success",
                  titleAr: "النجاح",
                  desc: "Defining achievement holistically—celebrating artistic, emotional, social, and athletic growth alongside academic triumphs.",
                  descAr: "الاحتفاء بالإنجازات الفكرية والفنية والرياضية والاجتماعية كجزء متكامل من التطور الشخصي.",
                },
                {
                  letter: "E",
                  title: "Excellence",
                  titleAr: "التميز",
                  desc: "Pursuing the highest benchmarks in scholarship, pedagogical mastery, and continuous institutional refinement.",
                  descAr: "السعي الدائم نحو أعلى معايير الجودة والتحصيل الأكاديمي والتطوير المؤسسي المستمر.",
                },
              ].map((val) => (
                <div key={val.letter} className="bg-[#F7F6F2] p-8 rounded-sm border border-[#102D46]/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#102D46] text-[#C6A477] font-serif font-bold text-3xl mx-auto flex items-center justify-center mb-4">
                    {val.letter}
                  </div>
                  <h3 className="text-xl font-serif text-[#102D46] mb-2">{t(val.title, val.titleAr)}</h3>
                  <p className="text-xs text-[#4B6375] leading-relaxed">{t(val.desc, val.descAr)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Journey Continuum */}
        <section className="py-20 lg:py-24 bg-[#F7F6F2]">
          <div className="editorial-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("P-12 Articulation", "المسار التعليمي الشامل")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                {t("Curriculum Progression Model", "نموذج التدرج في المناهج")}
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {LEARNING_JOURNEY_STAGES.map((st) => (
                <div key={st.stage} className="bg-white p-6 md:p-8 rounded-sm border-l-4 border-[#C6A477] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-xs font-serif font-bold text-[#C6A477]">STAGE {st.stage}</span>
                    <h3 className="text-xl font-serif text-[#102D46]">{t(st.title, st.titleAr)}</h3>
                    <div className="text-xs text-[#4B6375] font-semibold">{t(st.age, st.ageAr)} • {t(st.framework, st.frameworkAr)}</div>
                    <p className="text-xs text-[#4B6375] max-w-xl pt-2">{t(st.description, st.descriptionAr)}</p>
                  </div>
                  <div className="text-xs text-[#102D46] font-semibold uppercase tracking-wider bg-[#F7F6F2] p-3 rounded-sm border border-[#102D46]/10 shrink-0">
                    {t(st.campuses, st.campusesAr)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
