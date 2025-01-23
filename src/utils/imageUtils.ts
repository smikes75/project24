export const getBackgroundStyle = (imagePath: string) => ({
  backgroundImage: `url("${imagePath}")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#1B387A' // Fallback barva
});

// Background images for different sections
export const backgroundImages = {
  about: '/images/backgrounds/about-bg.jpg',
  business: '/images/backgrounds/business-solutions.jpg',
  contact: '/images/backgrounds/contact-bg.jpg',
  hdd: '/images/backgrounds/hdd-recovery.jpg',
  pricing: '/images/backgrounds/pricing-bg.jpg',
  raid: '/images/backgrounds/raid-recovery.jpg',
  services: '/images/backgrounds/services-bg.jpg',
  ssd: '/images/backgrounds/ssd-recovery.jpg',
  home: '/images/backgrounds/home-bg.jpg'
};

// Gallery images
export const galleryImages = {
  cleanRoom: '/images/gallery/clean-room.jpg',
  dataCenter: '/images/gallery/data-center.jpg',
  diagnostics: '/images/gallery/diagnostics.jpg',
  serverRoom: '/images/gallery/server-room.jpg'
};

export const getResponsiveImageUrl = (url: string) => {
  if (!url.startsWith('http')) return url;

  const sizes = [320, 640, 768, 1024, 1280, 1536];
  return sizes.map(size => {
    const params = new URLSearchParams({
      auto: 'format,compress',
      fit: 'crop',
      w: size.toString(),
      q: '80'
    });
    return `${url}?${params.toString()} ${size}w`;
  }).join(', ');
};

// Preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    backgroundImages.home,
    '/DataHelp.eu.svg'
  ];

  criticalImages.forEach(imagePath => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imagePath;
    document.head.appendChild(link);
  });
};