import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', company: '', phone: '', email: '', city: '', service: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: language === 'en' ? 'Phone & Mobile' : 'الهاتف والجوال', details: ['+966 163238885', '+966 507366227'] },
    { icon: Mail, title: language === 'en' ? 'Email' : 'البريد الإلكتروني', details: ['info@opal-t.com.sa'] },
    { icon: MapPin, title: language === 'en' ? 'Address' : 'العنوان', details: [language === 'en' ? 'Al-Nahda District, Abu Bakr Al-Siddiq Road' : 'حي النهضة، طريق أبي بكر الصديق', language === 'en' ? 'Buraidah, Al-Qassim, Saudi Arabia' : 'بريدة، القصيم، المملكة العربية السعودية'] },
    { icon: Clock, title: language === 'en' ? 'Working Hours' : 'ساعات العمل', details: [language === 'en' ? 'Sunday - Thursday: 8 AM - 5 PM' : 'الأحد - الخميس: 8 صباحاً - 5 مساءً'] },
  ];

  const servicesList = [
    language === 'en' ? 'CCTV Surveillance' : 'كاميرات المراقبة',
    language === 'en' ? 'Access Control' : 'التحكم بالدخول',
    language === 'en' ? 'Network Systems' : 'أنظمة الشبكات',
    language === 'en' ? 'Fire Alarm' : 'إنذار الحريق',
    language === 'en' ? 'Audio Systems' : 'الأنظمة الصوتية',
    language === 'en' ? 'Telephone & PBX' : 'السنترال والهاتف',
    language === 'en' ? 'TV & Satellite' : 'التلفزيون والستالايت',
    language === 'en' ? 'Nurse Call' : 'استدعاء الممرضات',
    language === 'en' ? 'Smart Systems' : 'الأنظمة الذكية',
    language === 'en' ? 'Other' : 'أخرى',
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] text-white py-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img src="https://picsum.photos/seed/contact-header/1920/600" alt="Header Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {language === 'en' ? 'We are here to help. Reach out to us for any inquiries or to request a free quote.' : 'نحن هنا للمساعدة. تواصل معنا لأي استفسارات أو لطلب عرض سعر مجاني.'}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
                  {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-[var(--color-bg-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600" dir={info.icon === Phone ? 'ltr' : 'auto'}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 bg-[var(--color-primary)] p-6 rounded-2xl text-white shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="w-8 h-8 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-bold">{language === 'en' ? 'Fast Response' : 'استجابة سريعة'}</h3>
                  </div>
                  <p className="text-gray-300">
                    {language === 'en' ? 'We promise to respond to all inquiries within 24 hours.' : 'نعد بالرد على جميع الاستفسارات خلال 24 ساعة.'}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
                  {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
                </h2>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold mb-2">{language === 'en' ? 'Thank You!' : 'شكراً لك!'}</h3>
                    <p>{language === 'en' ? 'Your message has been sent successfully. We will get back to you shortly.' : 'تم إرسال رسالتك بنجاح. سنعود إليك في أقرب وقت ممكن.'}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'en' ? 'Full Name *' : 'الاسم الكامل *'}</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'en' ? 'Company Name' : 'اسم الشركة'}</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'en' ? 'Phone Number *' : 'رقم الهاتف *'}</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" dir="ltr" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'en' ? 'Email Address *' : 'البريد الإلكتروني *'}</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" dir="ltr" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'en' ? 'City' : 'المدينة'}</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'en' ? 'Service Needed' : 'الخدمة المطلوبة'}</label>
                        <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all bg-white">
                          <option value="">{language === 'en' ? 'Select a service' : 'اختر خدمة'}</option>
                          {servicesList.map((srv, idx) => (
                            <option key={idx} value={srv}>{srv}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'en' ? 'Message *' : 'الرسالة *'}</label>
                      <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-none"></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                          {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67818.26033395258!2d43.84846524274374!3d26.4137868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57e58bbf7481%3A0xcc6071e78d70cfeb!2z2LTYsdmD2Kkg2KPZiNio2KfZhCDYp9mE2KrZgtmG2YrYqSDZhNmE2KfYqti12KfZhNin2Kog2YjYqtmC2YbZitipINin2YTZhdi52YTZiNmF2KfYqg!5e1!3m2!1sen!2ssa!4v1773613315632!5m2!1sen!2ssa"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Opal Technology Location"
        ></iframe>
      </section>
    </div>
  );
}
