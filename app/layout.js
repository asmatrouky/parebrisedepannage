import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import Script from 'next/script'; 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = {
  title: 'Mon Site',
  description: 'Site vitrine Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={poppins.className}>
        <Script
          src="/components/AppointmentFormComponent.js"
          strategy="afterInteractive"
        />

        <Navbar />

        <appointment-form-component></appointment-form-component>

        <main>{children}</main>
        <Footer />
      </body>
      
    </html>
  );
}
