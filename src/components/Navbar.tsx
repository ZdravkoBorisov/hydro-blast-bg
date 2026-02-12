import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.videos'), href: '#videos' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-accent tracking-tighter">
              {t('nav.brand')}<span className="text-white">{t('nav.brandSuffix')}</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 ml-4">
              <Globe className="text-accent" size={18} />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' ? 'bg-accent text-primary' : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('bg')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'bg' ? 'bg-accent text-primary' : 'text-gray-400 hover:text-white'
                }`}
              >
                BG
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-2 px-3 py-2">
              <Globe className="text-accent" size={18} />
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' ? 'bg-accent text-primary' : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('bg')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'bg' ? 'bg-accent text-primary' : 'text-gray-400 hover:text-white'
                }`}
              >
                BG
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
