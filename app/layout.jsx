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
        url: 'https://todo-list-tasks-two.vercel.app/assets/rocket.svg',
        width: 22,
        height: 36,
        alt: 'rocket-logo',
      },
    ],
  },
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
