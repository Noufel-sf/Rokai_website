interface SocialLinkData {
  icon: React.ElementType;
  title: string;
  content: string;
  link: string;
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
} from "lucide-react";


 export const socialLinks: SocialLinkData[] = [
    {
      icon: Phone,
      title: "اتصل بنا",
      content: "00 82773 83837",
      link: "tel:+0082773838837",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      content: "00 82773 83837",
      link: "https://wa.me/0082773838837",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      content: "info@rokay.org",
      link: "mailto:info@rokay.org",
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
      link: "https://facebook.com/rokay",
      gradient: "from-blue-600 to-indigo-700",
      bgColor: "bg-blue-50",
    },
  ];