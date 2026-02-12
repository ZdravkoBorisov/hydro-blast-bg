import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  
  const socialIcons = [
    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586494621441&locale=bg_BG" },
    { Icon: Instagram, href: "https://www.instagram.com/hydroblastbg/" },
    { Icon: TikTokIcon, href: "https://www.tiktok.com/@hydroblastbg" },
  ];
  
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold text-accent tracking-tighter block mb-2">
              {t('nav.brand')}<span className="text-white">{t('nav.brandSuffix')}</span>
            </a>
            <p className="text-gray-400 text-sm">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialIcons.map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
