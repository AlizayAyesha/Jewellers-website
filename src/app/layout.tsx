import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hussain Lakhani Jewellers | Legacy Since 1965 | Luxury Gold & Bridal Jewellery',
  description: 'Hussain Lakhani Jewellers - A Legacy of Pure Gold Since 1965. Trusted luxury gold & bridal jewellery in Karachi. Three generations of craftsmanship, honesty, and timeless elegance.',
  keywords: 'gold jeweller karachi, sarafa bazaar jeweller, bridal jewellery karachi, luxury gold jewellery, heritage jewellery, custom gold designs, family jeweller karachi',
  openGraph: {
    title: 'Hussain Lakhani Jewellers | Legacy Since 1965',
    description: 'Three generations of trust, craftsmanship, and timeless gold artistry in Karachi\'s heart.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Hussain Lakhani Jewellers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussain Lakhani Jewellers | Legacy Since 1965',
    description: 'Three generations of trust, craftsmanship, and timeless gold artistry in Karachi\'s heart.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
