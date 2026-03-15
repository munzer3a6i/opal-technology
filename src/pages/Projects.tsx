import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Calendar, Layers } from 'lucide-react';
import projectImage from '../assets/project.png';

export default function Projects() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const filters = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'government', labelEn: 'Government', labelAr: 'حكومي' },
    { id: 'healthcare', labelEn: 'Healthcare', labelAr: 'رعاية صحية' },
    { id: 'education', labelEn: 'Education', labelAr: 'تعليم' },
    { id: 'hospitality', labelEn: 'Hospitality', labelAr: 'ضيافة' },
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'healthcare',
      titleEn: 'Sheikh Saleh Al-Othaimeen Eye Care Center',
      titleAr: 'مركز الشيخ صالح العثيمين لطب العيون',
      clientEn: 'Ministry of Health',
      clientAr: 'وزارة الصحة',
      cityEn: 'Buraidah',
      cityAr: 'بريدة',
      year: '2023',
      systemsEn: 'CCTV, Network, Nurse Call',
      systemsAr: 'كاميرات المراقبة، الشبكات، استدعاء الممرضات',
      image: projectImage,
    },
    {
      id: 2,
      category: 'government',
      titleEn: 'Fourth Mills – Madinah',
      titleAr: 'المطاحن الرابعة – المدينة المنورة',
      clientEn: 'Government Sector',
      clientAr: 'القطاع الحكومي',
      cityEn: 'Madinah',
      cityAr: 'المدينة المنورة',
      year: '2024',
      systemsEn: 'Access Control, Fire Alarm, PA System',
      systemsAr: 'التحكم بالدخول، إنذار الحريق، النظام الصوتي',
      image: projectImage,
    },
    {
      id: 3,
      category: 'education',
      titleEn: 'Ministry of Education Complex',
      titleAr: 'مجمع وزارة التعليم',
      clientEn: 'Ministry of Education',
      clientAr: 'وزارة التعليم',
      cityEn: 'Riyadh',
      cityAr: 'الرياض',
      year: '2025',
      systemsEn: 'Smart Systems, Network, CCTV',
      systemsAr: 'الأنظمة الذكية، الشبكات، كاميرات المراقبة',
      image: projectImage,
    },
    {
      id: 4,
      category: 'government',
      titleEn: 'Ministry of Justice Branches',
      titleAr: 'فروع وزارة العدل',
      clientEn: 'Ministry of Justice',
      clientAr: 'وزارة العدل',
      cityEn: 'Multiple Cities',
      cityAr: 'مدن متعددة',
      year: '2022',
      systemsEn: 'Network Infrastructure, IP Telephony',
      systemsAr: 'البنية التحتية للشبكات، السنترال الشبكي',
      image: projectImage,
    },
    {
      id: 5,
      category: 'hospitality',
      titleEn: 'Luxury Hotel & Suites',
      titleAr: 'فندق وأجنحة فاخرة',
      clientEn: 'Private Sector',
      clientAr: 'القطاع الخاص',
      cityEn: 'Jeddah',
      cityAr: 'جدة',
      year: '2024',
      systemsEn: 'IPTV, Smart Room Management, Wi-Fi',
      systemsAr: 'التلفزيون الشبكي، إدارة الغرف الذكية، واي فاي',
      image: projectImage,
    },
    {
      id: 6,
      category: 'healthcare',
      titleEn: 'King Fahd Specialist Hospital',
      titleAr: 'مستشفى الملك فهد التخصصي',
      clientEn: 'Ministry of Health',
      clientAr: 'وزارة الصحة',
      cityEn: 'Dammam',
      cityAr: 'الدمام',
      year: '2021',
      systemsEn: 'Fire Alarm, Access Control, CCTV',
      systemsAr: 'إنذار الحريق، التحكم بالدخول، كاميرات المراقبة',
      image: projectImage,
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="https://picsum.photos/seed/projects-header/1920/600" alt="Header Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {language === 'en' ? 'Our Projects' : 'مشاريعنا'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {language === 'en' ? 'Explore our portfolio of successful installations across Saudi Arabia.' : 'اكتشف محفظة مشاريعنا الناجحة في جميع أنحاء المملكة العربية السعودية.'}
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[var(--color-bg-light)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter.id 
                    ? 'bg-[var(--color-accent)] text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {language === 'en' ? filter.labelEn : filter.labelAr}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={language === 'en' ? project.titleEn : project.titleAr} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-[var(--color-primary)] shadow-sm">
                      {language === 'en' ? project.clientEn : project.clientAr}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 line-clamp-2">
                      {language === 'en' ? project.titleEn : project.titleAr}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 text-gray-600">
                        <Layers className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{language === 'en' ? project.systemsEn : project.systemsAr}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                        <span className="text-sm font-medium">{language === 'en' ? project.cityEn : project.cityAr}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                        <span className="text-sm font-medium">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-gray-500 text-xl">
              {language === 'en' ? 'No projects found in this category.' : 'لم يتم العثور على مشاريع في هذا القسم.'}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
