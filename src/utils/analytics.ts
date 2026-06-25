'use client';

export function trackResumeDownload() {
  if (typeof window !== 'undefined') {
    console.log('Event tracked: resume_download');
    const win = window as unknown as {
      gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    };
    if (win.gtag) {
      win.gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'Soumadip Majila Resume',
      });
    }
  }
}
