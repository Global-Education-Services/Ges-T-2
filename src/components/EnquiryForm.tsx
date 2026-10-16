"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INSTITUTIONS } from "@/data/ges-data";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface EnquiryFormProps {
  defaultInstitution?: string;
  source?: string;
}

export default function EnquiryForm({ defaultInstitution = "", source = "Website General" }: EnquiryFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    institution: defaultInstitution || "",
    gradeOrAge: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email || !formData.phone) {
      setStatus("error");
      setErrorMessage(t("Please fill in all mandatory fields.", "يرجى ملء جميع الحقول المطلوبة."));
      return;
    }

    if (!formData.consent) {
      setStatus("error");
      setErrorMessage(t("Please agree to the privacy policy to proceed.", "يرجى الموافقة على سياسة الخصوصية للمتابعة."));
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        setFormData({
          parentName: "",
          email: "",
          phone: "",
          institution: defaultInstitution || "",
          gradeOrAge: "",
          message: "",
          consent: false,
        });
      } else {
        setStatus("error");
        setErrorMessage(resData.message || t("Failed to submit enquiry. Please try again.", "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."));
      }
    } catch {
      setStatus("error");
      setErrorMessage(t("Network error. Please try again or call us directly.", "تعذر الاتصال بالخادم. يرجى الاتصال بنا هاتفياً."));
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-[#C6A477]/20 relative">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-[#C6A477] font-semibold block mb-1">
          {t("Admissions & General Enquiries", "القبول والتسجيل والاستفسارات")}
        </span>
        <h3 className="text-2xl font-serif text-[#102D46]">
          {t("Connect With Our Admissions Team", "تواصل مع فريق القبول والتسجيل")}
        </h3>
        <p className="text-sm text-[#4B6375] mt-1.5">
          {t(
            "Submit your inquiry for school visits, registration requirements, or early years program details.",
            "أرسل استفسارك لحجز جولة في الحرم المدرسي أو لمعرفة متطلبات التسجيل ورسوم البرامج."
          )}
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-[#DCEAF0]/50 border border-[#102D46]/20 rounded-sm text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#102D46] mx-auto" />
          <h4 className="text-lg font-serif text-[#102D46]">
            {t("Thank You. Your Enquiry Has Been Received.", "شكراً لك. تم استلام طلبك بنجاح.")}
          </h4>
          <p className="text-sm text-[#4B6375] max-w-md mx-auto">
            {t(
              "A member of our educational advisory team will contact you within 24 business hours to assist you with the next steps.",
              "سيتواصل معك أحد المستشارين التربويين في غضون 24 ساعة عمل لمساعدتك في الخطوات التالية."
            )}
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2 text-xs font-semibold uppercase tracking-wider bg-[#102D46] text-white rounded-sm hover:bg-[#1A3E5E]"
          >
            {t("Submit Another Enquiry", "إرسال استفسار آخر")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#102D46] font-medium mb-1">
                {t("Parent / Guardian Name *", "اسم ولي الأمر *")}
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                placeholder={t("e.g. Salim Al Harthy", "مثال: سالم الحارثي")}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#102D46]/15 rounded-sm focus:outline-none focus:border-[#C6A477] focus:ring-1 focus:ring-[#C6A477]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#102D46] font-medium mb-1">
                {t("Email Address *", "البريد الإلكتروني *")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@domain.com"
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#102D46]/15 rounded-sm focus:outline-none focus:border-[#C6A477] focus:ring-1 focus:ring-[#C6A477]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#102D46] font-medium mb-1">
                {t("Phone Number (with Country Code) *", "رقم الهاتف مع رمز الدولة *")}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+968 9XXXXXXX"
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#102D46]/15 rounded-sm focus:outline-none focus:border-[#C6A477] focus:ring-1 focus:ring-[#C6A477]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#102D46] font-medium mb-1">
                {t("Institution of Interest", "المؤسسة التعليمية")}
              </label>
              <select
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#102D46]/15 rounded-sm focus:outline-none focus:border-[#C6A477] focus:ring-1 focus:ring-[#C6A477]"
              >
                <option value="">{t("Select Institution (Optional)", "اختر المؤسسة (اختياري)")}</option>
                {INSTITUTIONS.map((inst) => (
                  <option key={inst.id} value={inst.name}>
                    {t(inst.name, inst.nameAr)}
                  </option>
                ))}
                <option value="General Corporate Inquiry">{t("General Group Inquiry", "استفسار عام عن المجموعة")}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#102D46] font-medium mb-1">
              {t("Student Age / Current Grade", "عمر الطفل / الصف الدراسي الحالي")}
            </label>
            <input
              type="text"
              name="gradeOrAge"
              value={formData.gradeOrAge}
              onChange={handleChange}
              placeholder={t("e.g. 2 years old / Grade 7", "مثال: سنتان / الصف السابع")}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#102D46]/15 rounded-sm focus:outline-none focus:border-[#C6A477] focus:ring-1 focus:ring-[#C6A477]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#102D46] font-medium mb-1">
              {t("Your Message or Specific Questions", "رسالتك أو استفسارك")}
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("Tell us about your educational interests or preferred visit dates...", "اكتب تفاصيل استفسارك أو الموعد المفضل لزيارة الحرم المدرسي...")}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border border-[#102D46]/15 rounded-sm focus:outline-none focus:border-[#C6A477] focus:ring-1 focus:ring-[#C6A477]"
            />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-[#102D46]/30 text-[#102D46] focus:ring-[#C6A477]"
            />
            <label htmlFor="consent" className="text-xs text-[#4B6375] leading-relaxed">
              {t(
                "I consent to Global Education Services LLC processing this information to respond to my enquiry and provide updates in accordance with the Privacy Policy.",
                "أوافق على قيام شركة خدمات التعليم العالمية بمعالجة هذه البيانات للتواصل معي والرد على استفساري وفقاً لسياسة الخصوصية."
              )}
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 px-6 bg-gradient-to-r from-[#102D46] to-[#1A3E5E] hover:from-[#1A3E5E] hover:to-[#102D46] text-white font-semibold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            <span>{status === "submitting" ? t("Submitting...", "جاري الإرسال...") : t("Submit Educational Enquiry", "إرسال طلب الاستفسار")}</span>
            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}
