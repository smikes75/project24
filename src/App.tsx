import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SchemaOrg } from './components/SchemaOrg';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Analytics } from './components/Analytics';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ServicePriceListPage = React.lazy(() => import('./pages/ServicePriceList'));
const TechnologyPage = React.lazy(() => import('./pages/TechnologyPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const CookiesPage = React.lazy(() => import('./pages/CookiesPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Lazy load service pages
const HDDRecoveryPage = React.lazy(() => import('./pages/services/HDDRecoveryPage'));
const HDDCaseStudies = React.lazy(() => import('./pages/services/HDDCaseStudies'));
const SSDRecoveryPage = React.lazy(() => import('./pages/services/SSDRecoveryPage'));
const SSDCaseStudies = React.lazy(() => import('./pages/services/SSDCaseStudies'));
const RAIDSystemsPage = React.lazy(() => import('./pages/services/RAIDSystemsPage'));
const RAIDCaseStudies = React.lazy(() => import('./pages/services/RAIDCaseStudies'));
const BusinessSolutionsPage = React.lazy(() => import('./pages/services/BusinessSolutionsPage'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Analytics />
          <SchemaOrg />
          <ScrollToTop />
          <div className="min-h-screen bg-white flex flex-col">
            <Routes>
              <Route
                path="*"
                element={
                  <>
                    <Header />
                    <main className="flex-grow pt-[72px]">
                      <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/services/hdd-recovery" element={<HDDRecoveryPage />} />
                            <Route path="/services/hdd-recovery/case-studies" element={<HDDCaseStudies />} />
                            <Route path="/services/ssd-recovery" element={<SSDRecoveryPage />} />
                            <Route path="/services/ssd-recovery/case-studies" element={<SSDCaseStudies />} />
                            <Route path="/services/raid-systems" element={<RAIDSystemsPage />} />
                            <Route path="/services/raid-systems/case-studies" element={<RAIDCaseStudies />} />
                            <Route path="/services/business-solutions" element={<BusinessSolutionsPage />} />
                            <Route path="/about" element={<AboutUsPage />} />
                            <Route path="/technology" element={<TechnologyPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/pricing/service-list" element={<ServicePriceListPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/faq" element={<FAQPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                          </Routes>
                        </Suspense>
                      </ErrorBoundary>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;