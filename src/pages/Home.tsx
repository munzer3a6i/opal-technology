import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import hero from '../assets/heroimage.png';
import projectImage1 from '../assets/project.png';
import projectImage2 from '../assets/project.png';
import projectImage3 from '../assets/project.png';
import companyImage from '../assets/companyImage.jpg';
import client1 from '../assets/Saudi_Ministry_of_Education_Logo.png';
import client2 from '../assets/Saudi_Ministry_of_Health_Logo.png';
import client3 from '../assets/qassimLogo.png';
import client4 from '../assets/وزارة_الرياضة_السعودية.svg.png';
import client5 from '../assets/Saudi_Ministry_of_Defense_Logo.png';
import client6 from '../assets/جامعة القصيم.svg';
import client7 from '../assets/جامعة المجمعة.png';
import client8 from '../assets/MHOH-logo.png';
import client9 from '../assets/وزارة_العدل_السعودية.png';

import {
  ShieldCheck,
  Cctv,
  Network,
  Flame,
  Speaker,
  PhoneCall,
  Tv,
  Stethoscope,
  Home as HomeIcon,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  const stats = [
    { value: '13+', label: t('stats.years') },
    { value: '500+', label: t('stats.projects') },
    { value: '50+', label: t('stats.clients') },
    { value: '15+', label: t('stats.cities') },
  ];

  const services = [
    { icon: Cctv, key: 'cctv', path: '/services/cctv' },
    { icon: ShieldCheck, key: 'accessControl', path: '/services/access-control' },
    { icon: Network, key: 'network', path: '/services/network' },
    { icon: Flame, key: 'fireAlarm', path: '/services/fire-alarm' },
    { icon: Speaker, key: 'audio', path: '/services/audio' },
    { icon: PhoneCall, key: 'telephone', path: '/services/telephone' },
    { icon: Tv, key: 'tv', path: '/services/tv' },
    { icon: Stethoscope, key: 'nurseCall', path: '/services/nurse-call' },
    { icon: HomeIcon, key: 'smartSystems', path: '/services/smart-systems' },
  ];

  const whyUs = [
    { key: 'quality', desc: language === 'en' ? 'We use top-tier equipment from global brands.' : 'نستخدم معدات عالية الجودة من علامات تجارية عالمية.' },
    { key: 'reliability', desc: language === 'en' ? '24/7 support and maintenance services.' : 'خدمات دعم وصيانة على مدار الساعة.' },
    { key: 'innovation', desc: language === 'en' ? 'Latest technologies aligned with Vision 2030.' : 'أحدث التقنيات المتوافقة مع رؤية 2030.' },
    { key: 'trust', desc: language === 'en' ? 'Certified by major Saudi ministries.' : 'معتمدون من قبل الوزارات السعودية الكبرى.' },
  ];

  const projects = [
    {
      title: language === 'en' ? 'Sheikh Saleh Al-Othaimeen Eye Care Center' : 'مركز الشيخ صالح العثيمين لطب العيون',
      client: language === 'en' ? 'Ministry of Health' : 'وزارة الصحة',
      image: projectImage1,
      systems: language === 'en' ? 'CCTV, Network, Nurse Call' : 'كاميرات المراقبة، الشبكات، استدعاء الممرضات'
    },
    {
      title: language === 'en' ? 'Fourth Mills – Madinah' : 'المطاحن الرابعة – المدينة المنورة',
      client: language === 'en' ? 'Government Sector' : 'القطاع الحكومي',
      image: projectImage2,
      systems: language === 'en' ? 'Access Control, Fire Alarm, PA System' : 'التحكم بالدخول، إنذار الحريق، النظام الصوتي'
    },
    {
      title: language === 'en' ? 'Ministry of Education Complex' : 'مجمع وزارة التعليم',
      client: language === 'en' ? 'Ministry of Education' : 'وزارة التعليم',
      image: projectImage3,
      systems: language === 'en' ? 'Smart Systems, Network, CCTV' : 'الأنظمة الذكية، الشبكات، كاميرات المراقبة'
    }
  ];

  const customers = [
    { name: 'Ministry of Health', logo: client1 },
    { name: 'Ministry of Education', logo: client2 },
    { name: 'Ministry of Justice', logo: client3 },
    { name: 'Saudi Aramco', logo: client4 },
    { name: 'SABIC', logo: client5 },
    { name: 'STC', logo: client6 },
    { name: 'Al Rajhi Bank', logo: client7 },
    { name: 'Al Rajhi Bank', logo: client8 },
    { name: 'Al Rajhi Bank', logo: client9 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={hero}
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/services" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              {t('hero.ourServices')}
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              {t('nav.getQuote')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">{t('services.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100"
                >
                  <div className="w-14 h-14 bg-[var(--color-bg-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                    <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{t(`services.${service.key}`)}</h3>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium mt-4 hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t('services.learnMore')}
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">{t('whyUs.title')}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {language === 'en'
                  ? 'With over a decade of experience, we provide cutting-edge IT and security solutions that empower businesses to thrive in the digital age. Our commitment to excellence makes us the preferred partner for government and private sectors.'
                  : 'مع أكثر من عقد من الخبرة، نقدم أحدث حلول تقنية المعلومات والأمن التي تمكن الشركات من الازدهار في العصر الرقمي. التزامنا بالتميز يجعلنا الشريك المفضل للقطاعين الحكومي والخاص.'}
              </p>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">{t(`whyUs.${item.key}`)}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={companyImage}
                  alt="Server Room"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 rtl:-right-8 rtl:-left-auto bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)]">100%</div>
                    <div className="text-sm text-gray-600 font-medium">
                      {language === 'en' ? 'Secure Solutions' : 'حلول آمنة'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">{t('projects.title')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                {language === 'en' ? 'Discover some of our most impactful installations across the Kingdom.' : 'اكتشف بعضاً من أهم مشاريعنا وتجهيزاتنا في جميع أنحاء المملكة.'}
              </p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-colors">
              {t('projects.viewAll')}
              {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)]">
                    {project.client}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.systems}</p>
                  <Link to="/projects" className="text-[var(--color-accent)] font-medium text-sm hover:underline">
                    {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers / Partners */}
      <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              {language === 'en' ? 'Our Trusted Clients' : 'عملائنا الموثوقين'}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'We are proud to serve leading organizations across various sectors in Saudi Arabia.'
                : 'نفخر بخدمة كبرى المؤسسات والجهات الحكومية والخاصة في المملكة العربية السعودية.'}
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex overflow-hidden group">
            <div className={`flex gap-8 items-center min-w-[200%] px-4 group-hover:[animation-play-state:paused] ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
              {[...customers, ...customers, ...customers, ...customers].map((customer, index) => (
                <div
                  key={index}
                  className="w-[200px] sm:w-[250px] flex-shrink-0 flex items-center justify-center p-6 bg-[var(--color-bg-light)] rounded-xl border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md cursor-pointer h-32"
                >
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">{t('testimonials.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: language === 'en' ? 'Abdullah Al-Saud' : 'عبدالله السعود',
                company: language === 'en' ? 'Ministry of Health' : 'وزارة الصحة',
                quote: language === 'en' ? 'Opal Technology delivered exceptional CCTV and network infrastructure for our new medical center. Highly professional team.' : 'قدمت أوبال للتقنية بنية تحتية استثنائية لكاميرات المراقبة والشبكات لمركزنا الطبي الجديد. فريق محترف للغاية.',
                rating: 5
              },
              {
                name: language === 'en' ? 'Fahad Al-Otaibi' : 'فهد العتيبي',
                company: language === 'en' ? 'Private Education Group' : 'مجموعة تعليمية خاصة',
                quote: language === 'en' ? 'The smart systems and access control solutions they installed have completely transformed how we manage our campuses.' : 'لقد أحدثت الأنظمة الذكية وحلول التحكم بالدخول التي قاموا بتركيبها تحولاً كاملاً في كيفية إدارتنا لحرمنا الجامعي.',
                rating: 5
              },
              {
                name: language === 'en' ? 'Mohammed Al-Harbi' : 'محمد الحربي',
                company: language === 'en' ? 'Hospitality Sector' : 'قطاع الضيافة',
                quote: language === 'en' ? 'Their IPTV and room management systems are top-notch. Our guests have noticed the difference in quality and service.' : 'أنظمة التلفزيون الشبكي وإدارة الغرف لديهم من الدرجة الأولى. لقد لاحظ ضيوفنا الفرق في الجودة والخدمة.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-bg-light)] p-8 rounded-2xl border border-gray-100 relative"
              >
                <div className="text-[var(--color-accent)] mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-[var(--color-primary)]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-8 border-white"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border-8 border-white"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            {t('cta.banner')}
          </h2>
          <Link to="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {t('nav.getQuote')}
          </Link>
        </div>
      </section>
    </div>
  );
}
