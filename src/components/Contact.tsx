import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import LocationMap from './LocationMap';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id='contact' className='py-20 bg-secondary/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4'>
            {t('contact.title')}
          </h2>
          <p className='text-xl text-gray-400'>{t('contact.subtitle')}</p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 items-stretch'>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex flex-col justify-center space-y-8 bg-primary/50 p-8 rounded-2xl border border-white/10'
          >
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>{t('contact.info')}</h3>
              <p className='text-gray-300 mb-8'>
                {t('contact.description')}
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='bg-accent/10 p-3 rounded-lg'>
                  <MapPin className='text-accent flex-shrink-0' size={24} />
                </div>
                <div>
                  <p className='font-bold text-white text-lg'>{t('contact.location')}</p>
                  <p className='text-gray-400'>{t('contact.locationAddress')}</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-4'>
                <div className='bg-accent/10 p-3 rounded-lg'>
                  <Phone className='text-accent flex-shrink-0' size={24} />
                </div>
                <div>
                  <p className='font-bold text-white text-lg'>{t('contact.phone')}</p>
                  <p className='text-gray-400'>{t('contact.phoneNumber')}</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-4'>
                <div className='bg-accent/10 p-3 rounded-lg'>
                  <Mail className='text-accent flex-shrink-0' size={24} />
                </div>
                <div>
                  <p className='font-bold text-white text-lg'>{t('contact.email')}</p>
                  <p className='text-gray-400'>{t('contact.emailAddress')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500'
          >
            <LocationMap />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
