import { Header } from '@/components/layout/Header';
import './globals.css';
import { Roboto_Mono, Noto_Sans_SC } from 'next/font/google';
import Link from 'next/link';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '200', '300', '400', '500', '600', '700'],
  variable: '--font-roboto-mono',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '200', '300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-sc',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoMono.variable} ${notoSansSC.variable} `}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{
          fontFamily:
            "var(--font-roboto-mono), var(--font-noto-sans-sc), 'Noto Sans SC', sans-serif",
        }}
      >
        <div className="w-[90%] md:w-[55%] mx-auto flex-grow flex flex-col">
          <Header />
          <main className="flex-grow min-h-screen">{children}</main>
          <footer className="py-4 text-center text-sm text-muted-foreground border-t border-gray-200">
            <Link href="https://beian.miit.gov.cn/" target="_blank">
              鄂ICP备2024059759
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
