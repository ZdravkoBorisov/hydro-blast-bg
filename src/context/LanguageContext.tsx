import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Aquablasting',
    'nav.gallery': 'Gallery',
    'nav.videos': 'Videos',
    'nav.contact': 'Contact',
    'nav.brand': 'HYDRO',
    'nav.brandSuffix': 'BLAST BG',
    
    // Hero
    'hero.badge': 'MODERN CLEANING TECHNOLOGY',
    'hero.title.line1': 'Aquablasting:',
    'hero.title.line2': 'The Future of Cleaning',
    'hero.subtitle': 'Professional cleaning with glass particles - Safe, effective, and environmentally friendly',
    'hero.cta.learn': 'Learn More',
    'hero.cta.contact': 'Contact Us',
    
    // About Section
    'about.title': 'What is Aquablasting?',
    'about.subtitle': 'Revolutionary Cleaning Technology',
    'about.p1': 'Aquablasting is an innovative surface cleaning method that uses fine glass particles propelled by compressed air and water. This technology combines the effectiveness of traditional sandblasting with the safety and environmental benefits of modern methods.',
    'about.p2': 'The glass particles are completely recyclable, non-toxic, and safe for both operators and the environment. Aquablasting removes rust, old paint, graffiti, and other contaminants without damaging the underlying surface.',
    
    // How It Works
    'howItWorks.title': 'How Aquablasting Works',
    'howItWorks.subtitle': 'The Science Behind the Technology',
    'howItWorks.p1': 'The process uses specially designed glass particles (usually 0.1-0.5mm in diameter) that are mixed with water and compressed air. This mixture is then directed at the surface through a specialized nozzle, creating a gentle yet highly effective cleaning action.',
    'howItWorks.benefits': 'Key Benefits',
    'howItWorks.benefit1': 'Environmentally friendly - No toxic chemicals',
    'howItWorks.benefit2': 'Minimal dust generation',
    'howItWorks.benefit3': 'Safe for operators and surroundings',
    'howItWorks.benefit4': 'Preserves surface integrity',
    'howItWorks.benefit5': 'Recyclable glass media',
    'howItWorks.benefit6': 'Cost-effective solution',
    
    // Factory Results
    'factoryResults.title': 'Factory-Fresh Metal Restoration',
    'factoryResults.subtitle': 'Restore Your Metal Surfaces to Original Condition',
    'factoryResults.p1': 'One of the most impressive capabilities of aquablasting is its ability to restore metal surfaces to their original factory condition. Whether dealing with old machinery, automotive parts, metal structures, or architectural elements, aquablasting removes decades of corrosion, paint, and contamination.',
    'factoryResults.p2': 'The precision of glass particle cleaning ensures that only unwanted materials are removed, while the base metal remains completely intact and undamaged. The result is a clean, smooth surface that looks as if it just came from the factory - perfect for restoration projects, industrial maintenance, or preparing surfaces for new coatings.',
    'factoryResults.highlight': 'Key Applications',
    'factoryResults.app1': 'Industrial equipment and machinery restoration',
    'factoryResults.app2': 'Automotive and marine parts refurbishment',
    'factoryResults.app3': 'Architectural metal cleaning and restoration',
    'factoryResults.app4': 'Removal of old coatings before repainting',
    'factoryResults.app5': 'Surface preparation for welding or bonding',
    'factoryResults.app6': 'Heritage and antique metal restoration',
    
    // Gallery
    'gallery.title': 'See Aquablasting in Action',
    'gallery.subtitle': 'Before & After Results',
    'gallery.automotive': 'Automotive',
    'gallery.kitchen': 'Kitchen & Commercial',
    'gallery.other': 'Other Applications',
    
    // Videos
    'videos.title': 'Educational Videos',
    'videos.subtitle': 'Learn more about aquablasting technology',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Learn more about aquablasting services',
    'contact.info': 'Contact Information',
    'contact.description': 'Interested in aquablasting services? Contact us to learn more about how this technology can help with your cleaning needs.',
    'contact.location': 'Our Location',
    'contact.locationAddress': 'Kyustendil, Bulgaria',
    'contact.phone': 'Phone',
    'contact.phoneNumber': '+359 89 920-4581',
    'contact.email': 'Email',
    'contact.emailAddress': 'hydroblastbg@gmail.com',
    'contact.mapTitle': 'Find Us',
    
    // Footer
    'footer.rights': '© 2026 AquaBlast. All rights reserved.',
    'footer.tagline': 'Professional aquablasting services in Bulgaria',
  },
  bg: {
    // Navbar
    'nav.home': 'Начало',
    'nav.about': 'За Аквабластинга',
    'nav.gallery': 'Галерия',
    'nav.videos': 'Видеа',
    'nav.contact': 'Контакти',
    'nav.brand': 'ХИДРО',
    'nav.brandSuffix': 'БЛАСТ BG',
    
    // Hero
    'hero.badge': 'МОДЕРНА ТЕХНОЛОГИЯ ЗА ПОЧИСТВАНЕ',
    'hero.title.line1': 'Аквабластинг:',
    'hero.title.line2': 'Бъдещето на Почистването',
    'hero.subtitle': 'Професионално почистване със стъклени перли - Безопасно, ефективно и екологично',
    'hero.cta.learn': 'Научете Повече',
    'hero.cta.contact': 'Свържете се с нас',
    
    // About Section
    'about.title': 'Какво е Аквабластинг?',
    'about.subtitle': 'Революционна Технология за Почистване',
    'about.p1': 'Аквабластингът е иновативен метод за почистване на повърхности, който използва фини стъклени частици, задвижвани от сгъстен въздух и вода. Тази технология съчетава ефективността на традиционното пясъкоструене с безопасността и екологичните предимства на модерните методи.',
    'about.p2': 'Стъклените частици са напълно рециклируеми, нетоксични и безопасни както за операторите, така и за околната среда. Аквабластингът премахва ръжда, стара боя, графити и други замърсявания, без да увреди основната повърхност.',
    
    // How It Works
    'howItWorks.title': 'Как Работи Аквабластингът',
    'howItWorks.subtitle': 'Науката зад Технологията',
    'howItWorks.p1': 'Процесът използва специално проектирани стъклени частици (обикновено с диаметър 0,1-0,5 мм), които се смесват с вода и сгъстен въздух. Тази смес след това се насочва към повърхността чрез специализирана дюза, създавайки нежно, но високо ефективно почистващо действие.',
    'howItWorks.benefits': 'Основни Предимства',
    'howItWorks.benefit1': 'Екологично чисто - Без токсични химикали',
    'howItWorks.benefit2': 'Минимално образуване на прах',
    'howItWorks.benefit3': 'Безопасно за оператори и околна среда',
    'howItWorks.benefit4': 'Запазва целостта на повърхността',
    'howItWorks.benefit5': 'Рециклируем стъклен материал',
    'howItWorks.benefit6': 'Икономически ефективно решение',
    
    // Factory Results
    'factoryResults.title': 'Възстановяване на Метал до Фабрично Състояние',
    'factoryResults.subtitle': 'Върнете Металните Повърхности в Оригинално Състояние',
    'factoryResults.p1': 'Една от най-впечатляващите способности на аквабластинга е възможността да възстанови металните повърхности до тяхното оригинално фабрично състояние. Независимо дали се занимавате със стари машини, автомобилни части, метални конструкции или архитектурни елементи, аквабластингът премахва десетилетия корозия, боя и замърсяване.',
    'factoryResults.p2': 'Прецизността на почистването със стъклени частици гарантира, че само нежеланите материали се премахват, докато основният метал остава напълно непокътнат и неповреден. Резултатът е чиста, гладка повърхност, която изглежда като току-що излязла от фабриката - перфектна за реставрационни проекти, индустриална поддръжка или подготовка на повърхности за нови покрития.',
    'factoryResults.highlight': 'Основни Приложения',
    'factoryResults.app1': 'Възстановяване на индустриално оборудване и машини',
    'factoryResults.app2': 'Реновиране на автомобилни и морски части',
    'factoryResults.app3': 'Почистване и реставрация на архитектурен метал',
    'factoryResults.app4': 'Премахване на стари покрития преди пребоядисване',
    'factoryResults.app5': 'Подготовка на повърхност за заваряване или свързване',
    'factoryResults.app6': 'Реставрация на исторически и антикварни метали',
    
    // Gallery
    'gallery.title': 'Вижте Аквабластинга в Действие',
    'gallery.subtitle': 'Резултати преди и след',
    'gallery.automotive': 'Автомобилни',
    'gallery.kitchen': 'Кухни и Търговски',
    'gallery.other': 'Други Приложения',
    
    // Videos
    'videos.title': 'Видеа',
    'videos.subtitle': 'Научете повече за технологията аквабластинг',
    
    // Contact
    'contact.title': 'Свържете се с нас',
    'contact.subtitle': 'Научете повече за услугите по аквабластинг',
    'contact.info': 'Информация за контакт',
    'contact.description': 'Интересувате ли се от услуги по аквабластинг? Свържете се с нас, за да научите повече как тази технология може да помогне с вашите нужди от почистване.',
    'contact.location': 'Нашето местоположение',
    'contact.locationAddress': 'Kюстендил, България',
    'contact.phone': 'Телефон',
    'contact.phoneNumber': '+359 89 920-4581',
    'contact.email': 'Имейл',
    'contact.emailAddress': 'hydroblastbg@gmail.com',
    'contact.mapTitle': 'Намерете ни',
    
    // Footer
    'footer.rights': '© 2026 HydroBlast. Всички права запазени.',
    'footer.tagline': 'Професионални услуги по аквабластинг в България',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bg');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
