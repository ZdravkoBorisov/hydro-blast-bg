import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const videos = [
  { 
    url: 'https://www.youtube.com/shorts/JP3VqIwQ6FI', 
    title: 'Почиставне на компресор',
  },
  { 
    url: 'https://youtube.com/shorts/O71QkJVBofc?feature=share', 
    title: 'Почистване на двигателни части',
  },
];

export default function Videos() {
  const { t } = useLanguage();
  
  return (
    <section id="videos" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            {t('videos.title')}
          </h2>
          <p className="text-xl text-gray-400">{t('videos.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((vid, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary/30 rounded-2xl overflow-hidden border border-white/5"
            >
              <div className="aspect-video relative group cursor-pointer">
                <ReactPlayer 
                  src={vid.url} 
                  width="100%" 
                  height="100%" 
                  controls
                  playIcon={
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  }
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{vid.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
