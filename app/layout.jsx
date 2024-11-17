import Header from '@/components/Header';
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'ToDo-List',
  description:
    'Check out the project of the [Sérgio Oliveira], specialist in [JavaScript, React, Next, TypeScript].',
  keywords: 'TodoList, web developer, designer, JavaScript, React.js, Next.js',
  openGraph: {
    title: `Sérgio Oliveira ToDo-List`,
    description:
      'Discover high quality projects and design by Sérgio Oliveira.',
    url: 'https://todo-list-tasks-two.vercel.app',
    type: 'website',
    images: [
      {
        url: 'http://localhost:3000/assets/rocket.svg',
        width: 800,
        height: 600,
        alt: 'rocket-logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
