import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/opal-logo.png';


export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="" className="w-24 h-12" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {language === 'en'
                ? 'Leading IT, networks, and communications company in Saudi Arabia supporting Vision 2030 with modern digital solutions.'
                : 'شركة رائدة في مجال تقنية المعلومات والشبكات والاتصالات في المملكة العربية السعودية، تدعم رؤية 2030 بحلول رقمية حديثة.'}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">{t('nav.services')}</h3>
            <ul className="space-y-3">
              <li><Link to="/services/cctv" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">{t('services.cctv')}</Link></li>
              <li><Link to="/services/network" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">{t('services.network')}</Link></li>
              <li><Link to="/services/smart-systems" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">{t('services.smartSystems')}</Link></li>
              <li><Link to="/services/fire-alarm" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">{t('services.fireAlarm')}</Link></li>
              <li><Link to="/services" className="text-[var(--color-accent)] hover:text-white transition-colors text-sm font-medium">{t('services.learnMore')} &rarr;</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                <span className="text-gray-300 text-sm" dir="ltr">+966 163238885</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                <a href="mailto:info@opal-t.com.sa" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">info@opal-t.com.sa</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
