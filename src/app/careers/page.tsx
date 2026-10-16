"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { GES_INFO, CAREER_LISTINGS } from "@/data/ges-data";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function CareersPage() {
  const { t } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Careers Hero */}
        <section className="bg-[#102D46] text-white py-20 lg:py-24 border-b border-[#C6A477]/30">
          <div className="editorial-container">
            <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-3">
              {t("Join Our Faculty", "انضم إلى فريقنا")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white max-w-3xl leading-tight">
              {t("Careers at Global Education Services", "الفرص الوظيفية في خدمات التعليم العالمية")}
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed font-light">
              {t(
                "Become part of a dedicated community of educational leaders, early years specialists, and Cambridge certified teachers in Muscat.",
                "كن جزءاً من فريق رائد من التربويين والمعلمين المتخصصين في مسقط، وساهم في بناء أجيال المستقبل."
              )}
            </p>
          </div>
        </section>

        {/* Why Teach with GES */}
        <section className="py-16 bg-white border-b border-[#102D46]/10">
          <div className="editorial-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Continuous CPD & Leadership Growth",
                  titleAr: "التطوير المهني المستمر",
                  desc: "Systematic international training programs, Cambridge workshops, and leadership acceleration.",
                  descAr: "برامج تدريب دولية وورش عمل متخصصة معتمدة من كامبريدج لتطوير المهارات القيادية.",
                },
                {
                  title: "Modern Educational Technology",
                  titleAr: "بيئة تعليمية تقنية متطورة",
                  desc: "State-of-the-art classrooms, STEM laboratories, and interactive learning environments.",
                  descAr: "مختبرات ذكية ومرافق تدريسية مجهزة بأحدث أدوات التكنولوجيا التعليمية.",
                },
                {
                  title: "Inspiring Cultural Community",
                  titleAr: "بيئة عمل ملهمة ومتنوعة",
                  desc: "A warm, respectful, multicultural environment celebrating Oman's renowned heritage and hospitality.",
                  descAr: "بيئة عمل يسودها الاحترام المتبادل والتعاون والاحتفاء بالتراث العُماني الأصيل.",
                },
              ].map((b, idx) => (
                <div key={idx} className="p-6 bg-[#F7F6F2] rounded-sm border border-[#102D46]/10">
                  <h3 className="text-lg font-serif text-[#102D46] mb-2">{t(b.title, b.titleAr)}</h3>
                  <p className="text-xs text-[#4B6375] leading-relaxed">{t(b.desc, b.descAr)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Openings */}
        <section className="py-20 lg:py-24">
          <div className="editorial-container">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("Open Roles", "الشواغر المتاحة")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                {t("Current Academic & Administrative Openings", "الوظائف الأكاديمية والإدارية")}
              </h2>
            </div>

            <div className="space-y-6">
              {CAREER_LISTINGS.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 md:p-8 rounded-sm border border-[#102D46]/10 hover:border-[#C6A477] shadow-sm transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#C6A477] mb-1">
                        {job.department} • {job.institution}
                      </div>
                      <h3 className="text-xl font-serif text-[#102D46]">{job.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#4B6375] shrink-0">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C6A477]" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C6A477]" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#4B6375] mb-4 leading-relaxed">{job.description}</p>

                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] uppercase font-semibold text-[#102D46]">Requirements:</div>
                    {job.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#4B6375]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A477] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#102D46]/10 flex items-center justify-between">
                    <span className="text-xs text-[#4B6375]">
                      Experience: <strong className="text-[#102D46]">{job.experience}</strong>
                    </span>
                    <button
                      onClick={() => setSelectedRole(job.title)}
                      className="px-5 py-2 bg-[#102D46] hover:bg-[#1A3E5E] text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                    >
                      {t("Apply for Position", "التقديم للوظيفة")}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick General Application Form */}
            <div className="mt-16 bg-[#102D46] text-white p-8 md:p-12 rounded-sm" id="application-form">
              <div className="max-w-2xl mb-8">
                <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                  {t("Direct Talent Application", "طلب التوظيف المباشر")}
                </span>
                <h3 className="text-2xl font-serif text-white">
                  {t("Submit Your CV to the GES Talent Pool", "أرسل سيرتك الذاتية إلى بنك الكفاءات")}
                </h3>
                <p className="text-xs text-white/70 mt-2">
                  {t(
                    "Even if your specific discipline is not listed, our HR team reviews candidates for upcoming academic terms.",
                    "حتى وإن لم يكن تخصصك مدرجاً في الشواغر الحالية، يمكنك إرسال بياناتك للنظر فيها للفصول القادمة."
                  )}
                </p>
              </div>

              {formSuccess ? (
                <div className="p-6 bg-white/10 border border-[#C6A477]/40 rounded-sm text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#C6A477] mx-auto mb-2" />
                  <div className="text-base font-serif text-white">Application Received</div>
                  <div className="text-xs text-white/70 mt-1">
                    Thank you. Our recruitment team will review your credentials and contact you directly.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-xs bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-[#C6A477]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 text-xs bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-[#C6A477]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+968 9XXXXXXX"
                        className="w-full px-3 py-2 text-xs bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-[#C6A477]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1">Target Discipline</label>
                      <input
                        type="text"
                        defaultValue={selectedRole || ""}
                        placeholder="e.g. Science / Primary / Early Years"
                        className="w-full px-3 py-2 text-xs bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-[#C6A477]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/80 mb-1">
                      Professional Background Summary / Cover Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detail your qualifications, teaching certifications (PGCE, CACHE), and years of experience..."
                      className="w-full px-3 py-2 text-xs bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-[#C6A477]"
                    />
                  </div>

                  <div className="text-xs text-white/60">
                    CVs can also be forwarded directly to <a href={`mailto:${GES_INFO.contact.careersEmail}`} className="text-[#C6A477] underline">{GES_INFO.contact.careersEmail}</a>.
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 bg-[#C6A477] hover:bg-[#DFC4A1] text-[#102D46] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center gap-2"
                  >
                    <span>{submitting ? "Submitting..." : "Submit Candidate Profile"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
