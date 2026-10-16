"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { useLanguage } from "@/context/LanguageContext";
import { GES_INFO, INSTITUTIONS } from "@/data/ges-data";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building2 } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Contact Hero */}
        <section className="bg-[#102D46] text-white py-20 lg:py-24 border-b border-[#C6A477]/30">
          <div className="editorial-container">
            <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-3">
              {t("Direct Communications", "الاتصال والتواصل")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white max-w-3xl leading-tight">
              {t("Contact Global Education Services", "تواصل مع خدمات التعليم العالمية")}
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed font-light">
              {t(
                "Our administrative leadership, school admissions desks, and customer advisory teams in Muscat are available to assist you.",
                "فريق الإدارة العامة ومكاتب القبول في مدارسنا ومراكزنا مستعدون للإجابة على جميع استفساراتكم وتقديم الدعم اللازم."
              )}
            </p>
          </div>
        </section>

        {/* Contact Form & Main Office Grid */}
        <section className="py-20 lg:py-24">
          <div className="editorial-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Head Office & Institution Contacts */}
              <div className="lg:col-span-5 space-y-8">
                {/* Headquarters Box */}
                <div className="bg-white p-8 rounded-sm border-t-4 border-[#C6A477] shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A477] font-semibold">
                    <Building2 className="w-4 h-4" />
                    <span>{t("Corporate Headquarters", "المقر الرئيسي للمجموعة")}</span>
                  </div>
                  <h2 className="text-2xl font-serif text-[#102D46]">
                    Global Education Services L.L.C.
                  </h2>

                  <div className="space-y-3.5 text-xs text-[#4B6375] pt-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#C6A477] shrink-0 mt-0.5" />
                      <span>{t(GES_INFO.contact.address, GES_INFO.contact.addressAr)}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C6A477] shrink-0" />
                      <a href={`tel:${GES_INFO.contact.phone}`} className="hover:text-[#102D46] font-semibold text-sm">
                        {GES_INFO.contact.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#C6A477] shrink-0" />
                      <a href={`mailto:${GES_INFO.contact.email}`} className="hover:text-[#102D46] font-semibold">
                        {GES_INFO.contact.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <Clock className="w-4 h-4 text-[#C6A477] shrink-0" />
                      <span>{t(GES_INFO.contact.workingHours, GES_INFO.contact.workingHoursAr)}</span>
                    </div>
                  </div>
                </div>

                {/* Campus Directory Links */}
                <div className="bg-white p-8 rounded-sm border border-[#102D46]/10 shadow-sm space-y-4">
                  <h3 className="text-lg font-serif text-[#102D46]">
                    {t("Campus Admissions Contacts", "مكاتب القبول في المؤسسات")}
                  </h3>

                  <div className="space-y-4 divide-y divide-[#102D46]/10">
                    {INSTITUTIONS.map((inst) => (
                      <div key={inst.id} className="pt-3 first:pt-0">
                        <div className="text-sm font-semibold text-[#102D46]">{t(inst.name, inst.nameAr)}</div>
                        <div className="text-xs text-[#4B6375] mt-1">{t(inst.location, inst.locationAr)}</div>
                        <div className="flex items-center gap-4 text-xs text-[#C6A477] mt-2 font-medium">
                          <a href={`tel:${inst.contact.phone}`} className="hover:underline">{inst.contact.phone}</a>
                          <span>•</span>
                          <a href={`mailto:${inst.contact.email}`} className="hover:underline">{inst.contact.email}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Functional Enquiry Form */}
              <div className="lg:col-span-7">
                <EnquiryForm defaultInstitution="" source="Contact Page" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
