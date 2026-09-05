import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mayur Kamble | Automotive Test Automation Engineer',
  description: 'Portfolio of Mayur Kamble — Automotive Test Automation Engineer specializing in Python, HIL, dSPACE, CAN/J1939, CAPL and web/API automation.',
  applicationName: 'Mayur Kamble Portfolio',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
};

export const viewport: Viewport = { themeColor: '#0b100e' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<script dangerouslySetInnerHTML={{__html:`if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}`}} /></body></html>;
}
