import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const autoFiles = import.meta.glob('../assets/gallery/automotive/*.{png,jpg,jpeg,webp}', { 
  eager: true, 
  import: 'default' 
});

const kitchenFiles = import.meta.glob('../assets/gallery/kitchen/*.{png,jpg,jpeg,webp}', { 
  eager: true, 
  import: 'default' 
});

// const otherFiles = import.meta.glob('../assets/gallery/other/*.{png,jpg,jpeg,webp}', { 
//   eager: true, 
//   import: 'default' 
// });
const automotiveImages = Object.values(autoFiles).map((path) => ({ src: path as string, alt: 'Automotive restoration' }));
const kitchenImages = Object.values(kitchenFiles).map((path) => ({ src: path as string, alt: 'Kitchen restoration' }));
// const otherImages = Object.values(otherFiles).map((path) => ({ src: path as string, alt: 'Industrial cleaning' }));

interface GallerySectionProps {
  title: string;
  images: { src: string; alt: string }[];
  onImageClick: (i: number) => void;
}

function GallerySection({ title, images, onImageClick }: GallerySectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='mb-16'>
      <h3 className='text-2xl md:text-3xl font-bold text-white mb-6'>{title}</h3>
      <div className='relative'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex gap-4'>
            {images.map((img, i) => (
              <div key={i} className='flex-[0_0_85%] md:flex-[0_0_45%] min-w-0 relative group'>
                <div 
                  className='relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer shadow-xl'
                  onClick={() => onImageClick(i)}
                >
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all z-10 flex items-center justify-center'>
                     <Maximize2 className='text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300' size={48} />
                  </div>
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className='w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className='absolute top-1/2 left-4 md:-left-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md text-white p-3 rounded-full transition-all border border-white/20 z-10'
          onClick={scrollPrev}
          aria-label='Previous slide'
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className='absolute top-1/2 right-4 md:-right-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md text-white p-3 rounded-full transition-all border border-white/20 z-10'
          onClick={scrollNext}
          aria-label='Next slide'
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<{ src: string; alt: string }[]>([]);
  const [index, setIndex] = useState(0);

  const openLightbox = useCallback((images: { src: string; alt: string }[], i: number) => {
    setCurrentImages(images);
    setIndex(i);
    setOpen(true);
  }, []);

  return (
    <section id='gallery' className='py-20 bg-secondary/20 relative group/section'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4'>
            {t('gallery.title')}
          </h2>
          <p className='text-xl text-gray-400'>{t('gallery.subtitle')}</p>
        </div>

        <GallerySection 
          title={t('gallery.automotive')}
          images={automotiveImages}
          onImageClick={(i) => openLightbox(automotiveImages, i)}
        />

        <GallerySection 
          title={t('gallery.kitchen')}
          images={kitchenImages}
          onImageClick={(i) => openLightbox(kitchenImages, i)}
        />

        {/* <GallerySection 
          title={t('gallery.other')}
          images={otherImages}
          onImageClick={(i) => openLightbox(otherImages, i)}
        /> */}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={currentImages}
        />
      </div>
    </section>
  );
}
