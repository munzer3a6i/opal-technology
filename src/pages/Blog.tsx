import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Tag, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Blog() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const categories = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'networks', labelEn: 'Networks', labelAr: 'الشبكات' },
    { id: 'security', labelEn: 'Security', labelAr: 'الأمن' },
    { id: 'smart-systems', labelEn: 'Smart Systems', labelAr: 'الأنظمة الذكية' },
    { id: 'company-news', labelEn: 'Company News', labelAr: 'أخبار الشركة' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const posts = [
    {
      id: 1,
      category: 'security',
      titleEn: 'The Future of CCTV Surveillance in Saudi Arabia',
      titleAr: 'مستقبل كاميرات المراقبة في المملكة العربية السعودية',
      excerptEn: 'How AI and thermal imaging are revolutionizing the security landscape in alignment with Vision 2030.',
      excerptAr: 'كيف يُحدث الذكاء الاصطناعي والتصوير الحراري ثورة في المشهد الأمني بما يتماشى مع رؤية 2030.',
      date: 'March 10, 2026',
      image: 'https://picsum.photos/seed/cctv-blog/800/500',
    },
    {
      id: 2,
      category: 'networks',
      titleEn: 'Why Structured Cabling is Crucial for Modern Businesses',
      titleAr: 'لماذا تعتبر التمديدات الهيكلية ضرورية للشركات الحديثة',
      excerptEn: 'A deep dive into the benefits of Cat6A and fiber optic networks for high-speed data transmission.',
      excerptAr: 'نظرة متعمقة على فوائد شبكات Cat6A والألياف الضوئية لنقل البيانات بسرعة عالية.',
      date: 'February 25, 2026',
      image: 'https://picsum.photos/seed/network-blog/800/500',
    },
    {
      id: 3,
      category: 'smart-systems',
      titleEn: 'Smart Building Automation: Energy Efficiency and Comfort',
      titleAr: 'أتمتة المباني الذكية: كفاءة الطاقة والراحة',
      excerptEn: 'Discover how BMS and KNX protocols are helping commercial buildings reduce their carbon footprint.',
      excerptAr: 'اكتشف كيف تساعد بروتوكولات BMS و KNX المباني التجارية على تقليل بصمتها الكربونية.',
      date: 'February 12, 2026',
      image: 'https://picsum.photos/seed/smart-blog/800/500',
    },
    {
      id: 4,
      category: 'company-news',
      titleEn: 'Opal Technology Secures Major Ministry of Health Contract',
      titleAr: 'أوبال للتقنية تفوز بعقد كبير مع وزارة الصحة',
      excerptEn: 'We are proud to announce our latest partnership to upgrade the IT infrastructure of 50+ hospitals.',
      excerptAr: 'نفخر بالإعلان عن أحدث شراكاتنا لترقية البنية التحتية لتقنية المعلومات لأكثر من 50 مستشفى.',
      date: 'January 30, 2026',
      image: 'https://picsum.photos/seed/news-blog/800/500',
    },
    {
      id: 5,
      category: 'security',
      titleEn: 'Access Control Trends for 2026',
      titleAr: 'اتجاهات أنظمة التحكم بالدخول لعام 2026',
      excerptEn: 'From biometric facial recognition to mobile credentials, explore the latest in access control.',
      excerptAr: 'من التعرف على الوجه البيومتري إلى بيانات الاعتماد عبر الهاتف المحمول، استكشف أحدث ما في أنظمة التحكم بالدخول.',
      date: 'January 15, 2026',
      image: 'https://picsum.photos/seed/access-blog/800/500',
    },
    {
      id: 6,
      category: 'networks',
      titleEn: 'Preparing Your Server Room for the AI Era',
      titleAr: 'تجهيز غرفة الخوادم الخاصة بك لعصر الذكاء الاصطناعي',
      excerptEn: 'Essential tips for cooling, power management, and rack organization in modern data centers.',
      excerptAr: 'نصائح أساسية للتبريد وإدارة الطاقة وتنظيم الكبائن في مراكز البيانات الحديثة.',
      date: 'December 20, 2025',
      image: 'https://picsum.photos/seed/server-blog/800/500',
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="https://picsum.photos/seed/blog-header/1920/600" alt="Header Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {language === 'en' ? 'News & Insights' : 'الأخبار والمقالات'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {language === 'en' ? 'Stay updated with the latest IT trends, cybersecurity tips, and company news.' : 'ابق على اطلاع بأحدث اتجاهات تقنية المعلومات ونصائح الأمن السيبراني وأخبار الشركة.'}
          </motion.p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-[var(--color-bg-light)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === category.id 
                    ? 'bg-[var(--color-accent)] text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {language === 'en' ? category.labelEn : category.labelAr}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={language === 'en' ? post.titleEn : post.titleAr} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto bg-[var(--color-accent)] text-white px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                      {categories.find(c => c.id === post.category)?.[language === 'en' ? 'labelEn' : 'labelAr']}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors">
                      {language === 'en' ? post.titleEn : post.titleAr}
                    </h3>
                    <p className="text-gray-600 mb-8 flex-grow line-clamp-3">
                      {language === 'en' ? post.excerptEn : post.excerptAr}
                    </p>
                    <button className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-accent)] transition-colors mt-auto">
                      {language === 'en' ? 'Read More' : 'اقرأ المزيد'}
                      {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-24 text-gray-500 text-xl">
              {language === 'en' ? 'No articles found in this category.' : 'لم يتم العثور على مقالات في هذا القسم.'}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
