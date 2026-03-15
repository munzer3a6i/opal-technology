import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/opal-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img src={logo} alt="" className="w-24 h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${isActive(link.path) ? 'text-[var(--color-accent)]' : 'text-gray-700'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 border-s border-gray-200 ps-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[var(--color-accent)] transition-colors"
                aria-label="Toggle Language"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <Link
                to="/contact"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {t('nav.getQuote')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-[var(--color-accent)]"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[var(--color-primary)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)
                    ? 'bg-gray-50 text-[var(--color-accent)]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--color-accent)]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-3 rounded-md text-base font-medium"
                >
                  <Phone className="w-5 h-5" />
                  {t('nav.getQuote')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
