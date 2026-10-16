"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { GES_INFO } from "@/data/ges-data";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        <section className="bg-[#102D46] text-white py-16 lg:py-20 border-b border-[#C6A477]/30">
          <div className="editorial-container">
            <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
              {t("Legal & Governance", "الأنظمة واللوائح")}
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-white">
              {t("Privacy & Data Protection Policy", "سياسة الخصوصية وحماية البيانات")}
            </h1>
            <p className="text-xs sm:text-sm text-white/70 mt-2">
              {t("Last updated: October 2024 • Global Education Services LLC, Muscat, Oman", "آخر تحديث: أكتوبر 2024 • شركة خدمات التعليم العالمية، مسقط، عُمان")}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="editorial-container max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-sm border border-[#102D46]/10 shadow-sm space-y-6 text-sm text-[#4B6375] leading-relaxed">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102D46]">
                <ShieldCheck className="w-4 h-4 text-[#C6A477]" />
                <span>Commitment to Student & Family Privacy</span>
              </div>

              <h2 className="text-xl font-serif text-[#102D46] pt-2">1. Introduction & Scope</h2>
              <p>
                Global Education Services L.L.C. (&quot;GES&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting and protecting the privacy of prospective students, parents, guardians, job applicants, and visitors interacting with our website (ges.om) and associated school portals.
              </p>

              <h2 className="text-xl font-serif text-[#102D46] pt-2">2. Information We Collect</h2>
              <p>
                We only collect information that is purposefully provided when you request school visits, enquire about admissions, submit employment applications, or correspond with our educational advisory team. This includes parent names, email addresses, contact telephone numbers, student age/grade levels, and CV documentation.
              </p>

              <h2 className="text-xl font-serif text-[#102D46] pt-2">3. Purpose of Data Processing</h2>
              <p>
                All data collected is utilized strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Facilitate school tours and respond to admissions requests</li>
                <li>Process student registration documents in accordance with Ministry of Education standards</li>
                <li>Evaluate candidate suitability for academic and administrative appointments</li>
                <li>Ensure the safeguarding and welfare of children across our educational environments</li>
              </ul>

              <h2 className="text-xl font-serif text-[#102D46] pt-2">4. Data Sharing & Confidentiality</h2>
              <p>
                We do not sell, rent, or lease personal information to third parties. Data is shared exclusively with authorized personnel within Al Shomoukh International Private School and Shomoukh Early Childhood Centers for the express purpose of admissions and educational administration.
              </p>

              <h2 className="text-xl font-serif text-[#102D46] pt-2">5. Contact Our Data Compliance Officer</h2>
              <p>
                If you have questions regarding the handling of your data or wish to request corrections, please contact:
              </p>
              <div className="p-4 bg-[#F7F6F2] rounded-sm border border-[#102D46]/10 text-xs">
                <div><strong>Global Education Services L.L.C.</strong></div>
                <div>{GES_INFO.contact.address}</div>
                <div>Email: {GES_INFO.contact.email} | Tel: {GES_INFO.contact.phone}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
