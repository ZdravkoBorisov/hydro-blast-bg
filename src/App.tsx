import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import heroImg from './assets/gallery/componentImgs/componentImg.webp'
import howItWorks from './assets/gallery/componentImgs/howItWorks.webp'
import whatItIs from './assets/gallery/componentImgs/whatIsIt.webp'

function App() {
  const { t } = useLanguage();
  
  return (
    <div className='min-h-screen bg-primary'>
      <Navbar />
      
      <main>
        <Hero />
        
        <Section 
          id='about' 
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          imageSrc={heroImg}
          imageAlt='Aquablasting process'
        >
          <p className='mb-4'>
            {t('about.p1')}
          </p>
          <p>
            {t('about.p2')}
          </p>
        </Section>

        <Section 
          id='services' 
          title={t('howItWorks.title')}
          subtitle={t('howItWorks.subtitle')}
          imageSrc={howItWorks}
          imageAlt='Glass particles technology'
          reverse
          className='bg-secondary/10'
        >
          <p className='mb-4'>
            {t('howItWorks.p1')}
          </p>
          <h4 className='text-xl font-bold text-white mb-3'>{t('howItWorks.benefits')}</h4>
          <ul className='list-disc list-inside space-y-2 text-gray-400 marker:text-accent'>
            <li>{t('howItWorks.benefit1')}</li>
            <li>{t('howItWorks.benefit2')}</li>
            <li>{t('howItWorks.benefit3')}</li>
            <li>{t('howItWorks.benefit4')}</li>
            <li>{t('howItWorks.benefit5')}</li>
            <li>{t('howItWorks.benefit6')}</li>
          </ul>
        </Section>

        <Section 
          id='factory-results' 
          title={t('factoryResults.title')}
          subtitle={t('factoryResults.subtitle')}
          imageSrc={whatItIs}
          imageAlt='Factory-fresh metal restoration'
        >
          <p className='mb-4'>
            {t('factoryResults.p1')}
          </p>
          <p className='mb-6'>
            {t('factoryResults.p2')}
          </p>
          <h4 className='text-xl font-bold text-white mb-3'>{t('factoryResults.highlight')}</h4>
          <ul className='list-disc list-inside space-y-2 text-gray-400 marker:text-accent'>
            <li>{t('factoryResults.app1')}</li>
            <li>{t('factoryResults.app2')}</li>
            <li>{t('factoryResults.app3')}</li>
            <li>{t('factoryResults.app4')}</li>
            <li>{t('factoryResults.app5')}</li>
            <li>{t('factoryResults.app6')}</li>
          </ul>
        </Section>

        <Gallery />
        
        <Videos />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
