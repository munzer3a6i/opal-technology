import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Target, Eye, Shield, Award, Users, Lightbulb, Clock } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const values = [
    { icon: Shield, title: language === 'en' ? 'Quality' : 'الجودة', desc: language === 'en' ? 'Uncompromising standards in every project.' : 'معايير لا تضاهى في كل مشروع.' },
    { icon: Clock, title: language === 'en' ? 'Reliability' : 'الموثوقية', desc: language === 'en' ? 'Delivering on time, every time.' : 'التسليم في الوقت المحدد، في كل مرة.' },
    { icon: Lightbulb, title: language === 'en' ? 'Innovation' : 'الابتكار', desc: language === 'en' ? 'Embracing the latest technologies.' : 'تبني أحدث التقنيات.' },
    { icon: Users, title: language === 'en' ? 'Trust' : 'الثقة', desc: language === 'en' ? 'Building long-term client relationships.' : 'بناء علاقات طويلة الأمد مع العملاء.' },
  ];

  const team = [
    { name: language === 'en' ? 'Mohammed Suleiman Al-Dubaib' : 'محمد سليمان الضبيب', role: language === 'en' ? 'CEO & Founder' : 'الرئيس التنفيذي والمؤسس', image: 'https://picsum.photos/seed/ceo/400/400' },
    { name: language === 'en' ? 'Ahmed Al-Fahad' : 'أحمد الفهد', role: language === 'en' ? 'Technical Director' : 'المدير الفني', image: 'https://picsum.photos/seed/cto/400/400' },
    { name: language === 'en' ? 'Sarah Al-Otaibi' : 'سارة العتيبي', role: language === 'en' ? 'Operations Manager' : 'مدير العمليات', image: 'https://picsum.photos/seed/coo/400/400' },
    { name: language === 'en' ? 'Khalid Al-Dosari' : 'خالد الدوسري', role: language === 'en' ? 'Head of Security Systems' : 'رئيس الأنظمة الأمنية', image: 'https://picsum.photos/seed/security/400/400' },
  ];

  const timeline = [
    { year: '2012', title: language === 'en' ? 'Company Founded' : 'تأسيس الشركة', desc: language === 'en' ? 'Started operations in Buraidah, Al-Qassim.' : 'بدء العمليات في بريدة، القصيم.' },
    { year: '2016', title: language === 'en' ? 'Government Contracts' : 'عقود حكومية', desc: language === 'en' ? 'Secured first major Ministry of Health project.' : 'تأمين أول مشروع كبير لوزارة الصحة.' },
    { year: '2020', title: language === 'en' ? 'Expansion' : 'توسع', desc: language === 'en' ? 'Expanded services to include Smart Building Automation.' : 'توسيع الخدمات لتشمل أتمتة المباني الذكية.' },
    { year: '2026', title: language === 'en' ? 'Vision 2030 Alignment' : 'مواكبة رؤية 2030', desc: language === 'en' ? 'Leading digital transformation initiatives across KSA.' : 'قيادة مبادرات التحول الرقمي في جميع أنحاء المملكة.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="https://picsum.photos/seed/about-header/1920/600" alt="Header Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {language === 'en' ? 'About Opal Technology' : 'عن أوبال للتقنية'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {language === 'en' ? 'Empowering Saudi Arabia\'s digital transformation since 2012.' : 'تمكين التحول الرقمي في المملكة العربية السعودية منذ عام 2012.'}
          </motion.p>
        </div>
      </section>

      {/* Story & Vision/Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                {language === 'en' ? 'Our Story' : 'قصتنا'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  {language === 'en' 
                    ? 'Founded in 2012 in the heart of Al-Qassim, Opal Technology began with a vision to elevate the standard of IT and security infrastructure in Saudi Arabia. Over the past 13+ years, we have grown from a local provider to a trusted national partner.'
                    : 'تأسست أوبال للتقنية عام 2012 في قلب القصيم، برؤية تهدف إلى الارتقاء بمستوى البنية التحتية لتقنية المعلومات والأمن في المملكة العربية السعودية. على مدار أكثر من 13 عاماً، تطورنا من مزود محلي إلى شريك وطني موثوق.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Today, we are proud to support Saudi Vision 2030 by delivering cutting-edge networking, surveillance, and smart automation systems to government ministries, healthcare facilities, and private enterprises.'
                    : 'اليوم، نفخر بدعم رؤية السعودية 2030 من خلال تقديم أحدث أنظمة الشبكات والمراقبة والأتمتة الذكية للوزارات الحكومية ومرافق الرعاية الصحية والشركات الخاصة.'}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-[var(--color-bg-light)] p-8 rounded-2xl border-l-4 border-[var(--color-accent)] rtl:border-l-0 rtl:border-r-4 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Eye className="w-8 h-8 text-[var(--color-accent)]" />
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {language === 'en' 
                    ? 'To become the leading IT, networks, and communications company supporting Saudi Vision 2030 through innovative digital transformation.'
                    : 'أن نصبح الشركة الرائدة في مجال تقنية المعلومات والشبكات والاتصالات الداعمة لرؤية السعودية 2030 من خلال التحول الرقمي المبتكر.'}
                </p>
              </div>

              <div className="bg-[var(--color-bg-light)] p-8 rounded-2xl border-l-4 border-[var(--color-primary)] rtl:border-l-0 rtl:border-r-4 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="w-8 h-8 text-[var(--color-primary)]" />
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">{language === 'en' ? 'Our Mission' : 'مهمتنا'}</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {language === 'en' 
                    ? 'To deliver best-in-class IT services and modern technology that precisely meets our clients\' needs with uncompromising quality and reliability.'
                    : 'تقديم أفضل خدمات تقنية المعلومات والتقنيات الحديثة التي تلبي احتياجات عملائنا بدقة مع جودة وموثوقية لا تضاهى.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-gray-300">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 relative h-96 lg:h-auto">
                <img 
                  src="https://picsum.photos/seed/ceo-portrait/800/1000" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center">
                <Award className="w-12 h-12 text-[var(--color-accent)] mb-8" />
                <blockquote className="text-2xl md:text-3xl font-medium text-[var(--color-primary)] leading-relaxed mb-8">
                  "{language === 'en' 
                    ? 'Our success is built on a foundation of trust, technical excellence, and an unwavering commitment to our clients\' success. As Saudi Arabia transforms, Opal Technology is proud to be the digital backbone for our nation\'s most critical institutions.'
                    : 'نجاحنا مبني على أساس من الثقة والتميز الفني والالتزام الراسخ بنجاح عملائنا. مع تحول المملكة العربية السعودية، تفخر أوبال للتقنية بأن تكون العمود الفقري الرقمي لأهم مؤسسات وطننا.'}"
                </blockquote>
                <div>
                  <div className="text-xl font-bold text-[var(--color-primary)]">
                    {language === 'en' ? 'Mohammed Suleiman Al-Dubaib' : 'محمد سليمان الضبيب'}
                  </div>
                  <div className="text-[var(--color-accent)] font-medium">
                    {language === 'en' ? 'CEO & Founder' : 'الرئيس التنفيذي والمؤسس'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              {language === 'en' ? 'Our Leadership Team' : 'فريق القيادة'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">{member.name}</h3>
                <p className="text-[var(--color-accent)] font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              {language === 'en' ? 'Our Journey' : 'مسيرتنا'}
            </h2>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 px-8 py-4">
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`bg-white p-6 rounded-2xl shadow-md border border-gray-100 ${idx % 2 === 0 ? 'md:text-left rtl:md:text-right' : 'md:text-right rtl:md:text-left'} text-center`}
                    >
                      <div className="text-3xl font-black text-[var(--color-accent)] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[var(--color-primary)] rounded-full border-4 border-white shadow-sm z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
