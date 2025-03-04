import React from 'react';
import { useTranslation } from 'react-i18next';
import { Contact } from './Contact';

export function HomeContact() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {t('contact.form.leaveMessage')}
            </h2>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}