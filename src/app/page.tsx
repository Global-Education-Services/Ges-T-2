"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  GES_INFO,
  INSTITUTIONS,
  PHILOSOPHY_PILLARS,
  LEARNING_JOURNEY_STAGES,
  NEWS_STORIES,
} from "@/data/ges-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  Baby,
  CheckCircle,
  MapPin,
  Calendar,
  Clock,
  Shield,
  Award,
} from "lucide-react";

export default function HomePage() {
  const { t, isRTL } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-[#C6A477]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#C6A477]" />,
    Baby: <Baby className="w-6 h-6 text-[#C6A477]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#C6A477]" />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* ========================================================
            1. CINEMATIC HERO SECTION
           ======================================================== */}
        <section className="relative min-h-[92vh] flex items-center bg-[#102D46] overflow-hidden">
          {/* Subtle Background Overlay Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=85"
              alt="Global Education Services Learning Environment"
              fill
              priority
              className="object-cover object-center opacity-30 mix-blend-overlay filter brightness-95"
            />
            {/* Elegant Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C2C] via-[#102D46]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102D46] via-transparent to-transparent" />
          </div>

          <div className="editorial-container relative z-10 py-24 lg:py-32">
            <div className="max-w-3xl space-y-6">
              {/* Refined Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white/10 backdrop-blur-sm border border-[#C6A477]/40 text-[#DFC4A1] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A477]" />
                <span>{t("Muscat, Sultanate of Oman • Established 2012", "مسقط، سلطنة عُمان • تأسست عام 2012")}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.12] tracking-tight">
                {t(
                  "Shaping Futures Through Quality Education",
                  "صناعة المستقبل من خلال التعليم النوعي"
                )}
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-sans leading-relaxed max-w-2xl font-light">
                {t(
                  "Discover a distinguished community of learning environments dedicated to nurturing curiosity, inspiring growth, and empowering future generations across the Sultanate of Oman.",
                  "اكتشف شبكة متميزة من الصروح التعليمية المكرسة لغرس الفضول المعرفي، وإلهام التطور، وتمكين أجيال الغد وفق أعلى المعايير العالمية المعززة بالهوية العُمانية."
                )}
              </p>

              {/* Hero Action CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/institutions"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C6A477] to-[#A58356] hover:from-[#DFC4A1] hover:to-[#C6A477] text-[#102D46] font-semibold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>{t("Explore Our Institutions", "استكشف مؤسساتنا")}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="/about"
                  className="px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-[#C6A477] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all duration-200"
                >
                  {t("Discover GES", "عن المجموعة")}
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10">
                <div>
                  <div className="text-2xl lg:text-3xl font-serif text-[#C6A477]">100%</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">
                    {t("Cambridge & EYFS Accreditations", "اعتمادات كامبريدج وEYFS")}
                  </div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-serif text-[#C6A477]">3 Campuses</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">
                    {t("Strategic Muscat Locations", "مواقع استراتيجية في مسقط")}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-2xl lg:text-3xl font-serif text-[#C6A477]">K-12 & Early Years</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">
                    {t("Complete Learning Spectrum", "مسار تعليمي متكامل")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. ABOUT GLOBAL EDUCATION SERVICES (Editorial Two-Column)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-[#F7F6F2]">
          <div className="editorial-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Authentic Photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
                    alt="Al Shomoukh International Private School campus learning"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Accent Floating Badge */}
                <div className={`absolute -bottom-6 ${isRTL ? "-left-6" : "-right-6"} bg-[#102D46] text-white p-6 rounded-sm shadow-xl border border-[#C6A477]/40 max-w-[240px] hidden sm:block`}>
                  <div className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold mb-1">
                    {t("Oman Vision 2040", "رؤية عُمان 2040")}
                  </div>
                  <div className="text-sm font-serif">
                    {t("Fostering national capacity through global educational standards.", "بناء الكفاءات الوطنية عبر معايير التعليم العالمية.")}
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C6A477]">
                  <Award className="w-4 h-4" />
                  <span>{t("About Global Education Services LLC", "عن شركة خدمات التعليم العالمية")}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#102D46] leading-[1.2]">
                  {t(
                    "Pioneering Educational Excellence Across the Sultanate",
                    "ريادة التميز التعليمي في سلطنة عُمان"
                  )}
                </h2>

                <p className="text-base text-[#4B6375] leading-relaxed">
                  {t(
                    "Established in 2012 by visionary Omani entrepreneurs, Global Education Services LLC (GES Quality Education) was founded upon the lifelong dedication of the late Honorable Sheikh Salim bin Hamood Al Hashmi and Sheikha Thuriya Mohamed Salim Al Rahbi.",
                    "تأسست شركة خدمات التعليم العالمية عام 2012 انطلاقاً من الرؤية السامية للمغفور له بإذن الله المكرم الشيخ سالم بن حمود الهاشمي والشيخة ثريا بنت محمد بن سالم الرحبية لخدمة مسيرة التعليم في سلطنة عُمان."
                  )}
                </p>

                <p className="text-base text-[#4B6375] leading-relaxed">
                  {t(
                    "GES specializes in educational management, operating accredited private schools, nursery campuses, and public-private partnerships. Our institutions bring together international curricula with deep-seated respect for Omani culture, shaping agile, ethical leaders for a globally connected future.",
                    "تتخصص المجموعة في إدارة وتشغيل المؤسسات التعليمية الخاصة وفق أحدث المناهج الدولية كمنهاج كامبريدج البريطاني ومنهاج مرحلة التأسيس للسنوات المبكرة، مع الحفاظ الراسخ على الهوية واللغة والقيم العمانية الأصيلة."
                  )}
                </p>

                {/* RISE Values Micro-Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { label: "Respect", labelAr: "الاحترام" },
                    { label: "Integrity", labelAr: "النزاهة" },
                    { label: "Success", labelAr: "النجاح" },
                    { label: "Excellence", labelAr: "التميز" },
                  ].map((val) => (
                    <div
                      key={val.label}
                      className="p-3 bg-white border border-[#102D46]/10 rounded-sm text-center shadow-xs"
                    >
                      <div className="text-xs uppercase font-bold text-[#102D46]">
                        {t(val.label, val.labelAr)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#102D46] hover:text-[#C6A477] border-b-2 border-[#102D46] hover:border-[#C6A477] pb-1 transition-all"
                  >
                    <span>{t("Learn More About GES Leadership & Vision", "تعرف على قيادة ورؤية المجموعة")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. OUR EDUCATIONAL INSTITUTIONS (Showcase Cards)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-white border-y border-[#102D46]/10">
          <div className="editorial-container">
            {/* Section Header */}
            <div className="max-w-2xl mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("Network of Distinction", "شبكة التميز الأكاديمي")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#102D46]">
                {t("Our Educational Institutions", "مؤسساتنا التعليمية")}
              </h2>
              <p className="text-base text-[#4B6375] mt-3">
                {t(
                  "Each institution within the GES network is purposefully designed to deliver inspiring, rigorous, and individualized student journeys from infancy through pre-university graduation.",
                  "صُممت كل مؤسسة في شبكة GES بعناية لتقديم تجربة تعليمية ثرية تضمن التطور الفكري والشخصي لطلبتنا من مرحلة الطفولة حتى التخرج."
                )}
              </p>
            </div>

            {/* Editorial Showcase Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {INSTITUTIONS.map((inst) => (
                <div
                  key={inst.id}
                  className="bg-[#F7F6F2] rounded-sm overflow-hidden border border-[#102D46]/10 hover:border-[#C6A477] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#102D46]/90 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-xs uppercase tracking-wider border border-[#C6A477]/30">
                      {inst.type === "school" ? t("K-12 International School", "مدرسة دولية K-12") : t("Early Childhood Centre", "مركز للطفولة المبكرة")}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 text-xs text-[#C6A477] font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{t(inst.location, inst.locationAr)}</span>
                    </div>

                    <h3 className="text-xl font-serif text-[#102D46] mb-3 group-hover:text-[#C6A477] transition-colors">
                      {t(inst.name, inst.nameAr)}
                    </h3>

                    <p className="text-sm text-[#4B6375] line-clamp-3 mb-6 leading-relaxed">
                      {t(inst.description, inst.descriptionAr)}
                    </p>

                    {/* Meta Specs */}
                    <div className="space-y-2 py-4 border-y border-[#102D46]/10 text-xs mb-6">
                      <div className="flex justify-between text-[#4B6375]">
                        <span className="font-semibold text-[#102D46]">{t("Ages / Grades:", "المرحلة العمرية:")}</span>
                        <span>{t(inst.ageRange, inst.ageRangeAr)}</span>
                      </div>
                      <div className="flex justify-between text-[#4B6375]">
                        <span className="font-semibold text-[#102D46]">{t("Curriculum:", "المنهاج:")}</span>
                        <span className="text-right max-w-[60%]">{t(inst.curriculum, inst.curriculumAr)}</span>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <Link
                        href={`/institutions/${inst.slug}`}
                        className="text-xs uppercase tracking-widest font-semibold text-[#102D46] group-hover:text-[#C6A477] flex items-center gap-1.5"
                      >
                        <span>{t("Campus Details", "تفاصيل الحرم")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={inst.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#C6A477] hover:underline flex items-center gap-1 font-medium"
                      >
                        <span>{t("Visit Website", "زيارة الموقع")}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/institutions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#102D46] hover:bg-[#1A3E5E] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors shadow-md"
              >
                <span>{t("Explore Complete Educational Network", "استكشف الشبكة التعليمية الكاملة")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. OUR EDUCATIONAL PHILOSOPHY (Four Pillars)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-[#F7F6F2]">
          <div className="editorial-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("Guiding Pedagogy", "المبادئ التربوية")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#102D46]">
                {t("Our Educational Philosophy", "فلسفتنا التعليمية")}
              </h2>
              <p className="text-base text-[#4B6375] mt-3">
                {t(
                  "We anchor academic rigor within child-centered discovery and moral character, creating a balanced foundation that prepares learners for lifelong leadership.",
                  "نجمع بين الرصانة الأكاديمية والتطوير القيمي للأبناء، لنصنع بيئة متوازنة تصقل شخصياتهم وتعدهم للمستقبل."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PHILOSOPHY_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white p-8 rounded-sm border border-[#102D46]/10 hover:border-[#C6A477] hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#DCEAF0]/50 flex items-center justify-center mb-6">
                    {iconMap[pillar.icon]}
                  </div>
                  <h3 className="text-xl font-serif text-[#102D46] mb-2">
                    {t(pillar.title, pillar.titleAr)}
                  </h3>
                  <div className="text-xs text-[#C6A477] font-semibold uppercase tracking-wider mb-3">
                    {t(pillar.subtitle, pillar.subtitleAr)}
                  </div>
                  <p className="text-sm text-[#4B6375] leading-relaxed flex-grow">
                    {t(pillar.description, pillar.descriptionAr)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#102D46] hover:text-[#C6A477] border-b border-[#102D46] hover:border-[#C6A477] pb-1 transition-all"
              >
                <span>{t("Read Our Comprehensive Educational Framework", "اطلع على إطارنا التعليمي المتكامل")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. THE GES DIFFERENCE (Distinctive Value)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-[#102D46] text-white relative overflow-hidden">
          <div className="editorial-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block">
                  {t("Why GES", "لماذا خدمات التعليم العالمية")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.15]">
                  {t("The GES Standard of Educational Distinction", "معيار GES للتميز التعليمي")}
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {t(
                    "As an established Omani corporate education entity, GES bridges global curricular innovation with national cultural stewardship. We invest persistently in world-class faculty, accredited curricula, and state-of-the-art campus learning environments.",
                    "بصفتها مجموعة تعليمية عُمانية رائدة، تجمع GES بين أحدث الابتكارات التعليمية العالمية ورعاية القيم الوطنية، مع الاستثمار الدائم في الكوادر التعليمية المتميزة وتطوير المرافق المدرسية الحديثة."
                  )}
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    {
                      title: "Certified International & Omani Faculty",
                      titleAr: "كوادر تعليمية دولية وعُمانية مؤهلة",
                      desc: "Qualified educators with rigorous ongoing professional development and safeguarding accreditation.",
                      descAr: "معلمون معتمدون يخضعون لبرامج تدريب مستمرة ومعايير حماية وسلامة دولية.",
                    },
                    {
                      title: "Bilingual English & Arabic Fluency",
                      titleAr: "إتقان ثنائي للغتين العربية والإنجليزية",
                      desc: "Nurturing mother-tongue mastery alongside British curriculum English proficiency.",
                      descAr: "ترسيخ الهوية واللغة العربية جنباً إلى جنب مع إتقان اللغة الإنجليزية للمناهج البريطانية.",
                    },
                    {
                      title: "Active Family & Community Partnership",
                      titleAr: "شراكة وثيقة مع أولياء الأمور والمجتمع",
                      desc: "Continuous transparent communication and collaborative engagement throughout your child's journey.",
                      descAr: "تواصل شفاف ومستمر ومشاركة فاعلة في مختلف محطات المسار التعليمي للطالب.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C6A477] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">{t(item.title, item.titleAr)}</div>
                        <div className="text-xs text-white/60 mt-0.5">{t(item.desc, item.descAr)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Image Composition */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg border border-white/10">
                    <Image
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                      alt="Classroom learning engagement"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 bg-[#0A1C2C] border border-[#C6A477]/30 rounded-sm">
                    <div className="text-3xl font-serif text-[#C6A477]">12+</div>
                    <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                      {t("Years of Educational Leadership in Oman", "عاماً من الريادة التعليمية في عُمان")}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="p-6 bg-[#0A1C2C] border border-[#C6A477]/30 rounded-sm">
                    <div className="text-3xl font-serif text-[#C6A477]">35+</div>
                    <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                      {t("Nationalities in Our Diverse Community", "جنسية في مجتمعنا التعليمي المتنوع")}
                    </div>
                  </div>
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg border border-white/10">
                    <Image
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                      alt="Early childhood inquiry and exploration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. LEARNING JOURNEY (Educational Pathway)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-white border-b border-[#102D46]/10">
          <div className="editorial-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                {t("Continuous Pathway", "المسار التعليمي المستمر")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#102D46]">
                {t("The Learning Journey at GES", "المسار التعليمي في GES")}
              </h2>
              <p className="text-base text-[#4B6375] mt-3">
                {t(
                  "A seamless progression from exploratory infancy through to globally competitive secondary qualifications.",
                  "مسار معرفي مترابط يبدأ من استكشاف الطفولة المبكرة وصولاً إلى التميز في الشهادات الثانوية الدولية."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {LEARNING_JOURNEY_STAGES.map((stage) => (
                <div
                  key={stage.stage}
                  className="bg-[#F7F6F2] p-6 rounded-sm border-t-4 border-[#C6A477] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl font-serif text-[#C6A477] font-bold mb-3">
                      {stage.stage}
                    </div>
                    <h3 className="text-lg font-serif text-[#102D46] mb-1">
                      {t(stage.title, stage.titleAr)}
                    </h3>
                    <div className="text-xs text-[#102D46] font-semibold mb-2">
                      {t(stage.age, stage.ageAr)}
                    </div>
                    <div className="text-[11px] text-[#A58356] font-medium mb-3 uppercase tracking-wider">
                      {t(stage.framework, stage.frameworkAr)}
                    </div>
                    <p className="text-xs text-[#4B6375] leading-relaxed">
                      {t(stage.description, stage.descriptionAr)}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#102D46]/10 text-[11px] text-[#102D46]/70 font-medium">
                    {t(stage.campuses, stage.campusesAr)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. CAMPUS EXPERIENCE (Curated Gallery)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-[#F7F6F2]">
          <div className="editorial-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                  {t("Environment as Teacher", "البيئة التعليمية")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                  {t("The Campus Experience", "بيئة التعلم والحرم المدرسي")}
                </h2>
              </div>
              <p className="text-sm text-[#4B6375] max-w-md mt-4 md:mt-0">
                {t(
                  "Our campuses are engineered to maximize natural light, sensory engagement, and collaborative inquiry for students of every age.",
                  "مرافق تعليمية متطورة مصممة لتحفيز الاستكشاف الحسي والتعلم التفاعلي والرياضي في بيئة آمنة وصحية."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
                  caption: "Modern Architectural Learning Spaces",
                  captionAr: "فضاءات معمارية تعليمية حديثة",
                },
                {
                  img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
                  caption: "Reggio-Inspired Early Years Sensory Play",
                  captionAr: "استكشاف حسي مستوحى من ريجيو إميليا",
                },
                {
                  img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
                  caption: "Cambridge Science & Computing Laboratories",
                  captionAr: "مختبرات كامبريدج للعلوم والحاسوب",
                },
                {
                  img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
                  caption: "Collaborative Student Communities",
                  captionAr: "بيئة تعاونية محفزة للطلبة",
                },
              ].map((item, idx) => (
                <div key={idx} className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
                  <Image
                    src={item.img}
                    alt={item.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D46] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                    {t(item.caption, item.captionAr)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            8. NEWS & INSIGHTS (Latest Group Updates)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-white border-y border-[#102D46]/10">
          <div className="editorial-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                  {t("Group Announcements", "أخبار المجموعة")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#102D46]">
                  {t("News & Educational Insights", "الأخبار والمستجدات")}
                </h2>
              </div>
              <Link
                href="/news"
                className="text-xs uppercase tracking-widest font-semibold text-[#102D46] hover:text-[#C6A477] flex items-center gap-1.5 mt-4 md:mt-0"
              >
                <span>{t("All News & Stories", "جميع الأخبار")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {NEWS_STORIES.map((news) => (
                <article
                  key={news.id}
                  className="bg-[#F7F6F2] rounded-sm overflow-hidden border border-[#102D46]/10 flex flex-col group hover:shadow-lg transition-all"
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

                  <div className="p-6 flex flex-col flex-grow">
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

                    <h3 className="text-lg font-serif text-[#102D46] mb-3 group-hover:text-[#C6A477] transition-colors line-clamp-2">
                      {t(news.title, news.titleAr)}
                    </h3>

                    <p className="text-xs text-[#4B6375] line-clamp-3 mb-4 leading-relaxed">
                      {t(news.summary, news.summaryAr)}
                    </p>

                    <div className="mt-auto pt-2">
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

        {/* ========================================================
            9. ENQUIRY CTA & ADMISSIONS FORM
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-[#102D46] relative overflow-hidden" id="enquiry">
          <div className="editorial-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 text-white space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block">
                  {t("Begin The Journey", "ابدأ الرحلة")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.15]">
                  {t("Begin Your Educational Journey With Us", "ابدأ رحلتك التعليمية معنا")}
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {t(
                    "Whether enrolling in Al Shomoukh International Private School or reserving a place in Shomoukh Early Childhood Centers, our admissions team is prepared to guide your family through every step.",
                    "سواء كنت ترغب بالتسجيل في مدرسة الشموخ العالمية الخاصة أو حجز مقعد لطفلك في مراكز الشموخ للتعليم المبكر، فإن فريق القبول لدينا جاهز للإجابة على جميع استفساراتكم."
                  )}
                </p>

                <div className="p-6 bg-[#0A1C2C] border border-[#C6A477]/30 rounded-sm space-y-3">
                  <div className="text-xs uppercase tracking-wider text-[#C6A477] font-semibold">
                    {t("Direct Contact Desk", "خط الاستفسار المباشر")}
                  </div>
                  <div className="text-lg font-serif text-white">
                    {GES_INFO.contact.phone}
                  </div>
                  <div className="text-xs text-white/60">
                    {GES_INFO.contact.email} • {t(GES_INFO.contact.workingHours, GES_INFO.contact.workingHoursAr)}
                  </div>
                </div>
              </div>

              {/* Admissions Interactive Form */}
              <div className="lg:col-span-7">
                <EnquiryForm defaultInstitution="" source="Homepage CTA" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
