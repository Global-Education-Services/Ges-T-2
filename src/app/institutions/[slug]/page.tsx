import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { INSTITUTIONS } from "@/data/ges-data";
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export async function generateStaticParams() {
  return INSTITUTIONS.map((inst) => ({
    slug: inst.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function InstitutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const institution = INSTITUTIONS.find((i) => i.slug === slug);

  if (!institution) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center bg-[#102D46] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={institution.image}
              alt={institution.name}
              fill
              priority
              className="object-cover opacity-25 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102D46] via-[#102D46]/80 to-transparent" />
          </div>

          <div className="editorial-container relative z-10 py-16 lg:py-20">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#DFC4A1] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#C6A477]/40">
                <MapPin className="w-3.5 h-3.5 text-[#C6A477]" />
                <span>{institution.location}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
                {institution.name}
              </h1>
              <p className="text-base text-white/80 max-w-2xl leading-relaxed">
                {institution.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={institution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#C6A477] text-[#102D46] font-semibold text-xs uppercase tracking-widest rounded-sm shadow-md hover:bg-[#DFC4A1] transition-all flex items-center gap-2"
                >
                  <span>Visit Official Campus Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#admissions-desk"
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest rounded-sm transition-all"
                >
                  Enquire for Admissions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-white border-y border-[#102D46]/10 py-8">
          <div className="editorial-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {institution.stats.map((s, idx) => (
                <div key={idx} className="border-l-2 border-[#C6A477] pl-4">
                  <div className="text-xs uppercase tracking-wider text-[#4B6375]">{s.label}</div>
                  <div className="text-xl font-serif font-bold text-[#102D46] mt-0.5">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview & Highlights */}
        <section className="py-20 lg:py-24">
          <div className="editorial-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Narrative & Highlights */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C6A477] font-semibold block mb-2">
                    Institutional Overview
                  </span>
                  <h2 className="text-3xl font-serif text-[#102D46]">
                    Educational Philosophy & Standards
                  </h2>
                  <p className="text-base text-[#4B6375] leading-relaxed mt-4">
                    {institution.fullOverview}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-lg font-serif text-[#102D46] mb-4">
                    Distinctive Institutional Pillars
                  </h3>
                  <div className="space-y-3">
                    {institution.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-sm border border-[#102D46]/10">
                        <CheckCircle2 className="w-5 h-5 text-[#C6A477] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#102D46] font-medium leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campus Gallery */}
                <div>
                  <h3 className="text-lg font-serif text-[#102D46] mb-4">
                    Campus Visuals & Environment
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {institution.gallery.map((g, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
                        <Image src={g} alt={`${institution.name} visual ${idx + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact & Admissions Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-8 rounded-sm border border-[#102D46]/10 shadow-sm space-y-6">
                  <h3 className="text-xl font-serif text-[#102D46]">
                    Campus Admissions Information
                  </h3>

                  <div className="space-y-4 text-sm text-[#4B6375]">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-[#C6A477] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#102D46]">Curriculum Framework</div>
                        <div>{institution.curriculum}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#C6A477] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#102D46]">Age Range & Cohorts</div>
                        <div>{institution.ageRange}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C6A477] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#102D46]">Campus Location</div>
                        <div>{institution.contact.address}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#C6A477] shrink-0" />
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#102D46]">Admissions Desk</div>
                        <a href={`tel:${institution.contact.phone}`} className="hover:text-[#C6A477]">
                          {institution.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#C6A477] shrink-0" />
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#102D46]">Direct Email</div>
                        <a href={`mailto:${institution.contact.email}`} className="hover:text-[#C6A477]">
                          {institution.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#102D46]/10">
                    <a
                      href={institution.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#102D46] hover:bg-[#1A3E5E] text-white text-xs uppercase tracking-widest font-semibold rounded-sm text-center block transition-colors"
                    >
                      Visit {institution.name} Portal
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-[#DCEAF0]/50 border border-[#102D46]/15 rounded-sm">
                  <div className="text-xs uppercase font-semibold text-[#102D46] mb-1">
                    Quality Assurance Guarantee
                  </div>
                  <p className="text-xs text-[#4B6375] leading-relaxed">
                    Operated under the strategic governance of Global Education Services LLC, maintaining full accreditation with the Ministry of Education, Oman, Cambridge Assessment, and EYFS UK standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Campus Enquiry Form */}
        <section className="py-20 bg-[#102D46]" id="admissions-desk">
          <div className="editorial-container max-w-4xl">
            <EnquiryForm defaultInstitution={institution.name} source={`Institution Detail - ${institution.name}`} />
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8 bg-white border-t border-[#102D46]/10">
          <div className="editorial-container text-center">
            <Link
              href="/institutions"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#102D46] hover:text-[#C6A477]"
            >
              <span>← Return to All Educational Institutions</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
