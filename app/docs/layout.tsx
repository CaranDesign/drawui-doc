import { ReactNode } from 'react';

import DocsNavigationMenu from '../components/docs/DocsNavigationMenu';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
      <div className='flex'>
        <aside className='w-80 hidden lg:block '>
          <div className='sticky top-20'><DocsNavigationMenu/></div>
        </aside>
        <main className='flex-1 px-5 py-10 overflow-x-scroll'>
          {children}
        </main>
      </div>
  );
}
