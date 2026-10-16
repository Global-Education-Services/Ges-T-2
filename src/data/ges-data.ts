import { Institution, LeadershipMember, NewsItem, CareerOpening } from "@/types";

export const GES_INFO = {
  name: "Global Education Services L.L.C.",
  shortName: "GES Quality Education",
  nameAr: "خدمات التعليم العالمية ش.م.م",
  tagline: "Shaping Futures Through Quality Education",
  taglineAr: "صناعة المستقبل من خلال التعليم النوعي",
  foundingYear: 2012,
  founders: "Founded upon the lifelong visionary dedication of the late Honorable Sheikh Salim bin Hamood Al Hashmi and Sheikha Thuriya Mohamed Salim Al Rahbi.",
  vision: "To be the leading private educational management entity in the Sultanate of Oman, inspiring progressive minds, upholding cultural values, and creating benchmarks in global educational excellence.",
  visionAr: "أن نكون المؤسسة التعليمية الرائدة في سلطنة عمان، نلهم العقول الواعدة ونرسخ القيم الأصيلة ونضع معايير التميز التعليمي العالمي.",
  mission: "To deliver exemplary British and international curricula infused with cultural integrity, developing critical thinkers, ethical leaders, and lifelong learners equipped for Oman's Vision 2040.",
  missionAr: "تقديم مناهج بريطانية وعالمية رائدة ممزوجة بالقيم العمانية الأصيلة، لتنشئة مفكرين متميزين وقادة أخلاقيين مساهمين في رؤية عمان 2040.",
  contact: {
    address: "P.O. Box 1756, Airport Heights, Postal Code 111, Muscat, Sultanate of Oman",
    addressAr: "ص.ب 1756، مرتفعات المطار، الرمز البريدي 111، مسقط، سلطنة عُمان",
    phone: "+968 24554422",
    email: "info@ges.om",
    careersEmail: "careers@ges.om",
    admissionsEmail: "admissions@ges.om",
    workingHours: "Sunday – Thursday: 7:30 AM – 3:30 PM",
    workingHoursAr: "الأحد – الخميس: 7:30 صباحاً – 3:30 مساءً",
  },
  social: {
    instagram: "https://instagram.com/ges_oman",
    linkedin: "https://linkedin.com/company/ges-oman",
    twitter: "https://twitter.com/ges_oman",
  },
};

export const INSTITUTIONS: Institution[] = [
  {
    id: "sips",
    slug: "al-shomoukh-international-school",
    name: "Al Shomoukh International Private School",
    nameAr: "مدرسة الشموخ العالمية الخاصة",
    type: "school",
    location: "Al Hail South, Muscat",
    locationAr: "الحيل الجنوبية، مسقط",
    ageRange: "Ages 3 to 18 (KG1 to Grade 12)",
    ageRangeAr: "من عمر 3 إلى 18 سنة (الروضة حتى الصف 12)",
    curriculum: "British National Curriculum (IGCSE & A-Levels) & Bilingual Stream",
    curriculumAr: "المنهج الوطني البريطاني (IGCSE & A-Levels) والبرنامج ثنائي اللغة",
    established: 2015,
    website: "https://alshomoukh.com",
    description:
      "A distinguished British curriculum international school in Muscat fostering academic rigor, cultural identity, and the RISE core values (Respect, Integrity, Success, Excellence).",
    descriptionAr:
      "صرح تعليمي متميز يطبق المنهج البريطاني معززاً بالقيم الأساسية (الاحترام، النزاهة، النجاح، والتميز) لتمكين قادة المستقبل.",
    fullOverview:
      "Established in 2015, Al Shomoukh International Private School (SIPS) provides comprehensive K-12 education grounded in British Cambridge academic standards. Students benefit from state-of-the-art science laboratories, digital learning spaces, creative arts studios, and athletic complexes, preparing them for top global universities and national leadership.",
    highlights: [
      "Accredited Cambridge Assessment International Education Centre",
      "Robust Bilingual Stream bridging international standards with Arabic & Islamic values",
      "Comprehensive STEM, Robotics, and Digital Literacy Labs",
      "World-class sports and performing arts facilities",
      "Dedicated university preparation and academic guidance counseling",
    ],
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    ],
    stats: [
      { label: "Grade Levels", value: "KG1 - Gr 12" },
      { label: "Accreditation", value: "Cambridge Int." },
      { label: "Student Nationalities", value: "35+" },
      { label: "Graduation Rate", value: "100%" },
    ],
    contact: {
      phone: "+968 24554422",
      email: "admissions@alshomoukh.com",
      address: "Building 212, Way 2515, Al Hail South, Muscat, Oman",
    },
  },
  {
    id: "ece-mouj",
    slug: "shomoukh-early-childhood-al-mouj",
    name: "Shomoukh Early Childhood Education — Al Mouj",
    nameAr: "مركز الشموخ للتعليم المبكر — الموج مسقط",
    type: "early-childhood",
    location: "Al Mouj Muscat (The Wave)",
    locationAr: "الموج مسقط",
    ageRange: "3 Months to 4 Years (Infants, Toddlers & Preschool)",
    ageRangeAr: "من عمر 3 أشهر إلى 4 سنوات (الرضع والبراعم ومرحلة ما قبل المدرسة)",
    curriculum: "UK Early Years Foundation Stage (EYFS) & Reggio Emilia Approach",
    curriculumAr: "منهاج مرحلة التأسيس للسنوات المبكرة البريطاني (EYFS) ونهج ريجيو إميليا",
    established: 2018,
    website: "https://shomoukh.com",
    description:
      "A purpose-built early learning sanctuary at Al Mouj Muscat, embracing the UK EYFS framework and Reggio Emilia principles where environment acts as the 'third teacher'.",
    descriptionAr:
      "بيئة نموذجية مخصصة للطفولة المبكرة في الموج مسقط تعتمد الإطار البريطاني EYFS وفلسفة ريجيو إميليا التعليمية الرائدة.",
    fullOverview:
      "Shomoukh ECE Al Mouj provides an inspiring, safe, and stimulating environment specifically planned for children from 3 months through 4 years of age. Integrating the world-renowned UK EYFS curriculum with project-based inquiry from Reggio Emilia, learning is shaped around natural curiosities, exploratory play, language acquisition, and sensory growth.",
    highlights: [
      "Natural-light sensory ateliers and child-centric design",
      "Bilingual English and Arabic language immersion from early infancy",
      "Low child-to-educator ratios with certified early childhood specialists",
      "Piazza and outdoor interactive discovery gardens",
      "Secure, sanitized, pediatric-standard hygiene protocols",
    ],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    ],
    stats: [
      { label: "Ages", value: "3m - 4 yrs" },
      { label: "Curriculum", value: "UK EYFS" },
      { label: "Philosophy", value: "Reggio Emilia" },
      { label: "Staff Ratio", value: "Up to 1:3" },
    ],
    contact: {
      phone: "+968 24554422",
      email: "info@shomoukh.com",
      address: "Al Mouj Marina District, Muscat, Sultanate of Oman",
    },
  },
  {
    id: "ece-qurum",
    slug: "shomoukh-early-childhood-al-qurum",
    name: "Shomoukh Early Childhood Education — Al Qurum",
    nameAr: "مركز الشموخ للتعليم المبكر — القرم",
    type: "early-childhood",
    location: "Al Qurum, Muscat",
    locationAr: "القرم، مسقط",
    ageRange: "3 Months to 4 Years",
    ageRangeAr: "من عمر 3 أشهر إلى 4 سنوات",
    curriculum: "UK Early Years Foundation Stage (EYFS)",
    curriculumAr: "منهاج التأسيس للسنوات المبكرة البريطاني (EYFS)",
    established: 2020,
    website: "https://shomoukh.com",
    description:
      "A serene early childhood development center in the heart of Al Qurum, combining nurturing care, sensory exploration, and foundational emotional growth.",
    descriptionAr:
      "مركز رعاية وتعليم مبكر في قلب منطقة القرم، يركز على التطوير الحركي واللغوي والاجتماعي في بيئة محفزة وآمنة.",
    fullOverview:
      "Situated in the central district of Al Qurum, this campus serves families seeking premier early years education. The campus is crafted with dedicated motor skill zones, peaceful resting sanctuaries, expressive arts workshops, and organic play spaces designed to instil wonder and social confidence.",
    highlights: [
      "Custom indoor and shaded outdoor physical development structures",
      "Structured phonics and foundational numeracy through active play",
      "Parent partnership app with daily progress tracking and milestone reports",
      "Experienced multi-lingual team of early years educators",
      "Nutritious snack planning and organic wellbeing practices",
    ],
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    ],
    stats: [
      { label: "Location", value: "Muscat Central" },
      { label: "Curriculum", value: "UK EYFS" },
      { label: "Environment", value: "Child-Centric" },
      { label: "Care Model", value: "Holistic" },
    ],
    contact: {
      phone: "+968 24554422",
      email: "qurum@shomoukh.com",
      address: "Way 2133, Shati Al Qurum, Muscat, Oman",
    },
  },
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Honorable Sheikh Salim Hamood Al Hashmi",
    nameAr: "المكرم الشيخ سالم بن حمود الهاشمي",
    title: "Founder & Chairman",
    titleAr: "المؤسس ورئيس مجلس الإدارة",
    role: "Founding Patron",
    bio: "Pioneer in private educational investment in Oman whose visionary leadership laid the foundation for GES Quality Education and its mission to empower generations of Omani learners.",
    bioAr: "رائد في قطاع التعليم الخاص في سلطنة عُمان، أسس اللبنات الأولى لشركة خدمات التعليم العالمية لإعداد أجيال واعدة تسهم في نهضة الوطن.",
  },
  {
    name: "Sheikha Janat Salim Hamood Al Hashmi",
    nameAr: "الشيخة جنات بنت سالم الهاشمية",
    title: "Chief Executive Officer (CEO)",
    titleAr: "الرئيس التنفيذي",
    role: "Executive Leadership",
    bio: "Driving institutional strategy, educational partnerships, and operational excellence across the GES network to uphold international benchmarks in Omani education.",
    bioAr: "تقود الاستراتيجية المؤسسية والشراكات التعليمية والتميز التشغيلي في شبكة مدارس ومراكز خدمات التعليم العالمية وفق أعلى المعايير الدولية.",
  },
  {
    name: "Sheikha Jinan Salim Hamood Al Hashmi",
    nameAr: "الشيخة جنان بنت سالم الهاشمية",
    title: "Managing Director",
    titleAr: "المدير العام والعضو المنتدب",
    role: "Institutional Direction",
    bio: "Guiding institutional governance, organizational growth, and quality assurance systems to foster transformative learning across all campuses.",
    bioAr: "تشرف على الحوكمة والتوسع المؤسسي وتطبيق نظم جودة التعليم لضمان تقديم تجربة تعليمية ثرية ومبتكرة في جميع المؤسسات.",
  },
  {
    name: "Sheikh Julanda Salim Hamood Al Hashmi",
    nameAr: "الشيخ جلندى بن سالم الهاشمي",
    title: "Vice President",
    titleAr: "نائب الرئيس",
    role: "Corporate Strategy",
    bio: "Directing strategic infrastructure, digital expansion, and sustainable institutional scaling in alignment with the educational goals of Oman Vision 2040.",
    bioAr: "يقود التطوير الاستراتيجي والتحول الرقمي وتنمية البنية الأساسية للمشاريع التعليمية تماشياً مع مستهدفات رؤية عُمان 2040.",
  },
  {
    name: "Ms. Sarah Saeed",
    nameAr: "الأستاذة سارة سعيد",
    title: "Head of Academics",
    titleAr: "رئيسة الشؤون الأكاديمية",
    role: "Academic Governance",
    bio: "Leading curriculum harmonization, teacher professional development, and rigorous instructional standards across preschool through secondary stages.",
    bioAr: "تشرف على تطوير المناهج وتأهيل الكوادر التربوية ومتابعة معايير التحصيل الأكاديمي عبر مختلف المراحل التعليمية.",
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    titleAr: "التميز الأكاديمي",
    subtitle: "British curriculum rigor grounded in high expectations",
    subtitleAr: "مناهج بريطانية دولية قائمة على أعلى معايير الجودة",
    description:
      "We deliver demanding, globally accredited learning pathways from early foundational literacy through Cambridge IGCSE and A-Levels, fostering analytical reasoning and intellectual curiosity.",
    descriptionAr:
      "نقدم مسارات تعليمية معتمدة دولياً من التأسيس المبكر حتى الشهادة العامة البريطانية (IGCSE) والمستوى المتقدم (A-Levels) لتنمية التفكير النقدي والشغف المعرفي.",
    icon: "GraduationCap",
  },
  {
    id: "holistic-development",
    title: "Holistic Development",
    titleAr: "التطوير المتكامل",
    subtitle: "Character, creativity, and the RISE values framework",
    subtitleAr: "بناء الشخصية والإبداع وقيم منظومة (RISE)",
    description:
      "Education transcends academic marks. Through sports, the performing arts, social leadership, and our RISE core values (Respect, Integrity, Success, Excellence), we nurture well-rounded global citizens.",
    descriptionAr:
      "التعليم يتجاوز الكتب الدراسية؛ عبر الرياضة والفنون والقيادة المجتمعية ومنظومة قيمنا، نبني مواطنين فاعلين متوازنين خلقياً وعلمياً.",
    icon: "HeartHandshake",
  },
  {
    id: "early-childhood",
    title: "Early Childhood Mastery",
    titleAr: "ريادة الطفولة المبكرة",
    subtitle: "Reggio Emilia inquiry & EYFS foundational frameworks",
    subtitleAr: "استكشاف ريجيو إميليا ومعايير السنوات المبكرة EYFS",
    description:
      "The early years represent the most critical developmental window. Our purpose-crafted environments treat space as the 'third teacher', stimulating imagination, sensory inquiry, and social confidence.",
    descriptionAr:
      "السنوات الأولى هي حجر الأساس؛ نصمم بيئاتنا التعليمية لتكون 'المعلم الثالث' المحفز للخيال والاستكشاف الحسي وبناء الثقة بالنفس.",
    icon: "Baby",
  },
  {
    id: "future-ready",
    title: "Future-Ready Education",
    titleAr: "تعليم جاهز للمستقبل",
    subtitle: "STEM innovation aligned with Oman Vision 2040",
    subtitleAr: "الابتكار الرقمي والتقني المتوافق مع رؤية عُمان 2040",
    description:
      "Integrating digital literacy, computational reasoning, and sustainable environmental thinking, empowering our learners to navigate and shape an evolving global landscape.",
    descriptionAr:
      "دمج مهارات التفكير الرقمي والبرمجة وحل المشكلات والاستدامة لتمكين طلبتنا من قيادة المستقبل وصناعته بثقة واقتدار.",
    icon: "Sparkles",
  },
];

export const NEWS_STORIES: NewsItem[] = [
  {
    id: "news-1",
    slug: "cambridge-academic-excellence-2024",
    title: "SIPS Students Achieve Exceptional Results in Cambridge IGCSE & A-Levels",
    titleAr: "طلبة مدرسة الشموخ العالمية يحققون نتائج باهرة في امتحانات كامبريدج",
    date: "October 2024",
    category: "Academic Achievement",
    categoryAr: "إنجازات أكاديمية",
    readTime: "3 min read",
    summary:
      "Al Shomoukh International Private School celebrates superior pass rates and top subject distinctions across Cambridge qualifications in Muscat.",
    summaryAr:
      "مدرسة الشموخ العالمية الخاصة تحتفي بتفوق طلبتها وتحقيقهم أعلى المعدلات في امتحانات كامبريدج البريطانية.",
    content: [
      "Global Education Services LLC (GES) is proud to announce outstanding outcomes for the graduating cohort at Al Shomoukh International Private School. Students demonstrated exemplary mastery in core sciences, advanced mathematics, and the humanities.",
      "With 100% university admission qualifications achieved, graduates are pursuing distinguished undergraduate pathways in engineering, medicine, finance, and international relations across leading global and regional universities.",
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "news-2",
    slug: "shomoukh-ece-al-mouj-expansion",
    title: "Shomoukh ECE Al Mouj Introduces New Sensory Atelier for Toddler Explorations",
    titleAr: "مركز الشموخ بالتعليم المبكر بالموج يفتتح مرسم واستوديو الحواس الجديد",
    date: "September 2024",
    category: "Campus Innovation",
    categoryAr: "تطوير المرافق",
    readTime: "4 min read",
    summary:
      "A purpose-crafted Reggio-inspired atelier enhancing light, natural materials, and child-led creative expression opens at our Al Mouj campus.",
    summaryAr:
      "افتتاح استوديو تفاعلي مستوحى من فلسفة ريجيو إميليا العالمية لدعم الاستكشاف الحسي للأطفال في مجمع الموج مسقط.",
    content: [
      "Consistent with GES's philosophy of treating the environment as the 'third teacher', the newly unveiled light and sensory studio provides infants and toddlers with open-ended exploratory opportunities.",
      "The atelier incorporates sustainably sourced natural textures, shadow projection tables, and bilingual story nooks that deepen cognitive progression in early childhood.",
    ],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "news-3",
    slug: "oman-vision-2040-education-symposium",
    title: "GES Leadership Participates in National Forum on Education Transformation",
    titleAr: "قيادة خدمات التعليم العالمية تشارك في ملتقى التحول التعليمي الوطني",
    date: "August 2024",
    category: "Institutional Impact",
    categoryAr: "المسؤولية المؤسسية",
    readTime: "3 min read",
    summary:
      "GES executive leaders share insights on private education governance, bilingual competence, and early childhood priorities aligned with Oman Vision 2040.",
    summaryAr:
      "ممثلو الإدارة التنفيذية لـ GES يشاركون رؤاهم حول حوكمة التعليم الخاص وتطوير مهارات المستقبل دعماً لرؤية عُمان 2040.",
    content: [
      "At the annual education leadership symposium in Muscat, GES executives emphasized the indispensable role of early years intervention in building resilient foundational cognitive skills.",
      "The group reiterated its commitment to continuous faculty investment, ensuring that Omani cultural identity and global scholastic rigor flourish side by side.",
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
  },
];

export const CAREER_LISTINGS: CareerOpening[] = [
  {
    id: "car-1",
    title: "Primary Key Stage 2 English & Humanities Teacher",
    department: "Academic Faculty",
    institution: "Al Shomoukh International Private School",
    location: "Al Hail South, Muscat",
    type: "Full-Time",
    experience: "3+ Years with UK Curriculum / PGCE",
    description: "Seeking an enthusiastic, certified educator to deliver British National Curriculum English and Humanities to Key Stage 2 students.",
    requirements: [
      "Bachelor's degree in Education or relevant subject with PGCE / QTS",
      "Demonstrated experience teaching the UK curriculum",
      "Proficiency in formative assessment and inquiry-based pedagogy",
      "Commitment to extracurricular student enrichment",
    ],
  },
  {
    id: "car-2",
    title: "Early Years Lead Practitioner (EYFS)",
    department: "Early Childhood",
    institution: "Shomoukh Early Childhood Education — Al Mouj",
    location: "Al Mouj Muscat",
    type: "Full-Time",
    experience: "2+ Years in EYFS / Reggio Emilia environment",
    description: "Join our dedicated team guiding infants and preschool learners through play-based developmental milestones and sensory inquiry.",
    requirements: [
      "CACHE Level 3 Diploma in Early Childhood or Degree in Early Childhood Studies",
      "Thorough understanding of UK EYFS development matters framework",
      "Warm, patient, and collaborative communicative style",
      "Fluency in English (bilingual Arabic advantageous)",
    ],
  },
  {
    id: "car-3",
    title: "Secondary Computer Science & STEM Teacher",
    department: "Secondary School",
    institution: "Al Shomoukh International Private School",
    location: "Al Hail South, Muscat",
    type: "Full-Time",
    experience: "4+ Years teaching Cambridge IGCSE / A-Levels",
    description: "Lead our secondary computer science program, inspiring students in coding, algorithm design, and robotics exploration.",
    requirements: [
      "Degree in Computer Science, IT, or Engineering + Teaching Credential",
      "Proven track record preparing students for Cambridge IGCSE Computer Science",
      "Experience running robotics clubs or coding workshops",
    ],
  },
];

export const LEARNING_JOURNEY_STAGES = [
  {
    stage: "01",
    title: "Early Foundations",
    titleAr: "مرحلة التأسيس المبكر",
    age: "Ages 3 Months – 4 Years",
    ageAr: "3 أشهر – 4 سنوات",
    campuses: "Shomoukh ECE Al Mouj & Al Qurum",
    campusesAr: "مراكز الشموخ للتعليم المبكر بالموج والقرم",
    framework: "UK EYFS & Reggio Emilia",
    frameworkAr: "الإطار البريطاني للسنوات المبكرة وفلسفة ريجيو",
    description:
      "Sensory discovery, language acquisition, emotional security, and playful inquiry in intentionally designed environments.",
    descriptionAr:
      "الاستكشاف الحسي واكتساب اللغة والأمان العاطفي في بيئات مصممة بعناية لتحفيز الفضول المعرفي.",
  },
  {
    stage: "02",
    title: "Primary Education",
    titleAr: "التعليم الأساسي والابتدائي",
    age: "Ages 5 – 11 (Grades 1 – 5)",
    ageAr: "5 – 11 سنة (الصفوف 1 – 5)",
    campuses: "Al Shomoukh International School",
    campusesAr: "مدرسة الشموخ العالمية الخاصة",
    framework: "Cambridge Primary & Bilingual Core",
    frameworkAr: "منهج كامبريدج الابتدائي والبرنامج ثنائي اللغة",
    description:
      "Core literacy, mathematical reasoning, scientific enquiry, Arabic language mastery, and creative expression through the RISE values.",
    descriptionAr:
      "إتقان القراءة والكتابة والرياضيات والعلوم، مع ترسيخ اللغة العربية والتربية الإسلامية وقيم منظومة (RISE).",
  },
  {
    stage: "03",
    title: "Middle & Secondary",
    titleAr: "المرحلة المتوسطة والثانوية",
    age: "Ages 11 – 16 (Grades 6 – 10)",
    ageAr: "11 – 16 سنة (الصفوف 6 – 10)",
    campuses: "Al Shomoukh International School",
    campusesAr: "مدرسة الشموخ العالمية الخاصة",
    framework: "Cambridge Lower Secondary & IGCSE",
    frameworkAr: "برنامج كامبريدج المتوسط وامتحانات IGCSE",
    description:
      "Subject specialization, rigorous lab investigations, critical discourse, and leadership opportunities in student governance.",
    descriptionAr:
      "التخصص المعرفي الدقيق، والتجارب المخبرية المتقدمة، وبناء التفكير التحليلي والمهارات القيادية لدى الطلبة.",
  },
  {
    stage: "04",
    title: "Senior Pathways & Future Readiness",
    titleAr: "المرحلة الثانوية العليا والاستعداد الجامعي",
    age: "Ages 16 – 18 (Grades 11 – 12)",
    ageAr: "16 – 18 سنة (الصفوف 11 – 12)",
    campuses: "Al Shomoukh International School",
    campusesAr: "مدرسة الشموخ العالمية الخاصة",
    framework: "Cambridge International A-Levels",
    frameworkAr: "المستوى المتقدم كامبريدج (A-Levels)",
    description:
      "Advanced pre-university academic qualifications, university admissions counseling, research portfolios, and global citizenship.",
    descriptionAr:
      "التأهيل الأكاديمي المتقدم للالتحاق بأعرق الجامعات العالمية والمحلية، مع الإرشاد المهني والمشاريع البحثية المتخصصة.",
  },
];
