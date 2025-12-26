interface SocialLinkData {
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string;
  gradient: string;
  bgColor: string;
}

import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Send,
  Sprout,
  Heart,
  Users,
  Target,
  Award,
  Shield,
} from "lucide-react";

export const socialLinks: SocialLinkData[] = [
  {
    icon: Phone,
    title: "اتصل بنا",
    content: "0667 60 33 55",
    link: "https://instagram.com/rokay_chabab",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    content: "rokaychabab@gmail.com",
    link: "mailto:rokaychabab@gmail.com",
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Instagram,
    title: "إنستغرام",
    content: "@rokay_chabab",
    link: "https://instagram.com/rokay_chabab",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Facebook,
    title: "فيسبوك",
    content: "رُقي للشباب | Rokay",
    link: "https://www.facebook.com/roquaiCH?locale=fr_FR",
    gradient: "from-blue-600 to-indigo-700",
    bgColor: "bg-blue-50",
  },
];

export const features = [
  {
    icon: Sprout,
    title: "التزام بيئي حقيقي",
    description:
      "مبادرات خضراء مستدامة تحمي البيئة وتحافظ على الموارد الطبيعية",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Heart,
    title: "رعاية شاملة",
    description: "بيئة آمنة وداعمة لنمو وتطور الأطفال والشباب بشكل صحي",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Users,
    title: "مجتمع متماسك",
    description: "شبكة قوية من الأعضاء النشطين والمتطوعين المتحمسين",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Target,
    title: "تأثير قابل للقياس",
    description: "برامج مثبتة النجاح بنسبة رضا 98% وتأثير ملموس في المجتمع",
    gradient: "from-purple-500 to-violet-600",
  },
];

import { Lightbulb, HandHeart } from "lucide-react";

export interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  gradient: string;
}

export const values: Value[] = [
  {
    icon: Sprout,
    title: "الاستدامة البيئية",
    description:
      "نؤمن بحماية البيئة والمحافظة على الموارد الطبيعية للأجيال القادمة من خلال المبادرات الخضراء والتوعية البيئية.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Heart,
    title: "الرعاية والاهتمام",
    description:
      "نضع رعاية الأطفال والشباب في صميم عملنا، ونوفر بيئة آمنة وداعمة لنموهم وتطورهم الشخصي والاجتماعي.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Users,
    title: "بناء المجتمع",
    description:
      "نسعى لتعزيز الروابط المجتمعية وخلق مساحات للتواصل والتعاون بين أفراد المجتمع من مختلف الأعمار والخلفيات.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Target,
    title: "الالتزام والإتقان",
    description:
      "نلتزم بتقديم أعلى مستويات الجودة في جميع برامجنا وأنشطتنا، ونسعى للتحسين المستمر والتميز في كل ما نقوم به.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Lightbulb,
    title: "الإبداع والابتكار",
    description:
      "نشجع التفكير الإبداعي والحلول المبتكرة لمواجهة التحديات، ونوفر منصة للشباب للتعبير عن أفكارهم وتحقيق إمكاناتهم.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: HandHeart,
    title: "روح التطوع",
    description:
      "نقدر العطاء والمساهمة في خدمة المجتمع، ونشجع ثقافة التطوع والمسؤولية الاجتماعية بين الشباب والأفراد.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    gradient: "from-teal-500 to-cyan-600",
  },
];

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  attendees?: number;
  duration?: string;
  status: "upcoming" | "completed";
  tags: string[];
  gradient?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "ورشة الزراعة المستدامة",
    description:
      "تعلم أساسيات الزراعة العضوية والمستدامة مع خبراء البيئة. ورشة عملية تشمل التطبيق العملي في حديقة المجتمع.",
    image: "/e1.jpg",
    date: "15 يناير 2026",
    location: "حديقة المجتمع، شلغوم العيد",
    attendees: 45,
    duration: "3 ساعات",
    status: "upcoming",
    tags: ["حماية الطبيعة", "ورش عملية", "للمبتدئين"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "2",
    title: "مهرجان الشباب الثقافي",
    description:
      "احتفال سنوي يجمع الشباب لعرض مواهبهم الفنية والثقافية. يشمل عروض موسيقية، مسرح، ومعارض فنية.",
    image: "/e2.jpg",
    date: "22 يناير 2026",
    location: "المركز الثقافي",
    attendees: 200,
    duration: "يوم كامل",
    status: "upcoming",
    tags: ["بناء المجتمع", "فعاليات ثقافية", "للجميع"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "3",
    title: "يوم تنظيف الشاطئ",
    description:
      "مبادرة بيئية جماعية لتنظيف الشاطئ المحلي والحفاظ على البيئة البحرية. انضم إلينا لصنع الفرق!",
    image: "/e3.jpg",
    date: "5 فبراير 2026",
    location: "شاطئ المدينة",
    attendees: 80,
    duration: "4 ساعات",
    status: "upcoming",
    tags: ["حماية الطبيعة", "تطوع", "نشاط خارجي"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "4",
    title: "ملتقى الابتكار الشبابي",
    description:
      "منصة للشباب المبدعين لعرض أفكارهم ومشاريعهم الابتكارية. فرصة للتواصل مع رواد الأعمال والمستثمرين.",
    image: "/e4.png",
    date: "10 ديسمبر 2025",
    location: "مركز الابتكار",
    attendees: 120,
    duration: "5 ساعات",
    status: "completed",
    tags: ["بناء المجتمع", "ريادة الأعمال", "تواصل"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "5",
    title: "برنامج دعم الأطفال",
    description:
      "يوم ترفيهي وتعليمي للأطفال يشمل ألعاب تربوية، ورش فنية، وأنشطة رياضية في جو من المرح والتعلم.",
    image: "/e5.png",
    date: "28 نوفمبر 2025",
    location: "نادي الأطفال",
    attendees: 60,
    duration: "6 ساعات",
    status: "completed",
    tags: ["رعاية الأطفال", "تعليم", "ترفيه"],
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: "6",
    title: "حملة زراعة الأشجار",
    description:
      "مبادرة بيئية لزراعة 1000 شجرة في مختلف أنحاء المدينة. ساهم في جعل مدينتنا أكثر خضرة واستدامة.",
    image: "/e6.png",
    date: "15 نوفمبر 2025",
    location: "عدة مواقع في المدينة",
    attendees: 150,
    duration: "يوم كامل",
    status: "completed",
    tags: ["حماية الطبيعة", "تطوع", "مجتمع"],
    gradient: "from-green-600 to-teal-600",
  },
];

export interface Memory {
  id: string;
  image: string;
  rotation: number;
  scale?: number;
  delay: number;
}

export const memories: Memory[] = [
  {
    id: "1",
    image: "/mem1.svg",
    rotation: 0,
    scale: 1,
    delay: 0.1,
  },
  {
    id: "2",
    image: "/mem2.svg",
    rotation: 0,
    scale: 1.4,
    delay: 0.2,
  },
  {
    id: "3",
    image: "/mem3.svg",
    rotation: 0,
    scale: 1.4,

    delay: 0.3,
  },
  {
    id: "4",
    image: "/mem4.svg",
    rotation: 0,
    scale: 1.4,
    delay: 0.4,
  },
  {
    id: "5",
    image: "/mem5.svg",
    rotation: 0,
    scale: 1.4,
    delay: 0.5,
  },
  {
    id: "6",
    image: "/mem6.svg",
    rotation: 0,
    scale: 1.4,
    delay: 0.6,
  },
  {
    id: "7",
    image: "/mem7.svg",
    rotation: 0,
    scale: 1.4,
    delay: 0.6,
  },
  {
    id: "8",
    rotation: 0,
    scale: 1.4,
    image: "/mem8.svg",
    delay: 0.6,
  },
  {
    id: "9",
    image: "/mem9.svg",
    rotation: 0,
    scale: 1.4,
    delay: 0.6,
  },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "كيف يمكنني الانضمام إلى جمعية رقي للشباب؟",
    answer:
      "يمكنك الانضمام إلى جمعيتنا من خلال ملء استمارة التسجيل المتاحة على موقعنا الإلكتروني أو زيارة مقرنا الرئيسي في شلغوم العيد. نرحب بجميع الشباب المتحمسين للمشاركة في بناء مجتمع أفضل والعمل على حماية البيئة ودعم الأطفال.",
  },
  {
    id: "2",
    question: "ما هي الأنشطة التي تنظمها الجمعية؟",
    answer:
      "ننظم مجموعة متنوعة من الأنشطة تشمل ورش عمل بيئية، حملات تنظيف، برامج دعم الأطفال، ملتقيات ثقافية، مبادرات زراعة الأشجار، وفعاليات تواصل اجتماعي. جميع أنشطتنا تهدف إلى تعزيز الوعي البيئي وبناء مجتمع متماسك.",
  },
  {
    id: "3",
    question: "هل هناك رسوم للانضمام أو المشاركة في الأنشطة؟",
    answer:
      "الانضمام إلى الجمعية مجاني تماماً! معظم أنشطتنا وفعالياتنا مجانية أيضاً. في حالات نادرة، قد تكون هناك رسوم رمزية لتغطية تكاليف بعض الورش المتخصصة، لكننا نسعى دائماً لإبقاء جميع الأنشطة متاحة للجميع.",
  },
  {
    id: "4",
    question: "ما هي الفئة العمرية المستهدفة للمشاركة؟",
    answer:
      "جمعيتنا مفتوحة بشكل رئيسي للشباب من سن 18 إلى 35 عاماً. ومع ذلك، نرحب بجميع الأعمار للمشاركة في فعاليات محددة، خاصة العائلات في البرامج الخاصة بالأطفال والأنشطة البيئية المجتمعية.",
  },
  {
    id: "5",
    question: "كيف يمكنني التطوع في الجمعية؟",
    answer:
      "نقدر جداً روح التطوع! يمكنك التسجيل كمتطوع من خلال موقعنا الإلكتروني أو التواصل معنا مباشرة. سنقوم بإدراجك في قائمة المتطوعين وإشعارك بالفرص التطوعية المتاحة التي تتناسب مع مهاراتك واهتماماتك.",
  },
  {
    id: "6",
    question: "أين يقع مقر الجمعية وما هي ساعات العمل؟",
    answer:
      "مقرنا الرئيسي يقع في شلغوم العيد.  يمكنك  التواصل معنا عبر وسائل التواصل الاجتماعي أو البريد الإلكتروني في أي وقت.",
  },
  
  {
    id: "8",
    question: "هل تقدم الجمعية برامج تدريبية أو تعليمية؟",
    answer:
      "نعم! نقدم برامج تدريبية متنوعة في مجالات القيادة الشبابية، ريادة الأعمال، المهارات البيئية، والتطوير الشخصي. كما ننظم ورش عمل متخصصة بشكل دوري يقدمها خبراء في مختلف المجالات.",
  },
];

export const futureGoals = [
  {
    year: "2026",
    title: "توسيع النطاق",
    description: "الوصول إلى 1000+ عضو نشط وافتتاح 3 مراكز جديدة",
    color: "border-blue-500",
  },
  {
    year: "2027",
    title: "الشراكات الدولية",
    description: "التعاون مع 10 منظمات دولية لتبادل الخبرات",
    color: "border-purple-500",
  },
  {
    year: "2028",
    title: "التأثير الوطني",
    description: "تنفيذ 100+ برنامج بيئي على مستوى الجزائر",
    color: "border-green-500",
  },
  {
    year: "2030",
    title: "الريادة الإقليمية",
    description: "أن نصبح المرجع الأول للمبادرات الشبابية البيئية",
    color: "border-amber-500",
  },
];

export const timeline = [
  {
    year: "2019",
    title: "البداية",
    description: "تأسيس الجمعية بمجموعة صغيرة من الشباب المتحمسين",
  },
  {
    year: "2020",
    title: "النمو",
    description: "إطلاق أول برنامج بيئي وانضمام 100 عضو جديد",
  },
  {
    year: "2022",
    title: "التوسع",
    description: "افتتاح مركز جديد وإطلاق 20 برنامج متنوع",
  },
  {
    year: "2024",
    title: "التأثير",
    description: "الوصول إلى 500+ عضو نشط وشراكات مع 15 منظمة",
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  bgColor: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}


export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "أحمد بن محمد",
    role: "المؤسس والرئيس",
    bio: "قائد شغوف بالتغيير البيئي والتنمية المجتمعية، يسعى لبناء جيل واعٍ ومسؤول",
    image: "/m.png",
    bgColor: "bg-[#E8E4FF]", // Soft purple
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "ahmed@rokai.org",
    },
  },
  {
    id: "2",
    name: "فاطمة الزهراء",
    role: "مديرة البرامج",
    bio: "متخصصة في تطوير البرامج التعليمية والتربوية للأطفال والشباب",
    image: "/m.png",
    bgColor: "bg-[#FFE8E8]", // Soft pink/peach
    socials: {
      linkedin: "#",
      email: "fatima@rokai.org",
    },
  },
  {
    id: "3",
    name: "عمر الصديق",
    role: "منسق المشاريع البيئية",
    bio: "خبير في الاستدامة البيئية وتنسيق المبادرات الخضراء والحملات التوعوية",
    image: "/m.png",
    bgColor: "bg-[#E8F4FF]", // Soft blue
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "omar@rokai.org",
    },
  },
  {
    id: "4",
    name: "ليلى حسن",
    role: "مسؤولة التواصل الاجتماعي",
    bio: "متخصصة في بناء المجتمعات الرقمية وتعزيز التواصل مع الشباب",
    image: "/m.png",
    bgColor: "bg-[#FFF8E8]", // Soft yellow/cream
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "layla@rokai.org",
    },
  },
  {
    id: "5",
    name: "يوسف العلي",
    role: "منسق الفعاليات",
    bio: "مختص في تنظيم وإدارة الفعاليات والورش التدريبية للشباب",
    image: "/m.png",
    bgColor: "bg-[#E8FFE8]", // Soft green
    socials: {
      linkedin: "#",
      email: "youssef@rokai.org",
    },
  },
  {
    id: "6",
    name: "سارة المنصور",
    role: "مسؤولة التطوع",
    bio: "تدير برامج التطوع وتنسيق المتطوعين في مختلف المبادرات والأنشطة",
    image: "/m.png",
    bgColor: "bg-[#FFE8F4]", // Soft rose
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "sara@rokai.org",
    },
  },
];
