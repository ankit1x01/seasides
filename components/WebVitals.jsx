'use client';
import { useEffect } from 'react';

export function reportWebVitals(metric) {
  // Only track in production
  if (process.env.NODE_ENV !== 'production') return;
  
  const { name, value, rating, delta } = metric;
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vital] ${name}:`, {
      value: Math.round(value),
      rating,
      delta: Math.round(delta),
    });
  }
  
  // Send to analytics (replace with your analytics service)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: rating,
      value: Math.round(value),
    });
  }
  
  // Send to other analytics services
  // Example: Plausible
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Web Vital', {
      props: {
        metric: name,
        value: Math.round(value),
        rating: rating
      }
    });
  }
}

// Performance monitoring component
const WebVitals = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamic import of web-vitals to avoid bundle bloat
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(reportWebVitals);
        onFID(reportWebVitals);
        onFCP(reportWebVitals);
        onLCP(reportWebVitals);
        onTTFB(reportWebVitals);
        if (onINP) onINP(reportWebVitals); // INP is newer metric
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitals;