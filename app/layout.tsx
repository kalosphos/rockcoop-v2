import type { Metadata } from 'next';
import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  title: 'rockcoop | 한눈에 보는 락쿱 현황',
  description: 'rockcoop - 락쿱 커뮤니티',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar">
          <div className="group peer hidden text-sidebar-foreground md:block" data-state="expanded" data-collapsible="" data-variant="sidebar" data-side="left">
            <div className="relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 group-data-[collapsible=icon]:w-[--sidebar-width-icon]"></div>
            <div className="fixed inset-y-0 z-[20] hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l group-data-[side=left]:border-r-cool-gray-200 font-pretendard">
              <Sidebar />
            </div>
          </div>
          <div className="w-full flex-1 md:w-[calc(100%-var(--sidebar-width))]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
