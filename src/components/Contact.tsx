import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from './ui/FormInput';
import { FormTextarea } from './ui/FormTextarea';
import { FormButton } from './ui/FormButton';
import { checkRateLimit, generateCSRFToken, validateEmail, validatePhone, sanitizeInput } from '../utils/security';

const RATE_LIMIT_SECONDS = 60;

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [csrfToken] = useState(() => generateCSRFToken());

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;

    if (!name || name.length < 2) {
      errors.name = t('contact.form.errors.name');
    }

    if (!email || !validateEmail(email)) {
      errors.email = t('contact.form.errors.email');
    }

    if (phone && !validatePhone(phone)) {
      errors.phone = t('contact.form.errors.phone');
    }

    if (!message || message.length < 10) {
      errors.message = t('contact.form.errors.message');
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT_SECONDS * 1000) {
      alert(t('contact.form.rateLimit', { seconds: RATE_LIMIT_SECONDS }));
      return;
    }

    // Check rate limit
    if (!checkRateLimit('contact-form')) {
      alert(t('contact.form.tooManyRequests'));
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validate form
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Sanitize inputs
      const sanitizedData = new FormData();
      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          sanitizedData.append(key, sanitizeInput(value));
        }
      });

      // Add CSRF token
      sanitizedData.append('csrf_token', csrfToken);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken
        },
        body: sanitizedData
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setLastSubmitTime(now);
      alert(t('contact.form.success'));
      form.reset();
      setErrors({});
    } catch (error) {
      alert(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        type="text"
        name="name"
        label={t('contact.form.name')}
        required
        error={errors.name}
        aria-invalid={!!errors.name}
        aria-describedby={errors.name ? "name-error" : undefined}
      />
      <FormInput
        type="email"
        name="email"
        label={t('contact.form.email')}
        required
        error={errors.email}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "email-error" : undefined}
      />
      <FormInput
        type="tel"
        name="phone"
        label={t('contact.form.phone')}
        error={errors.phone}
        aria-invalid={!!errors.phone}
        aria-describedby={errors.phone ? "phone-error" : undefined}
      />
      <FormTextarea
        name="message"
        rows={4}
        label={t('contact.form.message')}
        required
        error={errors.message}
        aria-invalid={!!errors.message}
        aria-describedby={errors.message ? "message-error" : undefined}
      />
      <FormButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
      </FormButton>
    </form>
  );
}