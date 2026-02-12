import { useCallback } from 'react';
import ReactPlayer from 'react-player';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  return (
    <section id="videos" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            {t('videos.title')}
          </h2>
          <p className="text-xl text-gray-400">{t('videos.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {videos.map((vid, i) => (
                <div 
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_85%] md:flex-[0_0_48%] min-w-0"
                >
                  <div className="bg-secondary/30 rounded-2xl overflow-hidden border border-white/5">
                    <div className="aspect-video relative">
                      <ReactPlayer 
                        url={vid.url} 
                        width="100%" 
                        height="100%" 
                        controls
                        config={{
                          youtube: {
                            playerVars: { 
                              showinfo: 1,
                              rel: 0
                            }
                          }
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white">{vid.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all border border-white/20 z-10"
            onClick={scrollPrev}
            aria-label="Previous video"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all border border-white/20 z-10"
            onClick={scrollNext}
            aria-label="Next video"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
