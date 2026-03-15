import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, Cctv, Network, Flame, Speaker, PhoneCall, Tv, Stethoscope, Home as HomeIcon,
  CheckCircle2, ArrowLeft, ArrowRight
} from 'lucide-react';

const serviceData: Record<string, any> = {
  'cctv': {
    icon: Cctv,
    titleEn: 'CCTV Surveillance Systems',
    titleAr: 'أنظمة المراقبة والكاميرات',
    descEn: 'Comprehensive CCTV solutions including supply, installation, operation, and programming. We provide state-of-the-art surveillance systems tailored to your security needs.',
    descAr: 'حلول شاملة لأنظمة المراقبة تشمل التوريد والتركيب والتشغيل والبرمجة. نقدم أحدث أنظمة المراقبة المصممة خصيصاً لتلبية احتياجاتك الأمنية.',
    featuresEn: ['All camera types: dome, bullet, PTZ, thermal, IP', 'Indoor and outdoor solutions', 'Remote monitoring integration', 'NVR/DVR setup and configuration'],
    featuresAr: ['جميع أنواع الكاميرات: القبة، الرصاصة، المتحركة، الحرارية، الشبكية', 'حلول داخلية وخارجية', 'تكامل المراقبة عن بعد', 'إعداد وتكوين أجهزة التسجيل'],
    useCasesEn: ['Hospitals', 'Schools', 'Offices', 'Hotels', 'Warehouses'],
    useCasesAr: ['المستشفيات', 'المدارس', 'المكاتب', 'الفنادق', 'المستودعات'],
  },
  'access-control': {
    icon: ShieldCheck,
    titleEn: 'Access Control & Security Systems',
    titleAr: 'أنظمة التحكم بالدخول والأمن',
    descEn: 'Advanced access control systems to secure your premises. From biometric readers to security gates, we ensure only authorized personnel can enter restricted areas.',
    descAr: 'أنظمة متطورة للتحكم بالدخول لتأمين منشأتك. من قارئات البصمة إلى البوابات الأمنية، نضمن دخول الأفراد المصرح لهم فقط إلى المناطق المحظورة.',
    featuresEn: ['Fingerprint readers, card readers, facial recognition', 'Security gates and turnstiles', 'Door access controllers and electric locks', 'Integration with CCTV and HR systems', 'Time & attendance solutions'],
    featuresAr: ['قارئات البصمة والبطاقات والتعرف على الوجه', 'البوابات الأمنية والبوابات الدوارة', 'وحدات التحكم في أبواب الدخول والأقفال الكهربائية', 'التكامل مع أنظمة المراقبة والموارد البشرية', 'حلول الحضور والانصراف'],
    useCasesEn: ['Corporate Offices', 'Government Buildings', 'Data Centers', 'Factories'],
    useCasesAr: ['مكاتب الشركات', 'المباني الحكومية', 'مراكز البيانات', 'المصانع'],
  },
  'network': {
    icon: Network,
    titleEn: 'Network & Data Systems',
    titleAr: 'أنظمة الشبكات والبيانات',
    descEn: 'Robust and scalable network infrastructure solutions. We design and implement structured cabling and active network components for seamless connectivity.',
    descAr: 'حلول بنية تحتية قوية وقابلة للتطوير للشبكات. نقوم بتصميم وتنفيذ التمديدات الهيكلية ومكونات الشبكة النشطة لاتصال سلس.',
    featuresEn: ['Structured cabling (Cat6, Cat6A, fiber optic)', 'Network design and topology planning', 'Switches, routers, firewalls, and wireless access points', 'Server room setup and rack installation', 'Network monitoring and management'],
    featuresAr: ['التمديدات الهيكلية (Cat6, Cat6A، الألياف الضوئية)', 'تصميم الشبكات وتخطيط الطوبولوجيا', 'المحولات والموجهات وجدران الحماية ونقاط الوصول اللاسلكية', 'تجهيز غرف الخوادم وتركيب الكبائن', 'مراقبة وإدارة الشبكات'],
    useCasesEn: ['Universities', 'Hospitals', 'Corporate Headquarters', 'Data Centers'],
    useCasesAr: ['الجامعات', 'المستشفيات', 'المقرات الرئيسية للشركات', 'مراكز البيانات'],
  },
  'fire-alarm': {
    icon: Flame,
    titleEn: 'Fire Alarm Systems',
    titleAr: 'أنظمة إنذار الحريق',
    descEn: 'Early detection and warning systems to protect lives and property. Our fire alarm solutions comply with the highest safety standards.',
    descAr: 'أنظمة الكشف والإنذار المبكر لحماية الأرواح والممتلكات. تتوافق حلول إنذار الحريق لدينا مع أعلى معايير السلامة.',
    featuresEn: ['Conventional and addressable fire alarm panels', 'Smoke detectors, heat detectors, gas detectors', 'Manual call points and alarm sounders', 'Integration with building management systems', 'Compliance with NFPA and Saudi Civil Defense standards'],
    featuresAr: ['لوحات إنذار الحريق التقليدية والمعنونة', 'كواشف الدخان والحرارة والغاز', 'نقاط النداء اليدوية وأجراس الإنذار', 'التكامل مع أنظمة إدارة المباني', 'الامتثال لمعايير NFPA والدفاع المدني السعودي'],
    useCasesEn: ['Commercial Buildings', 'Residential Complexes', 'Industrial Facilities', 'Hospitals'],
    useCasesAr: ['المباني التجارية', 'المجمعات السكنية', 'المنشآت الصناعية', 'المستشفيات'],
  },
  'audio': {
    icon: Speaker,
    titleEn: 'Audio & Speaker Systems',
    titleAr: 'الأنظمة الصوتية والسماعات',
    descEn: 'High-quality audio solutions for various applications, from public address systems to immersive conference room setups.',
    descAr: 'حلول صوتية عالية الجودة لمختلف التطبيقات، من أنظمة النداء العام إلى تجهيزات قاعات الاجتماعات الغامرة.',
    featuresEn: ['Public address (PA) systems', 'Conference room AV setups', 'Theater and auditorium audio systems', 'Background music systems for malls and hotels', 'Emergency evacuation audio systems'],
    featuresAr: ['أنظمة النداء العام', 'تجهيزات الصوتيات والمرئيات لقاعات الاجتماعات', 'الأنظمة الصوتية للمسارح والقاعات', 'أنظمة الموسيقى الخلفية للمراكز التجارية والفنادق', 'الأنظمة الصوتية للإخلاء في حالات الطوارئ'],
    useCasesEn: ['Shopping Malls', 'Hotels', 'Conference Centers', 'Mosques'],
    useCasesAr: ['المراكز التجارية', 'الفنادق', 'مراكز المؤتمرات', 'المساجد'],
  },
  'telephone': {
    icon: PhoneCall,
    titleEn: 'Telephone & PBX Systems',
    titleAr: 'أنظمة السنترال والهاتف',
    descEn: 'Reliable communication systems to keep your business connected. We offer modern IP PBX and unified communications solutions.',
    descAr: 'أنظمة اتصالات موثوقة لإبقاء عملك متصلاً. نقدم أحدث أنظمة السنترال الشبكي وحلول الاتصالات الموحدة.',
    featuresEn: ['IP PBX systems', 'VoIP solutions', 'Call center setups', 'Intercom systems', 'Unified communications'],
    featuresAr: ['أنظمة السنترال الشبكي', 'حلول نقل الصوت عبر الإنترنت', 'تجهيز مراكز الاتصال', 'أنظمة الاتصال الداخلي (الإنتركم)', 'الاتصالات الموحدة'],
    useCasesEn: ['Offices', 'Call Centers', 'Hotels', 'Hospitals'],
    useCasesAr: ['المكاتب', 'مراكز الاتصال', 'الفنادق', 'المستشفيات'],
  },
  'tv': {
    icon: Tv,
    titleEn: 'TV & Satellite Systems',
    titleAr: 'أنظمة التلفزيون والستالايت',
    descEn: 'Centralized TV distribution and digital signage solutions for hospitality, healthcare, and commercial sectors.',
    descAr: 'حلول التوزيع التلفزيوني المركزي واللوحات الرقمية لقطاعات الضيافة والرعاية الصحية والقطاعات التجارية.',
    featuresEn: ['MATV (Master Antenna TV) systems', 'IPTV solutions for hotels and hospitals', 'Smart TV integration', 'Satellite distribution systems', 'Digital signage'],
    featuresAr: ['أنظمة التلفزيون المركزي (MATV)', 'حلول التلفزيون الشبكي (IPTV) للفنادق والمستشفيات', 'تكامل التلفزيونات الذكية', 'أنظمة توزيع الستالايت', 'اللوحات الرقمية'],
    useCasesEn: ['Hotels', 'Hospitals', 'Residential Towers', 'Airports'],
    useCasesAr: ['الفنادق', 'المستشفيات', 'الأبراج السكنية', 'المطارات'],
  },
  'nurse-call': {
    icon: Stethoscope,
    titleEn: 'Nurse Call Systems',
    titleAr: 'أنظمة استدعاء الممرضات',
    descEn: 'Critical communication systems for healthcare facilities, ensuring rapid response times and improved patient care.',
    descAr: 'أنظمة اتصالات حيوية لمرافق الرعاية الصحية، تضمن أوقات استجابة سريعة وتحسين رعاية المرضى.',
    featuresEn: ['Patient-to-nurse call systems', 'Wired and wireless solutions', 'Corridor display lights', 'Integration with hospital management systems', 'Emergency alert systems for ICUs and wards'],
    featuresAr: ['أنظمة استدعاء الممرضات من قبل المرضى', 'حلول سلكية ولاسلكية', 'أضواء عرض الممرات', 'التكامل مع أنظمة إدارة المستشفيات', 'أنظمة تنبيه الطوارئ لوحدات العناية المركزة والأجنحة'],
    useCasesEn: ['Hospitals', 'Clinics', 'Elderly Care Homes', 'Rehabilitation Centers'],
    useCasesAr: ['المستشفيات', 'العيادات', 'دور رعاية المسنين', 'مراكز التأهيل'],
  },
  'smart-systems': {
    icon: HomeIcon,
    titleEn: 'Smart Systems (Home & Building Automation)',
    titleAr: 'الأنظمة الذكية (أتمتة المباني)',
    descEn: 'Intelligent automation solutions to enhance comfort, energy efficiency, and control in residential and commercial buildings.',
    descAr: 'حلول أتمتة ذكية لتعزيز الراحة وكفاءة الطاقة والتحكم في المباني السكنية والتجارية.',
    featuresEn: ['Smart home systems (lighting, curtains, AC, security)', 'Hotel room management systems (RMS)', 'Building management systems (BMS)', 'KNX/DALI/Modbus protocol integration', 'Mobile app control and remote management'],
    featuresAr: ['أنظمة المنازل الذكية (الإضاءة، الستائر، التكييف، الأمن)', 'أنظمة إدارة غرف الفنادق (RMS)', 'أنظمة إدارة المباني (BMS)', 'تكامل بروتوكولات KNX/DALI/Modbus', 'التحكم عبر تطبيقات الجوال والإدارة عن بعد'],
    useCasesEn: ['Smart Homes', 'Luxury Hotels', 'Commercial Towers', 'Smart Cities'],
    useCasesAr: ['المنازل الذكية', 'الفنادق الفاخرة', 'الأبراج التجارية', 'المدن الذكية'],
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';
  
  const service = id && serviceData[id] ? serviceData[id] : null;

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Service not found</div>;
  }

  const Icon = service.icon;
  const title = language === 'en' ? service.titleEn : service.titleAr;
  const desc = language === 'en' ? service.descEn : service.descAr;
  const features = language === 'en' ? service.featuresEn : service.featuresAr;
  const useCases = language === 'en' ? service.useCasesEn : service.useCasesAr;

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="bg-[var(--color-primary)] text-white py-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src={`https://picsum.photos/seed/${id}/1920/600`} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 mb-6"
          >
            <div className="w-20 h-20 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center shadow-lg">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                  {language === 'en' ? 'Overview' : 'نظرة عامة'}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                  {language === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
                </h2>
                <ul className="space-y-4">
                  {features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[var(--color-bg-light)] p-8 rounded-2xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  {language === 'en' ? 'Ideal For' : 'مثالي لـ'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {useCases.map((useCase: string, idx: number) => (
                    <span key={idx} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-[var(--color-primary)] border border-gray-200 shadow-sm">
                      {useCase}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[var(--color-primary)] p-8 rounded-2xl text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'en' ? 'Need this service?' : 'هل تحتاج هذه الخدمة؟'}
                </h3>
                <p className="text-gray-300 mb-8">
                  {language === 'en' ? 'Contact our experts today for a free consultation and quote.' : 'تواصل مع خبرائنا اليوم للحصول على استشارة مجانية وعرض سعر.'}
                </p>
                <Link to="/contact" className="block w-full text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-4 rounded-lg font-bold transition-colors">
                  {language === 'en' ? 'Request a Quote' : 'اطلب عرض سعر'}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
