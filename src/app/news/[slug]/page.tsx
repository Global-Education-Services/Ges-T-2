import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NEWS_STORIES } from "@/data/ges-data";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return NEWS_STORIES.map((news) => ({
    slug: news.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = NEWS_STORIES.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Article Header */}
        <section className="bg-[#102D46] text-white py-16 lg:py-20 border-b border-[#C6A477]/30">
          <div className="editorial-container max-w-4xl">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A477] hover:underline mb-6 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to News & Insights</span>
            </Link>

            <div className="flex items-center gap-3 text-xs text-white/60 mb-3">
              <span className="px-2.5 py-0.5 bg-[#C6A477] text-[#102D46] font-semibold uppercase tracking-wider rounded-xs">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C6A477]" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C6A477]" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 lg:py-20">
          <div className="editorial-container max-w-4xl">
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-xl mb-12 border border-[#102D46]/10">
              <Image src={article.image} alt={article.title} fill priority className="object-cover" />
            </div>

            <div className="bg-white p-8 md:p-12 rounded-sm border border-[#102D46]/10 shadow-sm space-y-6">
              <p className="text-lg font-serif text-[#102D46] italic border-l-4 border-[#C6A477] pl-4 leading-relaxed">
                {article.summary}
              </p>

              {article.content.map((paragraph, idx) => (
                <p key={idx} className="text-base text-[#4B6375] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-8 border-t border-[#102D46]/10 flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider text-[#4B6375]">
                  Published by Global Education Services LLC
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102D46] hover:text-[#C6A477]"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Announcement</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
