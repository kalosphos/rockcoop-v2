import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '이우락쿱 rockcoop | 한눈에 보는 락쿱 현황',
  description: 'blip.kr reverse-engineered Next.js build',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
