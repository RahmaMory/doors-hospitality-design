import type { Metadata } from 'next';
import './globals.css';
import MotionEffects from './motion-effects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Doors — Hospitality Design Directions',
  description:
    'Three website design directions for Doors, a hospitality design studio shaping serviced apartments and memorable stays.',
  keywords: ['hospitality interior design', 'serviced apartments', 'hotel apartment design', 'Cairo design studio', 'Doors'],
  openGraph: {
    title: 'Doors — Every door opens to a feeling.',
    description: 'Hospitality interiors and serviced apartments designed around the guest experience.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Doors — Every door opens to a feeling.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doors — Hospitality Design',
    description: 'Serviced apartments and hotel stays designed to be remembered.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MotionEffects />
        {children}
      </body>
    </html>
  );
}
