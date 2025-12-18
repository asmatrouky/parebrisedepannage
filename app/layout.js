import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import Script from 'next/script'; 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Dépannage Pare-Brise France',
  description: 'Dépannage Pare-Brise France',
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17787265762">
          </script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17787265762');
          </script>
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
