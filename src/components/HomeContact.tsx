import React from 'react';
import { useTranslation } from 'react-i18next';
import { Contact } from './Contact';
import { Clock, Phone } from 'lucide-react';

export function HomeContact() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {t('contact.form.leaveMessage')}
            </h2>
            <Contact />
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.0887974889!2d14.448514!3d50.092200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a12edcb097%3A0x6c242d35a1adc9c0!2sJirs%C3%ADkova%20541%2F1%2C%20186%2000%20Praha%208-Karl%C3%ADn!5e0!3m2!1scs!2scz!4v1710337200000!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Otevírací doba</h3>
                    <p className="text-gray-600">
                      Po-Pá: 9:00 - 18:00<br />
                      Pohotovost: 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Kontakt</h3>
                    <p className="text-gray-600">
                      +420 123 456 789<br />
                      info@datahelp.cz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}