import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mayur Kamble — Automation Test Engineer',
    short_name: 'Mayur Kamble',
    description: 'Portfolio and professional profile for Mayur Kamble.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b100e',
    theme_color: '#0b100e',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }]
  };
}
