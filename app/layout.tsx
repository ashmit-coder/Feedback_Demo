import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { config } from '@fortawesome/fontawesome-svg-core'; // Font Awesome Core Configuration
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome Styles

config.autoAddCss = false; // Prevent Font Awesome from auto-adding CSS (avoids conflict with Next.js)

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Feedback Analysis App',
  description: 'Trying a different layout for better feedbacks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome CDN Fallback for Brands */}
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className} bg-black`}>
        <div
          className={`${inter.className} dark:bg-gray-900 dark:text-white flex flex-col min-h-screen`}
        >
          <Navbar />
          <main className="flex-1 p-4 pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
