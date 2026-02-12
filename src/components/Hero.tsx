import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/gallery/hero/hero.webp'

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <div id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary z-10" />
        <img 
          src={heroImg} 
          alt="Aquablasting in action" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block py-2 px-4 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs md:text-sm font-bold tracking-wider mb-8 uppercase"
        >
          {t('hero.badge')}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-lg">
            {t('hero.title.line1')}
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-lg">
            {t('hero.title.line2')}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#contact" 
            className="px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/50 text-base md:text-lg"
          >
            {t('hero.cta.contact')}
          </a>
          <a 
            href="#about" 
            className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all text-base md:text-lg"
          >
            {t('hero.cta.learn')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
