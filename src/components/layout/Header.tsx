'use client';

import { Book, Home, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const navItems = [
  { value: '/', label: 'Home', icon: <Home /> },
  { value: '/archives', label: 'Archives', icon: <Book /> },
  { value: '/about', label: 'About', icon: <Info /> },
];

export function Header() {
  const router = useRouter();
  // const pathname = usePathname();

  return (
    <header>
      <div className="w-full flex justify-center p-4 gap-2">
        {navItems.map((item) => (
          <Button
            key={item.value}
            variant={'ghost'}
            className="px-4 py-2 hover:cursor-pointer"
            onClick={() => router.push(item.value)}
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </div>
    </header>
  );
}
