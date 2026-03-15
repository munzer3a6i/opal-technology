import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
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
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function Services() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  const services = [
    { icon: Cctv, key: 'cctv', path: '/services/cctv', desc: language === 'en' ? 'Supply, installation, operation, and programming of all camera types.' : 'توريد وتركيب وتشغيل وبرمجة جميع أنواع الكاميرات.' },
    { icon: ShieldCheck, key: 'accessControl', path: '/services/access-control', desc: language === 'en' ? 'Fingerprint readers, card readers, facial recognition, and security gates.' : 'قارئات البصمة والبطاقات والتعرف على الوجه والبوابات الأمنية.' },
    { icon: Network, key: 'network', path: '/services/network', desc: language === 'en' ? 'Structured cabling, network design, and server room setup.' : 'التمديدات الهيكلية وتصميم الشبكات وتجهيز غرف الخوادم.' },
    { icon: Flame, key: 'fireAlarm', path: '/services/fire-alarm', desc: language === 'en' ? 'Conventional and addressable fire alarm panels and detectors.' : 'لوحات وكواشف إنذار الحريق التقليدية والمعنونة.' },
    { icon: Speaker, key: 'audio', path: '/services/audio', desc: language === 'en' ? 'Public address systems, conference room AV, and background music.' : 'أنظمة النداء العام والصوتيات لقاعات الاجتماعات والموسيقى الخلفية.' },
    { icon: PhoneCall, key: 'telephone', path: '/services/telephone', desc: language === 'en' ? 'IP PBX systems, VoIP solutions, and call center setups.' : 'أنظمة السنترال الشبكي وحلول نقل الصوت عبر الإنترنت وتجهيز مراكز الاتصال.' },
    { icon: Tv, key: 'tv', path: '/services/tv', desc: language === 'en' ? 'MATV, IPTV solutions, and digital signage.' : 'أنظمة التلفزيون المركزي والشبكي واللوحات الرقمية.' },
    { icon: Stethoscope, key: 'nurseCall', path: '/services/nurse-call', desc: language === 'en' ? 'Patient-to-nurse call systems and emergency alerts.' : 'أنظمة استدعاء الممرضات وتنبيهات الطوارئ.' },
    { icon: HomeIcon, key: 'smartSystems', path: '/services/smart-systems', desc: language === 'en' ? 'Smart home systems, hotel RMS, and building management systems.' : 'أنظمة المنازل الذكية وإدارة غرف الفنادق وإدارة المباني.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="https://picsum.photos/seed/services-header/1920/600" alt="Header Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-[var(--color-bg-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                    <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{t(`services.${service.key}`)}</h3>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-primary)] transition-colors mt-auto"
                  >
                    {t('services.learnMore')}
                    {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
