'use client';

import Link from 'next/link';

const menuItems = [
  { href: '/', label: '홈', icon: 'home' },
  { href: '/artists', label: '아티스트', icon: 'star' },
  { href: '/schedule', label: '스케줄', icon: 'calendar' },
  { href: '/explore', label: '탐색', icon: 'compass' },
  { href: '/community', label: '커뮤니티', icon: 'chat' },
];

const icons: Record<string, JSX.Element> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block size-5">
      <path d="M3.72962 9.83118L10.4796 3.64368C11.3398 2.85514 12.6602 2.85515 13.5204 3.64368L20.2704 9.83118C20.7353 10.2574 21 10.8591 21 11.4898V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V11.4898C3 10.8591 3.2647 10.2574 3.72962 9.83118Z" fill="currentColor" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block size-5">
      <path d="M12 17.7272L17.13 20.8819C17.2631 20.9627 17.4172 21.0023 17.5728 20.9955C17.7283 20.9888 17.8784 20.9361 18.004 20.8441C18.1296 20.7521 18.2252 20.6249 18.2785 20.4786C18.3319 20.3323 18.3407 20.1735 18.3038 20.0222L16.9088 14.1357L21.4744 10.1982C21.5908 10.096 21.6748 9.9619 21.7158 9.81254C21.7569 9.66317 21.7534 9.50504 21.7056 9.35768C21.6578 9.21031 21.568 9.08015 21.4471 8.98328C21.3262 8.88641 21.1796 8.82706 21.0254 8.81255L15.0338 8.32505L12.7257 2.73755C12.6668 2.5934 12.5664 2.47004 12.4371 2.38321C12.3079 2.29637 12.1557 2.25 12 2.25C11.8443 2.25 11.6922 2.29637 11.5629 2.38321C11.4337 2.47004 11.3333 2.5934 11.2744 2.73755L8.96629 8.32505L2.97473 8.81255C2.81945 8.82619 2.67163 8.88528 2.54973 8.98244C2.42784 9.0796 2.33728 9.21053 2.28937 9.35887C2.24146 9.5072 2.23832 9.66636 2.28035 9.81647C2.32237 9.96658 2.4077 10.101 2.52567 10.2029L7.09129 14.1404L5.69629 20.0222C5.65941 20.1735 5.66821 20.3323 5.72156 20.4786C5.77492 20.6249 5.87044 20.7521 5.99606 20.8441C6.12168 20.9361 6.27175 20.9888 6.42731 20.9955C6.58287 21.0023 6.73694 20.9627 6.87004 20.8819L12 17.7272Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block size-5">
      <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 2.25V5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 2.25V5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75 8.25H20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block size-5">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 7.5L10.5 10.5L7.5 16.5L13.5 13.5L16.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chat: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="block size-5">
      <path d="M16 16.5C16.8284 16.5 17.5 15.8284 17.5 15C17.5 14.1716 16.8284 13.5 16 13.5C15.1716 13.5 14.5 14.1716 14.5 15C14.5 15.8284 15.1716 16.5 16 16.5Z" fill="currentColor" />
      <path d="M10.5 16.5C11.3284 16.5 12 15.8284 12 15C12 14.1716 11.3284 13.5 10.5 13.5C9.67157 13.5 9 14.1716 9 15C9 15.8284 9.67157 16.5 10.5 16.5Z" fill="currentColor" />
      <path d="M21.5 16.5C22.3284 16.5 23 15.8284 23 15C23 14.1716 22.3284 13.5 21.5 13.5C20.6716 13.5 20 14.1716 20 15C20 15.8284 20.6716 16.5 21.5 16.5Z" fill="currentColor" />
      <path d="M13.1337 24L15.1337 27.5C15.2211 27.6533 15.3475 27.7808 15.5001 27.8694C15.6527 27.9581 15.826 28.0047 16.0025 28.0047C16.179 28.0047 16.3523 27.9581 16.5049 27.8694C16.6575 27.7808 16.7839 27.6533 16.8713 27.5L18.8713 24H27C27.2652 24 27.5196 23.8946 27.7071 23.7071C27.8946 23.5196 28 23.2652 28 23V7C28 6.73478 27.8946 6.48043 27.7071 6.29289C27.5196 6.10536 27.2652 6 27 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7V23C4 23.2652 4.10536 23.5196 4.29289 23.7071C4.48043 23.8946 4.73478 24 5 24H13.1337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Sidebar() {
  return (
    <div data-sidebar="sidebar" className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow">
      <div data-sidebar="header" className="flex flex-col gap-2 p-2 px-3 pt-6">
        <Link className="flex flex-row items-center gap-2 px-3" href="/">
          <img src="/static/images/logo_green.svg" className="block h-7" style={{ width: 'auto' }} alt="rockcoop" />
          <svg viewBox="0 0 120 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="block text-gray-900 h-6">
            <text x="2" y="21" fontFamily="Pretendard,Inter,Arial,sans-serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="-0.5">rockcoop</text>
          </svg>
        </Link>
      </div>
      <div data-sidebar="content" className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden mt-6">
        <div className="relative overflow-hidden">
          <div data-radix-scroll-area-viewport className="h-full w-full rounded-[inherit]" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <div style={{ minWidth: '100%', display: 'table' }}>
              <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col px-3">
                <div data-sidebar="group-content" className="w-full text-sm">
                  <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-2">
                    {menuItems.map((item) => (
                      <li key={item.href} data-sidebar="menu-item" className="group/menu-item relative">
                        <Link
                          href={item.href}
                          data-sidebar="menu-button"
                          data-size="default"
                          className="peer/menu-button flex w-full items-center gap-2 overflow-hidden font-medium rounded-md text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm h-10 px-3 py-[0.62rem] [&>svg]:size-5 text-cool-gray-600"
                        >
                          {icons[item.icon]}
                          <span className="text-sm leading-5 tracking-[-0.025rem]">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-sidebar="footer" className="flex flex-col gap-2 p-3">
        <button type="button" className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#6DB3FF] to-[#B16CFF] px-3 py-2 text-white">
          <img alt="challenge-icon" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="-mt-1 w-[2.7849rem] object-contain" style={{ color: 'transparent' }} src="/static/images/icons/thread/curiosity2.png" />
          <div>
            <p className="text-sm font-bold tracking-[-0.025rem]">덕력 레벨업 ZONE</p>
            <p className="text-xs tracking-[-0.025rem] text-white/80">내 덕력 레벨 확인하기</p>
          </div>
        </button>
      </div>
    </div>
  );
}
